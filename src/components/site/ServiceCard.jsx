import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export default function ServiceCard({ service }) {
  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 sm:p-8 hover:border-primary/40 hover:bg-white/[0.04]">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] text-muted-foreground">{service.index}</span>
          <svg viewBox="0 0 64 24" className="h-4 w-16" aria-hidden="true">
            <path
              d="M0 12 H44"
              stroke="#00a3ff"
              strokeWidth="1"
              strokeDasharray="180"
              strokeDashoffset="180"
              className="transition-[stroke-dashoffset] duration-700 group-hover:[stroke-dashoffset:0]"
            />
            <circle cx="56" cy="12" r="4" fill="none" stroke="#00a3ff" strokeWidth="1" />
          </svg>
        </div>

        <h3 className="mt-5 font-heading text-[21px] font-semibold leading-tight text-white sm:mt-6 sm:text-[26px]">
          {service.title}
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{service.description}</p>

        <ul className="mt-5 space-y-2 sm:mt-6">
          {service.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-[14px] text-white/70">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-6 sm:mt-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary/80">
          {service.tagline}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            to={`/servicos/${service.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] sm:px-5 sm:py-3 text-white transition hover:border-primary hover:text-primary"
          >
            Detalhes <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={whatsappUrl(service.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] sm:px-5 sm:py-3 text-primary opacity-0 transition-all duration-500 hover:bg-primary hover:text-[#0a0c0e] group-hover:opacity-100"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Consultar
          </a>
        </div>
      </div>
    </div>
  );
}
