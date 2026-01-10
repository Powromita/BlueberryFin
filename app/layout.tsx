import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Two M Connect - Financial Advisory",
  description: "Two M Connect Private Limited - New age financial advisory firm for corporates and HNIs",
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
            
            // Absolute scroll reset - must happen before anything renders
            function forceScrollToTop() {
              document.documentElement.scrollTop = 0;
              document.documentElement.scrollLeft = 0;
              document.body.scrollTop = 0;
              document.body.scrollLeft = 0;
              window.scrollTo(0, 0);
            }
            
            // Lock overflow immediately
            function lockScroll() {
              document.documentElement.style.overflow = 'hidden';
              document.body.style.overflow = 'hidden';
              document.documentElement.style.height = '100vh';
              document.body.style.height = '100vh';
            }
            
            // Execute immediately
            lockScroll();
            forceScrollToTop();
            
            // Execute on various lifecycle events
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', forceScrollToTop);
            }
            window.addEventListener('load', forceScrollToTop);
            window.addEventListener('beforeunload', forceScrollToTop);
            
            // Execute multiple times to ensure it sticks
            for (let i = 0; i < 10; i++) {
              setTimeout(forceScrollToTop, i * 50);
            }
          `
        }} />
      </head>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
