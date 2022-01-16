import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from "remix";
import { useShouldHydrate } from "remix-utils";

export function Document({
    children,
    title,
}: {
    children: React.ReactNode;
    title?: string;
}) {
    let shouldHydrate = useShouldHydrate();
    return (
        <html lang="en" className="h-full">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                {title ? <title>{title}</title> : null}
                <Meta />
                <Links />
            </head>
            <body className="h-full">
                {children}
                <ScrollRestoration />
                {shouldHydrate && <Scripts />}
                {process.env.NODE_ENV === "development" && <LiveReload />}
            </body>
        </html>
    );
}