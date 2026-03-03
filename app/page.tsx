import type { Metadata } from "next";
import Footer from "@/components/Footer";
import About from "@/components/homePage/About";
import Hero from "@/components/homePage/Hero";
import Mission from "@/components/homePage/Mission";
import Partners from "@/components/homePage/Partners";
import StackingCardsSection from "@/components/homePage/Products";
import Story from "@/components/homePage/Story";
import TestimonialCarousel from "@/components/homePage/Testimonial";
import Values from "@/components/homePage/Values";

export const metadata: Metadata = {
  title: "Vicago Group | Agricultural Commodity Trading",
  description:
    "Vicago Group connects premium Nigerian cocoa and Canadian wheat to global markets. 45+ years of operational history, 10,000+ farmers, 150,000+ metric tons traded.",
  alternates: {
    canonical: "https://vicagogroup.com",
  },
};

import JsonLd, { organizationSchema } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";

export default function App() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <Navbar />
      <main className="relative w-full overflow-x-hidden overflow-y-hidden ">
        <Hero />
        <Partners />
        <About />
        <Mission />
        <Values />
        <StackingCardsSection />
        <TestimonialCarousel />
        <Story />
        <Footer />
      </main>
    </>
  );
}
