import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { site } from "@/lib/siteData";
import { whatsappUrl } from "@/lib/whatsapp";

const HERO_IMAGE =
  "https://media.base44.com/images/public/6acac4c5da7b1aec3ab7331a/c275b27e4_generated_image.png";

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden grain sm:min-h-[92vh]">
      <Image
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0c0e] via-[#0a0c0e]/85 to-[#0a0c0e]/60" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_85%_20%,rgba(0,163,255,0.22),transparent_60%)]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent animate-scan-line"
        aria-hidden="true"
      />

      <div className="container-power relative z-10 grid items-center gap-9 py-16 sm:gap-16 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p {...rise(0.05)} className="tech-label flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {site.eyebrow}
          </motion.p>

          <motion.h1
            {...rise(0.15)}
            className="display mt-5 max-w-[18ch] text-[clamp(2.2rem,9.6vw,2.75rem)] font-semibold text-white sm:mt-8 sm:max-w-[16ch] sm:text-[clamp(2.9rem,7.6vw,6rem)]"
          >
            Tecnologia que{" "}
            <span className="text-gradient">move o seu negócio.</span>
          </motion.h1>

          <motion.p {...rise(0.25)} className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 sm:mt-8 sm:text-[18px]">
            Criamos sites, lojas virtuais e sistemas sob medida para simplificar a sua operação e
            fortalecer a presença digital da sua empresa.
          </motion.p>

          <motion.div {...rise(0.35)} className="mt-7 flex flex-wrap items-center gap-3 sm:mt-11 sm:gap-4">
            <a
              href={whatsappUrl("Olá! Vim pelo site da Olivium e quero pedir um orçamento para meu projeto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#0a0c0e] transition-all duration-300 hover:shadow-[0_0_36px_10px_rgba(0,163,255,0.35)] sm:flex-none sm:px-8 sm:py-4"
            >
              Pedir orçamento
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition hover:border-primary hover:text-primary sm:px-8 sm:py-4"
            >
              Ver soluções <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.p {...rise(0.45)} className="mt-7 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground sm:mt-12">
            {site.city} · Atendimento nacional
          </motion.p>
        </div>

        <motion.div {...rise(0.5)} className="lg:col-span-5">
          <div className="relative ml-auto max-w-md">
            <div className="glass animate-floaty rounded-[24px] p-6 sm:rounded-[28px] sm:p-8">
              <p className="tech-label">Feito sob medida</p>
              <p className="mt-3 font-heading text-[19px] leading-snug text-white sm:mt-4 sm:text-[22px]">
                Do planejamento ao suporte, cada projeto nasce do que a sua empresa realmente precisa.
              </p>
              <div className="mt-5 space-y-0 border-t border-white/10 pt-5 sm:mt-7 sm:pt-6">
                {["Presença digital", "Gestão inteligente", "Processos conectados"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-white/5 py-2.5 last:border-0 sm:py-3"
                  >
                    <span className="text-[15px] text-white/80">{item}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_3px_rgba(0,163,255,0.5)]" />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-primary/20 blur-2xl animate-pulse-glow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
