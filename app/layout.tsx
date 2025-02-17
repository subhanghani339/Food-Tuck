import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SessionProviderWrapper from "./components/SessionProvider/SessionProviderWrapper";

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Foodtuck - Food Restaurant",
  description:
    "Foodtuck is a vibrant food restaurant offering a variety of delicious dishes, from gourmet meals to quick bites. Enjoy exceptional flavors, fresh ingredients, and a welcoming atmosphere for every meal. Visit us today for an unforgettable dining experience!",
  robots: "index, follow",
  openGraph: {
    title: "Foodtuck - Food Restaurant",
    description:
      "Foodtuck offers a range of delicious dishes with fresh ingredients and a warm dining experience. Whether you're after gourmet meals or a quick bite, Foodtuck has something for every taste!",
    url: "https://ms-foodtuck.vercel.app/",
    images: [
      {
        url: "/images/home/hero-banner.svg",
        alt: "Foodtuck - A Food Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foodtuck - Food Restaurant",
    description:
      "Foodtuck is a vibrant food restaurant offering delicious dishes with fresh ingredients and a welcoming atmosphere. Perfect for any occasion.",
    images: ["/images/home/hero-banner.svg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SessionProviderWrapper>
          {children}
          <ToastContainer position="bottom-right" />
          <div className="bg-black-500 text-white text-center">
            Developed By Muhammad Subhan
          </div>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
