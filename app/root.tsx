import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "../assets/css/style.css";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Bikcraft - Bicicletas Elétricas" },
    {
      name: "description",
      content:
        "Bicicletas elétricas de alta precisão e qualidade,  feitas sob medida para o cliente. Explore o mundo na sua velocidade com a Bikcraft.",
    },
  ];
};

export const links: LinksFunction = () => {
  return [
    {
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      rel: "stylesheet",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
      rel: "stylesheet",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,900&display=swap",
      rel: "stylesheet",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="../public/scripts/amine.js" />
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
  return <Outlet />;
}
