import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import MainLayout from "./layout/main-layout";
import { useEffect } from "react";
import { Button } from "./components/ui/button";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Document({ children }: { children: React.ReactNode }) {
  const themeInitializerScript = `function _0x5bde(a){return a-=157,_0x8c6a()[a]}function _0x8c6a(){var a=["222816jpdmPq","Oczdf","(prefers-c","3546irSzzV","196OeMapj","wnvNR","62pVWhhQ","679ItXhSw","ement","514175tBelWU","824ncKCfk","matches","documentEl","4ZPfnAA","WulXQ","add","dark","nBXAA","classList","matchMedia","e: dark)","olor-schem","746598zfMhDw","22kpbtoR","light","getItem","1313208FSsuAQ","4430qfFghb","theme"];return(_0x8c6a=function(){return a})()}(function(){for(var a=_0x5bde,c=_0x8c6a();;)try{if(134926==-parseInt(a(183))*(-parseInt(a(181))/2)+parseInt(a(170))/3+parseInt(a(161))/4*(-parseInt(a(157))/5)+-parseInt(a(174))/6+parseInt(a(184))/7*(-parseInt(a(158))/8)+-parseInt(a(180))/9*(-parseInt(a(175))/10)+parseInt(a(171))/11*(parseInt(a(177))/12))break;c.push(c.shift())}catch(a){c.push(c.shift())}})(),function(){var e=_0x5bde,a={WulXQ:e(176),nBXAA:e(179)+e(169)+e(168),Oczdf:e(164),wnvNR:e(172)};try{var b=localStorage[e(173)](a[e(162)]),c=window[e(167)](a[e(165)])[e(159)],c=b||(c?a[e(178)]:a[e(182)]);document[e(160)+e(185)][e(166)][e(163)](c)}catch(a){}}();`;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const theme = savedTheme || (systemDark ? "dark" : "light");
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <style
          dangerouslySetInnerHTML={{
            __html: `body{background-color:oklch(1 0 0);color:oklch(.145 0 0)}body.dark{background-color:oklch(.145 0 0);color:oklch(1 0 0)}@media (prefers-color-scheme:dark){body:not(.light){background-color:oklch(.145 0 0);color:oklch(1 0 0)}}`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{ __html: themeInitializerScript }}
        ></script>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return <Document>{children}</Document>;
}

export default function App() {
  return <MainLayout />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="w-full h-svh flex items-center justify-center">
      <div className="w-fit h-fit container space-y-2 border-2 px-5 md:px-10 py-5 md:py-7">
        <h1 className="text-3xl font-semibold">{message}</h1>
        <p className="text-xl font-medium">{details}</p>
        {stack && (
          <pre className="w-full p-4 overflow-x-auto">
            <code>{stack}</code>
          </pre>
        )}
        <Link to="/" className="inline-block mt-1">
          <Button className="cursor-pointer rounded-none">Go Home</Button>
        </Link>
      </div>
    </main>
  );
}
