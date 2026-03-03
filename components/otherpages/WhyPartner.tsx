"use client";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const WhyPartner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1️⃣ Heading — strong entrance
      gsap.from(".product-heading", {
        y: 80,
        opacity: 0,
        scale: 0.96,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".product-heading",
          start: "top 75%",
          end: "bottom 30%",
        },
      });

      // 2️⃣ Paragraph — softer, from right
      gsap.from(".product-text", {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".product-text",
          start: "top 75%",
          end: "bottom 15%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-dvh w-full overflow-hidden bg-lightGreen text-gray-900"
    >
      <div className="relative z-10 h-full flex flex-col justify-center gap-20 items-center max-margin py-20">
        <div className="w-full text-black/80 gap-6 flex flex-col justify-center items-center max-w-3xl">
          <h2 className=" text-center product-heading max-w-4xl text-5xl md:text-6xl mb-0 font-normal text-vgreen">
            Why partner with us
          </h2>
          <p className="product-text text-base text-center text-gray-500">
            We hold ourselves to the highest global standards, in how we source,
            trade and show-up, because it’s the only way the chain holds.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4  w-full">
          <Image
            src="/images/soyabeans.jpg"
            alt="Crops"
            width={400}
            height={400}
            className="rounded-xl object-cover col-span-1 w-full h-full hidden md:inline-flex"
          />
          <div className="col-span-3 md:col-span-2 grid grid-rows-4 gap-3">
            <div className="rounded-xl bg-vgreen  col-span-1 p-4 flex flex-col gap-3 hover-lift">
              <h2 className="sustain-stat-desc text-2xl font-normal text-creamy max-w-lg">
                Diversified Sourcing Networks
              </h2>
              <p className="sustain-caption  text-sm text-gray-50 max-w-lg">
                We cultivate deep, long-term relationships with farmers and
                aggregators, expanding supply reliability across seasons and
                geographies.
              </p>
            </div>
            <div className="rounded-xl bg-vgbrown col-span-1 p-4 flex flex-col gap-3 hover-lift ">
              <h2 className="sustain-stat-desc text-2xl font-normal text-snow max-w-lg">
                Global Market Integration
              </h2>
              <p className="sustain-caption  text-sm text-gray-50 max-w-lg">
                With offices in Africa and North America, we enable cross-border
                access to commodities, linking origin producers to international
                customers.
              </p>
            </div>
            <div className="rounded-xl bg-vgreen col-span-1 p-4 flex flex-col gap-3 hover-lift">
              <h2 className="sustain-stat-desc text-2xl font-normal text-creamy max-w-lg">
                Data-Driven Execution
              </h2>
              <p className="sustain-caption  text-sm text-gray-50 max-w-lg">
                By combining market insights with disciplined risk management,
                we ensure timely delivery, premium quality and operational
                resilience.
              </p>
            </div>
            <div className="rounded-xl bg-vgbrown  col-span-1 p-4 flex flex-col gap-3 hover-lift">
              <h2 className="sustain-stat-desc text-2xl font-normal text-snow max-w-lg">
                Farmer Partnership Model
              </h2>
              <p className="sustain-caption  text-sm text-gray-50 max-w-lg">
                Our approach goes beyond trade, including farmer support,
                pre-financing solutions, and direct engagement that enhance
                productivity and community welfare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
