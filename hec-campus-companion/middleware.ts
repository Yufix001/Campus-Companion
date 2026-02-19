import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return request.cookies.get(name)?.value
                },
                set(name: string, value: string, options: CookieOptions) {
                    request.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    response.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                },
                remove(name: string, options: CookieOptions) {
                    request.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    response.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                },
            },
        }
    )

    const { data: { session } } = await supabase.auth.getSession()

    // Smart Redirection for Logged In Users accessing /login
    if (request.nextUrl.pathname.startsWith('/login')) {
        if (session) {
            // Check Profile Role
            // [DEV] Default to admin for everyone
            return NextResponse.redirect(new URL('/admin', request.url))

            /*
            const { data: profile } = await supabase
                .from('profiles')
                .select('role')
                .eq('id', session.user.id)
                .single()

            if (profile?.role === 'admin') {
                return NextResponse.redirect(new URL('/admin', request.url))
            }
            // Default Student Redirection
            return NextResponse.redirect(new URL('/portal', request.url))
            */
        }
    }

    // Protect /admin routes
    if (request.nextUrl.pathname.startsWith('/admin')) {
        // Exempt /admin/login from protection loop to avoid infinite redirect
        if (request.nextUrl.pathname === '/admin/login') {
            if (session) {
                return NextResponse.redirect(new URL('/admin', request.url))
            }
            return response
        }

        if (!session) {
            return NextResponse.redirect(new URL('/login', request.url)) // Unified login
        }

        // Strict Role Check for Admin Routes
        // [DEV] Fake Admin Access: Allow everyone in.
        /*
        const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', session.user.id)
            .single()

        if (profile?.role !== 'admin') {
            // Redirect unauthorized users to portal
            return NextResponse.redirect(new URL('/portal', request.url))
        }
        */
    }

    return response
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
