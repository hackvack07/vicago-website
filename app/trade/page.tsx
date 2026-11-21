import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatformHero from "@/components/otherpages/PlatformHero";
import PlatformHowItWorks from "@/components/otherpages/PlatformHowItWorks";
import PlatformCommodities from "@/components/otherpages/PlatformCommodities";
import PlatformWhyTrade from "@/components/otherpages/PlatformWhyTrade";
import PlatformAudience from "@/components/otherpages/PlatformAudience";
import PlatformQuote from "@/components/otherpages/PlatformQuote";
import PlatformCTA from "@/components/otherpages/PlatformCTA";
import JsonLd, { webPageSchema } from "@/components/JsonLd";

const tradePageDescription =
  "Buy and source bulk agricultural commodities through Vicago. Submit RFQs for cocoa beans, soybeans, wheat, wheat flour and durum semolina with trusted suppliers, quality assurance and secure payments.";

const tradePageSchema = {
  ...webPageSchema(
    "Bulk Agricultural Commodity Trading",
    tradePageDescription,
    "https://www.vicagogroup.com/trade",
  ),
  "@type": ["WebPage", "Service"],
  areaServed: [
    { "@type": "Country", name: "Nigeria" },
    { "@type": "Country", name: "Canada" },
  ],
};

export const metadata: Metadata = {
  title: "Bulk Agricultural Commodity Trading",
  description: tradePageDescription,
  keywords: [
    "bulk agricultural commodities",
    "commodity trading platform",
    "agricultural RFQ",
    "buy cocoa beans in bulk",
    "soybeans supplier",
    "Canadian wheat",
    "wheat flour",
    "durum semolina",
    "B2B commodity marketplace",
  ],
  openGraph: {
    type: "website",
    url: "https://www.vicagogroup.com/trade",
    title: "Bulk Agricultural Commodity Trading | Vicago Trade",
    description:
      "Source cocoa beans, soybeans, wheat and other agricultural commodities in bulk. Request quotations, verify quality and arrange secure payments through Vicago.",
    images: [
      {
        url: "/images/cocoa-tree-much.jpg",
        width: 1200,
        height: 630,
        alt: "Bulk agricultural commodities from Vicago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk Agricultural Commodity Trading | Vicago Trade",
    description:
      "Buy bulk agricultural commodities through trusted suppliers, quality assurance and secure payments.",
    images: ["/images/cocoa-tree-much.jpg"],
  },
  alternates: {
    canonical: "https://www.vicagogroup.com/trade",
  },
};

const PlatformPage = () => {
  return (
    <>
      <JsonLd data={tradePageSchema} />
      <Navbar />
      <main className="relative w-full overflow-x-hidden bg-white">
        <PlatformHero />
        <PlatformHowItWorks />
        <PlatformAudience />
        <PlatformCommodities />
        <PlatformWhyTrade />
        <PlatformCTA />
        <PlatformQuote />
      </main>
      <Footer />
    </>
  );
};

export default PlatformPage;
