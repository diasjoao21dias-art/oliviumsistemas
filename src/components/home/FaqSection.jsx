import React from "react";
import SectionHeading from "@/components/site/SectionHeading";
import FaqList from "@/components/site/FaqList";
import Reveal from "@/components/site/Reveal";
import { site } from "@/lib/siteData";
import { whatsappUrl } from "@/lib/whatsapp";
import { ArrowUpRight } from "lucide-react";

export default function FaqSection({ light = true, index = "07" }) {
  return (
    <section className={`relative py-16 sm:py-24 md:py-32 ${light ? "chapter-light" : ""}`}>
      <div className="container-power grid gap-9 sm:gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            index={index}
            eyebrow="Antes de começar"
            title="Boas perguntas. Respostas claras."
            description="As dúvidas que mais aparecem nas nossas conversas — respondidas sem rodeios."
            light={light}
          />
          <Reveal delay={0.16}>
            <a
              href={whatsappUrl(`Olá! Tenho uma dúvida sobre os serviços da ${site.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/50 px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-white sm:mt-9 sm:px-7 sm:py-4"
            >
              Perguntar no WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <FaqList light={light} />
        </div>
      </div>
    </section>
  );
}
