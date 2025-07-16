import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import HEADER from "@/components/header";
import ClientLayout from "./client-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creator Toolbox: Guides & Tools for YouTube, SEO & Digital Products",
  description: "Discover expert guides, tools, and strategies to grow on YouTube, master SEO, and sell digital products. Perfect for creators & online entrepreneurs.",
  keywords: ["YouTube guides", "SEO strategies", "digital products", "content creation", "creator tools"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Creator Toolbox: Guides & Tools for YouTube, SEO & Digital Products",
    description: "Your ultimate hub for growing on YouTube, mastering SEO, and building your digital business.",
    url: "https://guidemenow-on-youtube.vercel.app",
    siteName: "Creator Toolbox",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creator Toolbox - YouTube & SEO Guides"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator Toolbox: Grow on YouTube & Sell Digital Products",
    description: "Expert guides for YouTube growth, SEO, and digital business.",
    images: ["https://yourdomain.com/og-image.png"],
  },
  themeColor: "#111827",
  metadataBase: new URL("https://guidemenow-on-youtube.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MantineProvider>
            <main className="min-h-screen bg-background" style={{ color: 'white' }}>
              <HEADER />
              <ClientLayout>{children}</ClientLayout>
            </main>
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}