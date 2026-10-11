import React from "react";
import Reveal from "@/components/site/Reveal";
import { stats } from "@/lib/siteData";

export default function StatsStrip() {
  return (
    <section className="border-y border-white/5 bg-[#080a0c]">
      <div className="container-power grid gap-px sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="border-white/5 px-2 py-7 sm:border-l sm:first:border-l-0 sm:px-8 sm:py-10">
              <p className="font-heading text-[clamp(1.6rem,7vw,1.9rem)] font-semibold text-white sm:text-[clamp(2rem,4vw,2.8rem)]">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
