import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
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

        <div className="bg-black-500 text-white text-center">Developed By Muhammad Subhan</div>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
