-- Enable the pgvector extension to work with embedding vectors
create extension if not exists vector;

-- 1. Create a table to store HEC Campus documents for RAG
create table if not exists documents (
  id bigserial primary key,
  title text not null,
  content text not null,
  embedding vector(1536), -- OpenAI text-embedding-3-small vectors are 1536 dimensions
  metadata jsonb,
  created_at timestamptz default now()
);

-- Note: We can add an index for faster similarity searches later if the dataset grows.
-- CREATE INDEX ON documents USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);

-- Create a function to search for documents based on cosine similarity
create or replace function match_documents (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  title text,
  content text,
  metadata jsonb,
  similarity float
)
language sql stable
as $$
  select
    documents.id,
    documents.title,
    documents.content,
    documents.metadata,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  where 1 - (documents.embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
$$;


-- 2. Create table for Support Tickets
create table if not exists tickets (
  id uuid default gen_random_uuid() primary key,
  status text check (status in ('open', 'in_progress', 'resolved', 'closed')) default 'open',
  query text not null,
  student_name text,
  ai_draft text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);


-- 3. Create table for User Profiles (RBAC)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text unique not null,
  role text check (role in ('admin', 'student')) default 'student',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Sécurité (RLS) - On vérifie si les policies existent avant de les créer pour éviter les erreurs
do $$
begin
  if not exists (select from pg_policies where tablename = 'profiles' and policyname = 'Public profiles are viewable by everyone.') then
    alter table public.profiles enable row level security;
    create policy "Public profiles are viewable by everyone." on profiles for select using (true);
    create policy "Users can insert their own profile." on profiles for insert with check (auth.uid() = id);
    create policy "Users can update own profile." on profiles for update using (auth.uid() = id);
  end if;
end $$;

-- 4. Trigger automatique pour créer un profil à l'inscription
create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, role) values (new.id, new.email, 'student')
  on conflict (id) do nothing; -- Évite de planter si le profil existe déjà
  return new;
end;
$$;

-- Suppression du trigger s'il existe déjà pour éviter les doublons
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();
