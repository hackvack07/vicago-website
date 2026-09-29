"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    color: "bg-vgreen",
    title: "Secure escrow-style payments",
    text: "Orders are paid by Letter of Credit or Cash Against Documents, and funds only move once agreed delivery conditions are confirmed.",
  },
  {
    color: "bg-vgbrown",
    title: "Verified counterparties",
    text: "Every seller submits incorporation, export licence and tax documents, reviewed by our team before they can list or place an order.",
  },
  {
    color: "bg-vgreen",
    title: "Quality you can trace",
    text: "Grades, origin and listing details travel with every order, from farm gate to final buyer.",
  },
  {
    color: "bg-vgbrown",
    title: "Global market reach",
    text: "Access verified buyers and suppliers across Nigeria and Canada, trading in USD, naira or Canadian dollars, through one account.",
  },
];

export default function PlatformWhyTrade() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-trade-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".why-trade-heading", start: "top 80%" },
      });

      gsap.from(".why-trade-image", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });

      gsap.from(".why-trade-bar", {
        x: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white py-20 md:py-28">
      <div className="max-margin flex flex-col items-center gap-14">
        <div className="why-trade-heading text-center max-w-2xl flex flex-col gap-4 items-center">
          <h2 className="text-4xl md:text-5xl font-normal text-vgreen">
            Why trade with Vicago
          </h2>
          <p className="text-base text-gray-500">
            We hold ourselves to the highest global standards. Now the
            platform holds every deal to them too.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full items-stretch">
          <div className="why-trade-image relative w-full min-h-72 lg:min-h-full rounded-2xl overflow-hidden">
            <Image
              src="/images/about-soya.webp"
              alt="Soybeans ready for trade on the Vicago platform"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-rows-4 gap-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className={`why-trade-bar ${feature.color} rounded-xl p-5 flex flex-col justify-center gap-1.5 hover-lift`}
              >
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/80 leading-6">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
