import "./globals.css";
import { roboto } from "@/lib/fonts";
import { CartProvider } from "@/context/CartContext";
import SmoothScroll from "../components/customer/Scroll";
import MetaPixel from "@/components/admin/MetaPixel";

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
        <MetaPixel />
        <SmoothScroll>
          <CartProvider>
          {children}
          </CartProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
