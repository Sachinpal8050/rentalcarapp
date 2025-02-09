import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MBT-Travels - Chauffeur-Driven Car Rental Service",
  description: "Affordable, reliable, and luxurious travel solutions with our chauffeur-driven car rental service.",
  icons: "/favicon.png",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

