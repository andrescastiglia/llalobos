import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Navigator } from "@/components/navigator";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Suspense } from "react";
import { Loading } from "@/components/loading";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Libertad Avanza - Lobos",
  description:
    "En este espacio, la libertad se encuentra con la transparencia. Creemos en el acceso sin restricciones a la información, donde cada dato es un paso hacia la autonomía individual.",
  keywords: [
    "la libertad avanza",
    "politica",
    "lobos",
    "partido politico",
    "transparencia",
    "lla",
    "libertarios",
    "afiliacion",
    "afiliar",
    "contribuciones",
    "milei",
    "motosierra",
    "casa de la libertad"
  ],
  openGraph: {
    title: "La Libertad Avanza Lobos",
    description:
      "En este espacio, la libertad se encuentra con la transparencia. Creemos en el acceso sin restricciones a la información, donde cada dato es un paso hacia la autonomía individual.",
    url: "https://lalibertadavanzalobos.ar",
    type: "website",
    images: [
      {
        url: "https://lalibertadavanzalobos.ar/logo.png",
        width: 192,
        height: 192,
        alt: "Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "La Libertad Avanza Lobos",
    description:
      "Contribuciones para gastos del partido, modelo de transparencia para el municipio.",
    images: ["https://lalibertadavanzalobos.ar/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-28H16J7GJJ"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-28H16J7GJJ');
          `}
        </Script>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Feed RSS de La Libertad Avanza Lobos"
          href="https://lalibertadavanzalobos.ar/rss"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="__next">
          <Navigator />
          <div className="mt-10 grid grid-rows-[auto_1fr_5px] items-center justify-items-center min-h-screen p-1 pb-5 gap-4 sm:p-5 font-[family-name:var(--font-geist-sans)]">
            <Header />
            <Suspense fallback={<Loading />}>{children}</Suspense>
            &nbsp;
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
