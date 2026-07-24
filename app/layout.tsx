import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar"
import { BackToTop } from "@/components/ui/BackToTop"
import { AnimationsProvider } from "@/components/AnimationsProvider"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Portfolio — Creative Designer",
  description: "Creative designer portfolio showcasing exceptional work",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <ScrollProgressBar />
        <AnimationsProvider>
          {children}
        </AnimationsProvider>
        <BackToTop />
      </body>
    </html>
  )
}
