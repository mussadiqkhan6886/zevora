import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/lib/fonts";
import { CartProvider } from "@/context/CartContext";
import SmoothScroll from "../components/customer/Scroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${roboto.className}`}
      >
        <SmoothScroll>
          <CartProvider>
          {children}
          </CartProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
