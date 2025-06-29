import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "../styles/styles.scss";

import { Header, Footer } from "@/components/navigation";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "default_tekst",
    template: "%s | Firmanavn",
  },
  description: "Lorem ipsum etelllerannet",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${openSans.variable}`}>
        {" "}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
