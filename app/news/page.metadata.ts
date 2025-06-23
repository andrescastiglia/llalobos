import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LLA - Noticias",
  description: "Declaraciones oficiales y noticias de La Libertad Avanza Lobos.",
  keywords: [
    "la libertad avanza",
    "lobos",
    "noticias",
    "declaraciones",
    "politica",
    "partido politico",
    "transparencia",
    "lla",
    "libertarios",
    "afiliacion",
    "afiliar",
    "milei",
    "motosierra",
    "casa de la libertad",
    "fiscalizacion",
  ],
  openGraph: {
    title: "LLA - Noticias",
    description: "Declaraciones oficiales y noticias de La Libertad Avanza Lobos.",
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
    title: "LLA - Noticias",
    description: "Declaraciones oficiales y noticias de La Libertad Avanza Lobos.",
    images: ["https://lalibertadavanzalobos.ar/logo.png"],
  },
};