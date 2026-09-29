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

export const metadata: Metadata = {
  title: "Vicago Trade Platform",
  description:
    "Vicago Trade is a B2B marketplace for verified agricultural commodities. Buy and sell cocoa beans, soybeans and Canadian wheat in bulk, with secure payments and quality you can trace.",
  openGraph: {
    title: "Vicago Trade Platform | Vicago Group",
    description:
      "Trade cocoa, soybeans and Canadian wheat in bulk on Vicago's new B2B marketplace, connecting verified buyers and sellers with secure payments.",
  },
  alternates: {
    canonical: "https://vicagogroup.com/platform",
  },
};

const PlatformPage = () => {
  return (
    <>
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
