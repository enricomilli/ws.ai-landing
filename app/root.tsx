import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, useNavigate } from '@remix-run/react'
import '@/tailwind.css'
import { ThemeProvider } from './context/ThemeProvider'
import Loading from '@/components/Loading'
import Nav from '@/components/landing/nav/Nav'
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'
import { Button } from './components/ui/button'

export function Layout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-5W4VRJNX' })
    }, [])

    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <script
                    defer
                    data-domain='worksync.ai'
                    src='https://analytics.subpact.app/js/script.hash.outbound-links.js'
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                    (() => {
                      const applyTheme = (theme) => {
                        const root = document.documentElement;
                        root.classList.remove('light', 'dark');
                        root.classList.add(theme);
                        root.style.colorScheme = theme;
                      };

                      const getSystemTheme = () => {
                        const darkModeQuery = '(prefers-color-scheme: dark)';
                        return window.matchMedia(darkModeQuery).matches ? 'dark' : 'light';
                      };

                      try {
                        const storedTheme = localStorage.getItem('vite-ui-theme');

                        if (!storedTheme) {
                          // Default to dark mode if no theme is specified
                          applyTheme('dark');
                        } else if (storedTheme === 'system') {
                          applyTheme(getSystemTheme());
                        } else if (storedTheme === 'light' || storedTheme === 'dark') {
                          applyTheme(storedTheme);
                        }

                        // Listen for system theme changes
                        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                          if (storedTheme === 'system') {
                            applyTheme(e.matches ? 'dark' : 'light');
                          }
                        });
                      } catch (error) {
                        console.error('Error applying theme:', error);
                      }
                    })();

                  `,
                    }}
                />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default function App() {
    return (
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <Nav />
            <Outlet />
        </ThemeProvider>
    )
}

export function HydrateFallback() {
    return <Loading />
}

export function ErrorBoundary() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/', { replace: true })
    }, [navigate])

    return (
        <html lang='en'>
            <head>
                <title>404 - Page Not Found</title>
                <Meta />
                <Links />
            </head>
            <body>
                <div className='grid h-screen place-content-center bg-white px-4'>
                    <div className='text-center'>
                        <h1 className='text-9xl font-black text-gray-200'>404 - Page Not Found</h1>

                        <p className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Uh-oh!</p>

                        <p className='mt-4 text-gray-500'>We can&apos;t find that page.</p>

                        <Link to='/'>
                            <Button>Go Back Home</Button>
                        </Link>
                    </div>
                </div>
                <Scripts />
            </body>
        </html>
    )
}
