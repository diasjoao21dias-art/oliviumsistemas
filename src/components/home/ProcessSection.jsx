import React from "react";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import { processSteps } from "@/lib/siteData";

export default function ProcessSection({ light = true }) {
  return (
    <section className={`relative py-16 sm:py-24 md:py-32 ${light ? "chapter-light" : ""}`}>
      <div className="container-power">
        <SectionHeading
          index="02"
          eyebrow="Da ideia à entrega"
          title="Tecnologia sem complicar. Você participa de tudo."
          description="Um caminho claro, com conversa, planejamento e acompanhamento em cada etapa."
          light={light}
        />

        <div className="mt-10 grid gap-px md:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08} className="h-full">
              <div
                className={`flex h-full flex-col border-t pt-6 md:pt-8 ${
                  light ? "border-slate-300" : "border-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-primary">{step.step}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-primary">
                    {step.label}
                  </span>
                </div>
                <h3
                  className={`mt-5 font-heading text-[19px] font-semibold leading-snug sm:mt-6 sm:text-[22px] ${
                    light ? "text-[#0a0c0e]" : "text-white"
                  }`}
                >
                  {step.title}
                </h3>
                <p className={`mt-3 text-[15px] leading-relaxed sm:mt-4 ${light ? "text-slate-600" : "text-muted-foreground"}`}>
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
