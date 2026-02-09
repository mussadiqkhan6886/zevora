import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/lib/fonts";
import { CartProvider } from "@/context/CartContext";

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
        <CartProvider>
        {children}
        </CartProvider>
      </body>
    </html>
  );
}
