// import { Metadata } from "next";
// import { getAboutPageMetadata } from "@/lib/metadata/aboutMetadata";
import Side2Content from "./Page2Content";

// export async function generateMetadata(): Promise<Metadata> {
//   const data = await getAboutPageMetadata();

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

const Side2Page = async () => {
  return <Side2Content />;
};

export default Side2Page;
