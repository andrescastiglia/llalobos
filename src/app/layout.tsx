import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Libertad Avanza Lobos",
  description:
    "Contribuciones para gastos del partido, modelo de transparencia para el municipio.",
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
    "motosierra"
  ],
  openGraph: {
    title: "La Libertad Avanza Lobos",
    description:
      "Contribuciones para gastos del partido, modelo de transparencia para el municipio.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
