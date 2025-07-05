import { Page1Content } from "./Page1Content";
// import { Metadata } from "next";
// import { getCoachingPageMetadata } from "@/lib/metadata/coachingMetadata";

// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getCoachingPageMetadata();

//   return {
//     title: data.title,
//     description: data.description,
//     keywords: data.keywords,
//     openGraph: {
//       title: data.title,
//       description: data.description,
//       images: data.ogImage
//         ? [
//             {
//               url: data.ogImage,
//               width: 1200,
//               height: 630,
//             },
//           ]
//         : [],
//       siteName: "Bengt Johansson",
//       locale: "no_NO",
//       type: "website",
//       url: "https://dittdomene.no/om", // Husk å tilpasse denne for hver side
//     },
//   };
// }

const Side1Page = async () => {
  return <Page1Content />;
};

export default Side1Page;
