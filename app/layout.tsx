import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TrendyTour&Travels-Travels - Best Travel Services in Uttarakhand",
  description:
    "Explore the best car rentals, taxi services, and guided tours in Uttarakhand with T-Travels. Safe, reliable, and affordable transportation.",
    icons: "/favicon.png",
    siteName: "TrendyTourandTravels",
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

