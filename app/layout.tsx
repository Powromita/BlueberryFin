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
              }
              window.scrollTo(0, 0);
            }
            
            // Lock overflow immediately
            function lockScroll() {
              if (document.documentElement) {
                document.documentElement.style.overflow = 'hidden';
                document.documentElement.style.height = '100vh';
              }
              if (document.body) {
                document.body.style.overflow = 'hidden';
                document.body.style.height = '100vh';
              }
            }
            
            // Execute immediately
            if (document.body) {
              lockScroll();
              forceScrollToTop();
            } else {
              // If body isn't ready, wait for it
              document.addEventListener('DOMContentLoaded', () => {
                lockScroll();
                forceScrollToTop();
              });
            }
            
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
>>>>>>> 469cb6db7b9dbce565701360b0f15e63ffedcae5
          `
        }} />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  )
}
