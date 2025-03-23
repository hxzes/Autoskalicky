import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { NavigationProvider } from "@/providers/navigation-provider"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: "Auto Skalický | Predaj a servis vozidiel",
  description:
    "Predaj a servis kvalitných vozidiel s kompletnou servisnou históriou. V automobilovom priemysle pôsobíme už viac ako 13 rokov.",
  keywords: ["auto", "vozidlá", "predaj áut", "servis áut", "ojazdené vozidlá", "auto skalický", "močenok"],
  authors: [{ name: "Auto Skalický" }],
  creator: "Auto Skalický",
  publisher: "Auto Skalický",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://autoskalicky.sk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Auto Skalický | Predaj a servis vozidiel",
    description:
      "Predaj a servis kvalitných vozidiel s kompletnou servisnou históriou. V automobilovom priemysle pôsobíme už viac ako 13 rokov.",
    url: "https://autoskalicky.sk",
    siteName: "Auto Skalický",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Auto Skalický - Predaj a servis vozidiel",
      },
    ],
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Skalický | Predaj a servis vozidiel",
    description:
      "Predaj a servis kvalitných vozidiel s kompletnou servisnou históriou. V automobilovom priemysle pôsobíme už viac ako 13 rokov.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sk" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <NavigationProvider>{children}</NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'