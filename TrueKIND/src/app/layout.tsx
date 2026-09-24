import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const editorial = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrueKind — Clean, Conscious, Performance Skincare",
  description:
    "Unreservedly honest products that truly work, be kind to skin and the planet – no exceptions! 100% transparent formula disclosure and EWG-rated ingredients.",
  icons: { icon: "/leaf.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${editorial.variable} min-h-screen flex flex-col bg-[#FAF8F5] text-[#3B3B3B] antialiased font-sans tabular-nums selection:bg-[#EAE2D7] selection:text-neutral-900`}
      >
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <CartDrawer />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
