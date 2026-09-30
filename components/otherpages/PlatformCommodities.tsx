"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TRADE_URL = "https://trade.vicago.org/marketplace";

function SackSproutIllustration() {
  return (
    <svg
      viewBox="0 0 240 176"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full text-vgreen"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="A burlap sack with a young plant sprouting from the top"
    >
      {/* ground line */}
      <path d="M52 156 H188" strokeOpacity="0.35" />

      {/* sack body */}
      <path
        d="M84 84 C68 100 62 128 66 148 C67 153 71 156 77 156 H163 C169 156 173 153 174 148 C178 128 172 100 156 84 Z"
        fill="currentColor"
        fillOpacity="0.22"
      />

      {/* gathered neck of the sack */}
      <path d="M84 84 C98 90 142 90 156 84" />

      {/* rolled top / tie */}
      <path d="M90 84 C88 76 92 70 100 68 C112 65 128 65 140 68 C148 70 152 76 150 84" />
      <path d="M96 78 C110 82 130 82 144 78" strokeOpacity="0.55" />

      {/* burlap weave texture */}
      <g strokeOpacity="0.4" strokeWidth="2">
        <path d="M82 108 H158" strokeDasharray="4 7" />
        <path d="M78 122 H162" strokeDasharray="4 7" strokeDashoffset="3" />
        <path d="M76 136 H164" strokeDasharray="4 7" />
        <path d="M100 96 V150" strokeDasharray="4 8" />
        <path d="M120 96 V152" strokeDasharray="4 8" strokeDashoffset="4" />
        <path d="M140 96 V150" strokeDasharray="4 8" />
      </g>

      {/* sprout stem */}
      <path d="M120 66 C120 54 120 44 120 34" />

      {/* left leaf */}
      <path
        d="M120 46 C108 46 98 40 94 28 C106 26 117 32 120 46 Z"
        fill="currentColor"
      />
      {/* right leaf */}
      <path
        d="M120 36 C122 22 132 14 146 14 C146 28 136 36 120 36 Z"
        fill="currentColor"
      />

      {/* loose grains */}
      <g fill="currentColor" stroke="none" fillOpacity="0.55">
        <ellipse
          cx="46"
          cy="150"
          rx="4"
          ry="2.4"
          transform="rotate(-20 46 150)"
        />
        <ellipse
          cx="196"
          cy="152"
          rx="4"
          ry="2.4"
          transform="rotate(15 196 152)"
        />
        <ellipse
          cx="186"
          cy="144"
          rx="3.4"
          ry="2"
          transform="rotate(-30 186 144)"
        />
      </g>
    </svg>
  );
}

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
    name: "Wheat Flour",
    origin: "Canada & Nigeria",
    price: "From US$1,300 / MT",
    image: "/images/wheat-flour.avif",
    description:
      "Finely milled wheat flour, suitable for baking and general culinary use.",
  },
  {
    name: "Durum Semolina",
    origin: "Canada & Nigeria",
    price: "From US$2,300 / MT",
    image: "/images/durum-semolina.avif",
    description:
      "High-quality durum semolina, perfect for pasta production and other culinary applications.",
  },
  {
    name: "Wheat, CWRS",
    origin: "Canada & Nigeria",
    price: "From US$2,300 / MT",
    image: "/images/about-wheat.jpg",
    description:
      "Canada Western Red Spring, premium wheat for milling, baking and food processing worldwide.",
  },
  {
    name: "Whole GrainDurum Semolina",
    origin: "Canada & Nigeria",
    price: "From US$2,000 / MT",
    image: "/images/whole-grain.avif",
    description:
      "Whole grain durum semolina, ideal for nutritious pasta and other culinary uses.",
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
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {COMMODITIES.map((item) => (
            <div
              key={item.name}
              className="commodity-card group col-span-1 bg-white rounded-2xl overflow-hidden border border-gray-200 hover-lift flex flex-col"
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
          <div className="commodity-card col-span-1 bg-white rounded-2xl overflow-hidden border border-dashed border-vgreen/40 flex flex-col">
            {/* same h-44 slot as the photo cards so the row lines up */}
            <div className="relative w-full h-44 bg-lightGreen flex items-center justify-center p-4">
              <SackSproutIllustration />
            </div>

            <div className="p-5 flex flex-col gap-3 flex-1">
              <div>
                <h3 className="text-lg font-bold text-vgbrown">
                  More commodities coming soon
                </h3>
                <p className="text-xs font-semibold text-vgreen mt-1">
                  Growing the marketplace
                </p>
              </div>
              <p className="text-sm text-gray-500 leading-6 flex-1">
                Need something specific? Tell us and we will source it for you.
              </p>
              <a
                href="/contact"
                className="border border-vgreen text-sm text-vgreen px-4 py-2 rounded-lg hover:bg-vgreen hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Request a commodity
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
