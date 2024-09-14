import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "@remix-run/react";
import "@/tailwind.css";
import { ThemeProvider } from "./context/ThemeProvider";
import Loading from "@/components/Loading";
import Nav from "@/components/landing/nav/Nav";
import * as gtag from "@/lib/gtag";
import { useEffect } from "react";

export function Layout({ children }: { children: React.ReactNode }) {

    const gaTrackingId = "GTM-5W4VRJNX"
    const location = useLocation()

    useEffect(() => {
        if (gaTrackingId?.length) {
            gtag.pageview(location.pathname, gaTrackingId);
        }
    }, [location, gaTrackingId]);

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
                <noscript><iframe title="google" src="https://www.googletagmanager.com/ns.html?id=GTM-5W4VRJNX" height="0" width="0" className="hidden invisible"></iframe></noscript>
                {process.env.NODE_ENV !== "development" || !gaTrackingId ? null : (
                    <>
                        <script
                            async
                            src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
                        />
                        <script
                            async
                            id="gtag-init"
                            dangerouslySetInnerHTML={{
                                __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());

                                    gtag('config', '${gaTrackingId}', {
                                        page_path: window.location.pathname,
                                    });
                                `,
                            }}
                        />
                        <script />
                    </>
                )}
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
