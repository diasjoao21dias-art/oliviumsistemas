import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { site } from "@/lib/siteData";
import { whatsappUrl, mailtoUrl } from "@/lib/whatsapp";

export default function CtaBand({
  eyebrow = "O próximo passo começa com uma conversa",
  title = "Vamos tirar sua ideia do papel?",
  description = "Conte o que a sua empresa precisa. A gente ajuda a encontrar o caminho.",
  message = "Olá! Vim pelo site da Olivium e quero solicitar um orçamento. Minha ideia é:",
}) {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#080a0c] grain">
      <div className="absolute inset-0 bg-[radial-gradient(70%_100%_at_50%_0%,rgba(0,163,255,0.16),transparent_65%)]" />
      <div className="container-power relative z-10 py-16 text-center sm:py-24 md:py-32">
        <Reveal>
          <p className="tech-label">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display mx-auto mt-4 max-w-3xl text-[clamp(1.8rem,8.6vw,2.1rem)] font-semibold text-white sm:mt-6 sm:text-[clamp(2.1rem,5vw,3.8rem)]">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-[17px]">
            {description}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
            <a
              href={whatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#0a0c0e] transition-all duration-300 hover:shadow-[0_0_34px_8px_rgba(0,163,255,0.35)] sm:flex-none sm:px-8 sm:py-4"
            >
              Falar sobre meu projeto
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={mailtoUrl("Orçamento pelo site da Olivium", message)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition hover:border-primary hover:text-primary sm:px-8 sm:py-4"
            >
              <Mail className="h-4 w-4" /> Preferir e-mail
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground sm:mt-8">
            {site.whatsappDisplay} · {site.hours}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
