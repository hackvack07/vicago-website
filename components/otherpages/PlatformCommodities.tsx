"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TRADE_URL = "https://trade.vicago.org/marketplace";

const COMMODITIES = [
  {
    name: "Cocoa beans",
    origin: "Nigeria",
    price: "From US$3,100 / MT",
    image: "/images/about-cocoa.jpg",
    description:
      "Sourced from Nigerian farms, meeting international standards for chocolate and confectionery production.",
  },
  {
    name: "Wheat, CWAD",
    origin: "Nigeria & Canada",
    price: "From US$1,500 / MT",
    image: "/images/product-wheat1.jpg",
    description:
      "Canadian Western Amber Durum, ideal for semolina production, pasta manufacturing and couscous.",
  },
  {
    name: "Soybean",
    origin: "Nigeria",
    price: "From US$1,575 / MT",
    image: "/images/soyabeans.jpg",
    description:
      "Premium soybeans sourced from reliable Nigerian farms, ideal for oil extraction and protein production.",
  },
  {
    name: "Wheat, CWRS",
    origin: "Canada & Nigeria",
    price: "From US$2,300 / MT",
    image: "/images/about-wheat.jpg",
    description:
      "Canada Western Red Spring, premium wheat for milling, baking and food processing worldwide.",
  },
];

export default function PlatformCommodities() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".commodities-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".commodities-heading", start: "top 80%" },
      });

      gsap.from(".commodity-card", {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-lightGreen py-20 md:py-28"
    >
      <div className="max-margin flex flex-col items-center gap-14">
        <div className="commodities-heading text-center max-w-2xl flex flex-col gap-4 items-center">
          <h2 className="text-4xl md:text-5xl font-normal text-vgbrown">
            Commodities you can trade today
          </h2>
          <p className="text-base text-gray-500">
            The same premium grades we have always sourced, now open to trade
            directly on the platform, priced in US dollars, naira or Canadian
            dollars.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {COMMODITIES.map((item) => (
            <div
              key={item.name}
              className="commodity-card group bg-white rounded-2xl overflow-hidden border border-gray-200 hover-lift flex flex-col"
            >
              <div className="relative w-full h-44 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="text-lg font-bold text-vgbrown">
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold text-vgreen mt-1">
                    {item.price}
                  </p>
                </div>
                <p className="text-sm text-gray-500 leading-6 flex-1">
                  {item.description}
                </p>
                <a
                  href={TRADE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-vgreen text-sm text-vgreen px-4 py-2 rounded-lg hover:bg-vgreen hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  View listings
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
