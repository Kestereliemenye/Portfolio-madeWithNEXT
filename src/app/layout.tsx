import type { Metadata } from "next";
import { ThemeProvider } from "../app/context/ThemeContext";
import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const Outfit = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Ovo = OvoFont({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio - Kester",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: "smooth" }}>
      <body
        style={{ lineHeight: "32px", overflowX: "hidden" }}
        className={`${Outfit.className} ${Ovo.className} `}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
