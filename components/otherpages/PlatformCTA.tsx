"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Package, ArrowRight, ShieldCheck, Banknote } from "lucide-react";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function PlatformCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-animate", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      // Goods token travelling from seller to buyer
      gsap.to(".cta-token-goods", {
        left: "calc(100% - 1.75rem)",
        duration: 2.2,
        ease: "power1.inOut",
        repeat: -1,
        repeatDelay: 1,
      });

      // Payment token travelling back from buyer to seller, offset timing
      gsap.fromTo(
        ".cta-token-pay",
        { left: "calc(100% - 1.75rem)" },
        {
          left: "0%",
          duration: 2.2,
          ease: "power1.inOut",
          repeat: -1,
          repeatDelay: 1,
          delay: 1.6,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-vgbrown py-16 md:py-24 overflow-hidden"
    >
      {/* Decorative blurred glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-vgreen/10 blur-3xl pointer-events-none" />

      <div className="max-margin relative z-10 flex flex-col items-center gap-14 text-center">
        <div className="cta-animate flex flex-col gap-3 max-w-2xl items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Ready to make your next bulk trade?
          </h2>
          <p className="text-sm md:text-base text-white/80 leading-7 max-w-lg">
            Join the Vicago Trade platform, where verified buyers and sellers
            exchange goods for secured payment, safely and transparently, every
            time.
          </p>
        </div>

        {/* Buyer ⇄ Seller exchange visual */}
        <div className="cta-animate w-full max-w-3xl">
          <div className="relative flex items-center justify-between gap-4 md:gap-8">
            {/* Seller */}
            <div className="flex flex-col items-center gap-3 shrink-0">
              <div className="relative size-20 sm:size-24 md:size-28 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                <Image
                  src="/csr/csr-1.jpg"
                  alt="Seller shipping verified commodities"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white">
                Seller
              </span>
              <span className="hidden sm:block text-[11px] text-white/60 max-w-28 leading-4">
                Ships verified goods
              </span>
            </div>

            {/* Exchange path */}
            <div className="relative flex-1 h-14 sm:h-16">
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 border-t-2 border-dashed border-white/25" />

              {/* Static center icons */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-5">
                <ShieldCheck
                  size={18}
                  className="text-white/50 hidden sm:block"
                />
                <ArrowRight size={18} className="text-white/40" />
              </div>

              {/* Goods token: seller -> buyer */}
              <div className="cta-token-goods absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 size-7 sm:size-9 rounded-full bg-vgreen flex items-center justify-center shadow-lg">
                <Package size={16} className="text-white" />
              </div>

              {/* Payment token: buyer -> seller */}
              <div className="cta-token-pay absolute top-[calc(50%+1.25rem)] sm:top-[calc(50%+1.5rem)] -translate-y-1/2 -translate-x-1/2 left-0 size-7 sm:size-9 rounded-full bg-goldenvgbrown flex items-center justify-center shadow-lg">
                <Banknote size={16} className="text-white" />
              </div>
            </div>

            {/* Buyer */}
            <div className="flex flex-col items-center gap-3 shrink-0">
              <div className="relative size-20 sm:size-24 md:size-28 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                <Image
                  src="/blog/blog-1.jpg"
                  alt="Buyer paying with secured funds"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white">
                Buyer
              </span>
              <span className="hidden sm:block text-[11px] text-white/60 max-w-28 leading-4">
                Pays with confidence
              </span>
            </div>
          </div>
        </div>

        <div className="cta-animate flex flex-col sm:flex-row gap-4">
          <Button
            title="Start trading"
            variant="green"
            link="https://trade.vicago.org"
            target="_blank"
          />
          <Button
            title="Contact us"
            variant="outline"
            link="/contact"
            animationClass="!border-white !text-white hover:!bg-white hover:!text-vgbrown"
          />
        </div>
      </div>
    </section>
  );
}
