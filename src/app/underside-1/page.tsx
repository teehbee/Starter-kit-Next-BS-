import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Side 1 | Mitt Firma",
  description: "Ta kontakt for å lære mer om våre tjenester.",
  keywords: ["coaching", "mental trening", "kontakt"],
  openGraph: {
    title: "Kontakt oss – Mitt Firma",
    description: "Slik kommer du i kontakt med oss.",
    url: "https://mittdomene.no/kontakt",
    siteName: "Mitt Firma",
    images: [
      {
        url: "https://mittdomene.no/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "no_NO",
    type: "website",
  },
};

function Underside1() {
  return (
    <section>
      <h1>Underside 1</h1>
    </section>
  );
}

export default Underside1;
