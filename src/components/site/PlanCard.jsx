import React from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export default function PlanCard({ plan, detailed = false }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl border p-6 transition-all duration-500 sm:p-9 ${
        plan.highlight
          ? "border-primary/50 bg-primary/[0.06] shadow-[0_0_60px_-20px_rgba(0,163,255,0.5)]"
          : "border-white/10 bg-white/[0.02] hover:border-primary/30"
      }`}
    >
      {plan.highlight && (
        <span className="absolute -top-3 left-9 rounded-full bg-primary px-4 py-1 font-mono text-[9px] uppercase tracking-[0.24em] text-[#0a0c0e]">
          Mais procurado
        </span>
      )}
      <p className="tech-label">{plan.focus}</p>
      <h3 className="mt-3 font-heading text-[24px] font-semibold text-white sm:mt-4 sm:text-[30px]">{plan.name}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{plan.tagline}</p>

      <p className="mt-5 rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-[14px] text-white/70 sm:mt-6 sm:px-5 sm:py-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Indicado para </span>
        <br />
        {plan.ideal}
      </p>

      <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6 sm:mt-8 sm:space-y-3.5 sm:pt-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-[14.5px] text-white/75">
            <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={whatsappUrl(`Olá! Quero uma proposta no plano ${plan.name} para o meu projeto.`)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] transition sm:mt-9 sm:py-4 ${
          plan.highlight
            ? "bg-primary text-[#0a0c0e] hover:shadow-[0_0_28px_6px_rgba(0,163,255,0.35)]"
            : "border border-white/15 text-white hover:border-primary hover:text-primary"
        }`}
      >
        Pedir proposta <ArrowUpRight className="h-3.5 w-3.5" />
      </a>

      {detailed && (
        <p className="mt-4 text-center text-[12px] text-muted-foreground">
          Sem valores fixos: a proposta é montada conforme o seu escopo.
        </p>
      )}
    </div>
  );
}