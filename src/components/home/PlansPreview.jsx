import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { plans } from "@/lib/siteData";
import { whatsappUrl } from "@/lib/whatsapp";

export default function PlansPreview() {
  return (
    <section className="relative border-y border-white/5 bg-[#080a0c] py-16 sm:py-24 md:py-32">
      <div className="container-power">
        <SectionHeading
          index="05"
          eyebrow="Planos e escopos"
          title="Escopos claros, proposta sob medida."
          description="Cada plano descreve o que está incluído. O valor é definido na proposta, conforme o tamanho do seu projeto."
        />

        <div className="mt-10 grid gap-4 lg:mt-16 lg:gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-6 transition-all duration-500 sm:p-8 ${
                  plan.highlight
                    ? "border-primary/50 bg-primary/[0.06] shadow-[0_0_60px_-20px_rgba(0,163,255,0.5)]"
                    : "border-white/10 bg-white/[0.02] hover:border-primary/30"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-8 rounded-full bg-primary px-4 py-1 font-mono text-[9px] uppercase tracking-[0.24em] text-[#0a0c0e]">
                    Mais procurado
                  </span>
                )}
                <p className="tech-label">{plan.focus}</p>
                <h3 className="mt-3 font-heading text-[23px] font-semibold text-white sm:mt-4 sm:text-[28px]">{plan.name}</h3>
                <p className="mt-3 text-[15px] text-muted-foreground">{plan.tagline}</p>

                <ul className="mt-5 flex-1 space-y-2.5 border-t border-white/10 pt-5 sm:mt-7 sm:space-y-3 sm:pt-7">
                  {plan.features.slice(0, 5).map((feature) => (
                    <li key={feature} className="flex gap-3 text-[14px] text-white/75">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl(`Olá! Quero uma proposta no plano ${plan.name} para o meu projeto.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] transition sm:mt-8 ${
                    plan.highlight
                      ? "bg-primary text-[#0a0c0e] hover:shadow-[0_0_28px_6px_rgba(0,163,255,0.35)]"
                      : "border border-white/15 text-white hover:border-primary hover:text-primary"
                  }`}
                >
                  Pedir proposta <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-7 text-center text-[15px] text-muted-foreground sm:mt-10">
            Precisa de algo diferente?{" "}
            <Link to="/planos" className="text-primary underline-offset-4 hover:underline">
              Veja o comparativo completo
            </Link>{" "}
            ou converse com a gente.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
