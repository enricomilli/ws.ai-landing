import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import "@/tailwind.css";
import { ThemeProvider } from "./context/ThemeProvider";
import Loading from "@/components/Loading";
import Nav from "@/components/landing/nav/Nav";

export function Layout({ children }: { children: React.ReactNode }) {
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
