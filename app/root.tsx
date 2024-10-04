import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from "@remix-run/react";
import "@/tailwind.css";
import { ThemeProvider } from "./context/ThemeProvider";
import Loading from "@/components/Loading";
import Nav from "@/components/landing/nav/Nav";
import TagManager from 'react-gtm-module'
import { useEffect } from "react";
import { Button } from "./components/ui/button";


export function Layout({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        TagManager.initialize({ gtmId: "GTM-5W4VRJNX" })
    }, [])

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
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
    );
}

export default function App() {
    return (
        <ThemeProvider
            defaultTheme="dark"
            storageKey="vite-ui-theme">
            <Nav />
            <Outlet />
        </ThemeProvider>
    );
}

export function HydrateFallback() {
    return <Loading />;
}

export function ErrorBoundary() {
    const error = useRouteError();

    console.error(error);
    return (
        <html lang="en">
            <head>
                <title>Oh no!</title>
                <Meta />
                <Links />
            </head>
            <body>
                <div className="grid h-screen place-content-center bg-white px-4">
                    <div className="text-center">
                        <h1 className="text-9xl font-black text-gray-200">404</h1>

                        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>

                        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

                        <Link
                            to="/"
                        >
                            <Button>
                                Go Back Home
                            </Button>
                        </Link>
                    </div>
                </div>
                <Scripts />
            </body>
        </html>
    );
}
