"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PlatformHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".platform-hero-animate",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
      );
      gsap.fromTo(
        ".platform-hero-image",
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.3 },
      );
      gsap.fromTo(
        ".platform-hero-card",
        { opacity: 0, y: 30, x: -10 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.8,
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-lightGreen pt-32 md:pt-40 pb-16 md:pb-24"
    >
      <div className="max-margin grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
        {/* Left: copy */}
        <div className="flex flex-col items-start gap-6">
          <h1 className="platform-hero-animate text-4xl sm:text-5xl lg:text-6xl lg:leading-16 font-normal font-grotesque leading-tight text-vgreen max-w-xl">
            Trade commodities in bulk. Pay with confidence.
          </h1>

          <span className="platform-hero-animate block h-1 w-14 rounded-full bg-vgbrown" />

          <p className="platform-hero-animate text-base text-gray-500 max-w-lg leading-7">
            Vicago now connects verified buyers and sellers on one secure
            marketplace, so bulk deals on cocoa beans, soybeans and other
            product close faster, with quality and payment protected from source
            to final buyer.
          </p>
        </div>

        {/* Right: image + floating order card */}
        <div className="relative w-full">
          <div className="platform-hero-image relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/cocoa-tree-much.jpg"
              alt="Bulk agricultural commodities ready for trade on the Vicago platform"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Floating order status card */}
          <div className="platform-hero-card absolute -bottom-8 left-4 sm:left-8 w-[calc(100%-2rem)] max-w-xs bg-white rounded-xl shadow-2xl p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400 font-medium">
                Order VG-2481
              </span>
              <span className="text-xs font-semibold text-vgreen">
                Funds secured
              </span>
            </div>
            <p className="text-sm font-bold text-vgbrown mb-2">
              Cocoa beans, 25 MT
            </p>
            <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden mb-2">
              <div className="h-full w-3/4 rounded-full bg-vgreen" />
            </div>
            <p className="text-[11px] text-gray-400">
              Inspection complete · Awaiting shipment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
