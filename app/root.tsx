import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

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

export function Layout({ children }: { children: React.ReactNode }) {
  const themeInitializerScript = `function _0x5bde(t,e){return t-=157,_0x8c6a()[t]}function _0x8c6a(){var t=["222816jpdmPq","Oczdf","(prefers-c","3546irSzzV","196OeMapj","wnvNR","62pVWhhQ","679ItXhSw","ement","514175tBelWU","824ncKCfk","matches","documentEl","4ZPfnAA","WulXQ","add","dark","nBXAA","classList","matchMedia","e: dark)","olor-schem","746598zfMhDw","22kpbtoR","light","getItem","1313208FSsuAQ","4430qfFghb","theme"];return(_0x8c6a=function(){return t})()}(function(){for(var t=_0x5bde,e=_0x8c6a();;)try{if(134926==-parseInt(t(183))*(-parseInt(t(181))/2)+parseInt(t(170))/3+parseInt(t(161))/4*(-parseInt(t(157))/5)+-parseInt(t(174))/6+parseInt(t(184))/7*(-parseInt(t(158))/8)+-parseInt(t(180))/9*(-parseInt(t(175))/10)+parseInt(t(171))/11*(parseInt(t(177))/12))break;e.push(e.shift())}catch(t){e.push(e.shift())}})(),function(){var t=_0x5bde,e={WulXQ:t(176),nBXAA:t(179)+t(169)+t(168),Oczdf:t(164),wnvNR:t(172)};try{var n=localStorage[t(173)](e[t(162)]),a=window[t(167)](e[t(165)])[t(159)],a=n||(a?e[t(178)]:e[t(182)]);document[t(160)+t(185)][t(166)][t(163)](a)}catch(t){}}();`;
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
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

export default function App() {
  return <Outlet />;
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
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
