import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export default function PageHero({ eyebrow, title, description, image, breadcrumb }) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 grain">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c0e]/70 via-[#0a0c0e]/85 to-[#0a0c0e]" />
        </>
      )}
      {!image && (
        <div className="absolute inset-0 bg-[radial-gradient(80%_120%_at_15%_-10%,rgba(0,163,255,0.16),transparent_60%)]" />
      )}

      <div className="container-power relative z-10 pt-24 pb-14 md:py-32">
        <Reveal>
          <nav aria-label="Você está aqui" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
            <Link to="/" className="transition hover:text-primary">
              Início
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/70">{breadcrumb || eyebrow}</span>
          </nav>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className={cn("display mt-5 max-w-4xl text-[clamp(1.95rem,8.8vw,2.4rem)] font-semibold text-white sm:mt-7 sm:text-[clamp(2.4rem,6vw,4.6rem)]")}>
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:mt-7 sm:text-[18px]">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}