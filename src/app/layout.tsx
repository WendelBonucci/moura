import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Moura Urbanismo | Empreendimentos e Loteamentos",
    template: "%s | Moura Urbanismo",
  },

  description:
    "Conheça a Moura Urbanismo. Empreendimentos e loteamentos planejados no Ceará, com infraestrutura, qualidade e oportunidades para construir seu futuro.",

  applicationName: "Moura Urbanismo",

  keywords: [
    "Moura Urbanismo",
    "Moura Urbanismo LTDA",
    "loteamentos no Ceará",
    "empreendimentos imobiliários",
    "loteamentos planejados",
    "terrenos no Ceará",
    "loteamentos no litoral cearense",
    "urbanismo",
    "mercado imobiliário",
  ],

  authors: [{ name: "Moura Urbanismo" }],
  creator: "Moura Urbanismo",
  publisher: "Moura Urbanismo",

  metadataBase: new URL("https://mouraonline.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mouraonline.com",
    siteName: "Moura Urbanismo",
    title: "Moura Urbanismo | Empreendimentos e Loteamentos",
    description:
      "Conheça os empreendimentos da Moura Urbanismo no Ceará. Loteamentos planejados para quem deseja construir, investir e realizar novos projetos.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moura Urbanismo — Empreendimentos e Loteamentos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Moura Urbanismo | Empreendimentos e Loteamentos",
    description:
      "Conheça nossos empreendimentos e descubra novas oportunidades para construir seu futuro.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <Header />
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer />
    </html>
  );
}
