import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kde mám pozemek | Geodetické, projekční a realitní služby",
  description:
    "Komplexní geodetické, projekční, realitní a právní služby v oblasti nemovitostí. Od vytyčení hranic po prodej — vše pod jednou střechou. Brno.",
  keywords: [
    "geodézie",
    "pozemky",
    "geometrický plán",
    "vytyčení hranic",
    "realitní činnost",
    "znalecké posudky",
    "Brno",
  ],
  openGraph: {
    title: "Kde mám pozemek s.r.o.",
    description:
      "Geodetické, projekční, realitní a právní služby pro nemovitosti v ČR.",
    url: "https://www.kdemampozemek.cz",
    siteName: "Kde mám pozemek",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
