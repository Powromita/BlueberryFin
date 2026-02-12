import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: "Blueberry Fin - Financial Advisory",
  description: "Blueberry Fin - New age financial advisory firm for corporates and HNIs",
  generator: "v0.app",
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
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  )
}
