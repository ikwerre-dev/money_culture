import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Money Culture Community",
  description: "A digital hub empowering individuals and businesses through financial literacy, skill development, and entrepreneurial growth. Join our community to unlock your potential and achieve financial independence.",
  keywords: [
    "Financial Literacy",
    "Skill Development",
    "Entrepreneurship",
    "Business Growth",
    "Money Management",
    "Career Development",
    "Digital Skills",
    "Financial Independence",
    "Community Building",
    "Business Education"
  ],
  authors: [{ name: "Money Culture Community" }],
  creator: "Money Culture Community",
  publisher: "Money Culture Community",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  themeColor: "#095D7E",
  colorScheme: "light",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moneyculturecommunity.com",
    siteName: "Money Culture Community",
    title: "Money Culture Community",
    description: "Empowering individuals through financial literacy and entrepreneurial growth",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Money Culture Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Money Culture Community",
    description: "Empowering individuals through financial literacy and entrepreneurial growth",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
