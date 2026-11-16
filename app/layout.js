import { Cormorant_Garamond, Figtree } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--display" });
const body = Figtree({ subsets: ["latin"], variable: "--body" });

export const metadata = {
  title: "Indigra Global Enterprises | Granite headstones & memorials, made at the source",
  description:
    "100% export-oriented granite memorial manufacturer near Chennai Port. Headstones, sculptures, benches, vases and large monuments from our own IG Black quarry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
