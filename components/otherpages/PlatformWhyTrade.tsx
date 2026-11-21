import Image from "next/image";
import type { CSSProperties } from "react";

const FEATURES = [
  {
    color: "bg-vgreen",
    title: "Secure payments",
    text: "Every order follows a transparent payment process with secure payment options, including Letter of Credit and Cash Against Documents, based on agreed transaction terms.",
  },
  {
    color: "bg-vgbrown",
    title: "Trusted suppliers",
    text: "We work with verified suppliers whose business registration, relevant licences and supporting documents are reviewed before sourcing their products.",
  },
  {
    color: "bg-vgreen",
    title: "Assured product quality",
    text: "We prioritise product quality by verifying grades, quantities and origin to ensure buyers receive products that meet agreed specifications.",
  },
  {
    color: "bg-vgbrown",
    title: "Reliable supply and delivery",
    text: "We coordinate the supply and delivery of agricultural commodities to buyers, providing access to products sourced across Nigeria and international markets, with pricing in USD, naira or Canadian dollars.",
  },
];

// No hooks or GSAP needed now, so this can be a server component
// (the "use client" directive is gone).
export default function PlatformWhyTrade() {
  return (
    <section className="relative w-full overflow-x-clip bg-white py-20 md:py-28">
      <div className="max-margin flex flex-col items-center gap-14">
        <div className="reveal text-center max-w-2xl flex flex-col gap-4 items-center">
          <h2 className="text-4xl md:text-5xl font-normal text-vgreen">
            Why trade with Vicago
          </h2>
          <p className="text-base text-gray-500">
            We hold ourselves to the highest global standards. Now the platform
            holds every deal to them too.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full items-stretch">
          <div className="reveal-left relative w-full min-h-72 lg:min-h-full rounded-2xl overflow-hidden">
            <Image
              src="/images/about-soya.webp"
              alt="Soybeans ready for trade on the Vicago platform"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-3 lg:grid lg:grid-rows-4">
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                style={{ "--i": i } as CSSProperties}
                className={`reveal-right ${feature.color} rounded-xl p-5 flex flex-col justify-center gap-1.5 hover-lift`}
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
