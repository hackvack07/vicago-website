"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TRADE_URL = "https://trade.vicago.org";

export default function PlatformAudience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".audience-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-lightGreen py-20 md:py-28"
    >
      <div className="max-margin grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* For buyers */}
        <div className="audience-card group relative rounded-2xl overflow-hidden bg-vgreen text-white min-h-90 flex flex-col justify-end hover-lift">
          <Image
            src="/images/about-hero.jpg"
            alt="Buyers sourcing commodities on Vicago Trade"
            fill
            className="object-cover opacity-25 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="relative z-10 p-6 md:p-8 flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl font-bold">For buyers</h3>
            <p className="text-sm md:text-base text-white/85 leading-7 max-w-md">
              Access premium-grade cocoa, soybeans and Canadian wheat sourced by
              Vicago from trusted suppliers. Browse available products or submit
              a Request for Quotation (RFQ) for your required quantity and
              grade, with reliable delivery and secure payment options.
            </p>
            <a
              href={`${TRADE_URL}/marketplace`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 bg-white text-vgreen font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-creamy transition-colors duration-300"
            >
              Browse marketplace
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* For sellers */}
        <div className="audience-card group relative rounded-2xl overflow-hidden bg-vgbrown text-white min-h-90 flex flex-col justify-end hover-lift">
          <Image
            src="/images/cocoa-tree.jpg"
            alt="Sellers listing commodities on Vicago Trade"
            fill
            className="object-cover opacity-25 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="relative z-10 p-6 md:p-8 flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl font-bold">For suppliers</h3>
            <p className="text-sm md:text-base text-white/85 leading-7 max-w-md">
              Supply your agricultural products directly to Vicago. Share your
              available quantities and grades, agree on supply terms and get
              paid through a secure and transparent process.
            </p>
            <a
              href={`${TRADE_URL}/marketplace`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 bg-white text-vgbrown font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-creamy transition-colors duration-300"
            >
              Become a supplier
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
