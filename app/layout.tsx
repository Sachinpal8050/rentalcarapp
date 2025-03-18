import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TrendyTour&Travels - Best Travel Services in Haridwar Uttarakhand",
  description:
    "Explore the best car rentals, taxi services, and guided tours in Uttarakhand with T-Travels. Safe, reliable, and affordable transportation.",
  keywords:
    "Uttarakhand travel, car rental, taxi services, Haridwar tourism, best tours in Uttarakhand, char dham yatra",
  icons: "/favicon.png",
  openGraph: {
    title: "TrendyTour&Travels-Travels - Best Travel Services in Uttarakhand",
    description:
      "Affordable and reliable car rental services for tourists in Uttarakhand. Book your ride now!",
    url: "https://trendytourandtravels.com",
    siteName: "T-Travels",
    images: [
      {
        url: "https://trendytourandtravels.com/carWithDriver.png",
        width: 1200,
        height: 630,
        alt: "T-Travels Car Rental",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrendyTour&Travels - Best Travel Services in Haridwar Uttarakhand",
    description:
      "Book the best car rental and taxi services in Uttarakhand at affordable prices.",
    images: ["https://trendytourandtravels.com/carWithDriver.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
