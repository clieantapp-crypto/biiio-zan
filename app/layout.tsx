import type React from "react"
import type { Metadata } from "next"
import "./globals.css"


export const metadata: Metadata = {
  title: "روابط التواصل | Bio Links",
  description: "تواصل معنا عبر منصاتنا المختلفة - Connect with us across platforms",
  keywords: ["bio links", "social media", "روابط التواصل", "وسائل التواصل"],
  authors: [{ name: "Your Brand Name" }],
  openGraph: {
    title: "روابط التواصل | Bio Links",
    description: "تواصل معنا عبر منصاتنا المختلفة",
    type: "website",
    locale: "ar_SA",
  },
  robots: {
    index: true,
    follow: true,
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  )
}
