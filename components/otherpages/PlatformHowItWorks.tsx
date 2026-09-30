"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: "1",
    color: "bg-vgreen",
    title: "List or request",
    text: "Sellers list available volumes and grades. Buyers post requests or browse verified listings on the marketplace.",
  },
  {
    number: "2",
    color: "bg-vgbrown",
    title: "Agree and fund",
    text: "Confirm price, quantity and delivery terms. Payment is arranged by Letter of Credit or Cash Against Documents and held until conditions are met.",
  },
  {
    number: "3",
    color: "bg-vgreen",
    title: "Deliver and get paid",
    text: "Once delivery and quality checks are confirmed, Vicago arranges shipment, and funds are released to the seller.",
  },
];

export default function PlatformHowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".how-it-works-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".how-it-works-heading",
          start: "top 80%",
        },
      });

      gsap.from(".how-it-works-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 10%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-20 md:py-28"
    >
      <div className="max-margin flex flex-col items-center gap-14">
        <div className="how-it-works-heading text-center max-w-2xl flex flex-col gap-4 items-center">
          <h2 className="text-4xl md:text-5xl font-normal text-vgbrown">
            How the platform works
          </h2>
          <p className="text-base text-gray-500">
            One place to find a counterparty, agree terms and get paid, without
            chasing paperwork across borders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="how-it-works-card bg-lightGreen rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover-lift border border-black/5"
            >
              <span
                className={`${step.color} size-9 rounded-full flex items-center justify-center text-white font-semibold text-sm`}
              >
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-vgbrown">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-6">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
