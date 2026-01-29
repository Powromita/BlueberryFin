import type React from "react"
import type { Metadata } from "next"
import { Outfit, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"

// Option 2: Modern Professional
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Blueberry Fin - Financial Advisory",
  description: "Blueberry Fin - New age financial advisory firm for corporates and HNIs",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#001F3F",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            // Disable automatic scroll restoration
            if ('scrollRestoration' in window.history) {
              window.history.scrollRestoration = 'manual';
            }
          `
        }} />
      </head>
      <body className={`${outfit.variable} ${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  )
}
