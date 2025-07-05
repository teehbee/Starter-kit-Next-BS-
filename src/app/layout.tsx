// import type { Metadata } from "next";
import "../styles/styles.scss";
import { Header, Footer } from "@/components/navigation";
import { getFontClasses } from "@/lib/fonts";
// import Script from "next/script";

// export const metadata: Metadata = {
//   title: {
//     default: "Bengt Johansson",
//     template: "%s | Bengt Johansson",
//   },
//   description: "Offisiell nettside for Bengt Johansson – coaching og utvikling.",
//   robots: {
//     index: false,
//     follow: false,
//   },
//   icons: {
//     icon: "/assets/favicon.ico",
//   },
// };

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Google tag manager key from env
// const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <head>{/* Google Tag Manager script here */}</head>
      <body className={getFontClasses()}>
        <noscript>{/* Google Tag Manager iframe here */}</noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
