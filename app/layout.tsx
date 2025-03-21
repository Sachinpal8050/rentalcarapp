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
      <link rel="icon" href="/favicon.png" type="image/png" />
      <meta
        property="og:title"
        content="TrendyTour&Travels - Best Travel Services in Haridwar Uttarakhand"
      />
      <meta
        property="og:description"
        content="Book the best car rental and taxi services in Uttarakhand at affordable prices."
      />
      <meta
        property="og:image"
        content="https://trendytourandtravels.com/favicon.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:url" content="https://trendytourandtravels.com" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="TrendyTour&Travels - Best Travel Services in Haridwar Uttarakhand"
      />
      <meta
        name="twitter:description"
        content="Book the best car rental and taxi services in Uttarakhand at affordable prices."
      />
      <meta
        name="twitter:image"
        content="https://trendytourandtravels.com/favicon.png"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
