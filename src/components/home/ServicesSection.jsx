import React from "react";
import SectionHeading from "@/components/site/SectionHeading";
import ServiceCard from "@/components/site/ServiceCard";
import Reveal from "@/components/site/Reveal";
import { services, site } from "@/lib/siteData";
import { whatsappUrl } from "@/lib/whatsapp";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="solucoes" className="relative scroll-mt-20 py-16 sm:scroll-mt-24 sm:py-24 md:py-32">
      <div className="container-power">
        <SectionHeading
          index="01"
          eyebrow="O que fazemos"
          title="Cada desafio pede a solução certa."
          description="Para conquistar espaço no digital ou simplificar a operação, a gente transforma a sua necessidade em um projeto."
        />

        <div className="mt-10 grid gap-4 md:mt-16 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-9 flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-6 sm:mt-12 sm:gap-6 sm:px-8 sm:py-8 sm:flex-row sm:items-center">
            <p className="max-w-xl text-[15px] text-white/80 sm:text-[17px]">
              Não sabe por onde começar? Conte o que precisa melhorar no seu negócio —{" "}
              <span className="text-primary">a gente pensa junto.</span>
            </p>
            <a
              href={whatsappUrl(`Olá! Vim pelo site da ${site.name} e quero ajuda para escolher a melhor solução.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-primary/50 px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-[#0a0c0e]"
            >
              Conversar agora
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}