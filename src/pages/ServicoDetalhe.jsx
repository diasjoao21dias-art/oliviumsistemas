import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Check, ArrowLeft } from "lucide-react";
import useSeo from "@/lib/useSeo";
import PageHero from "@/components/site/PageHero";
import ProcessSection from "@/components/home/ProcessSection";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/site/Reveal";
import { getService, services } from "@/lib/siteData";
import { whatsappUrl } from "@/lib/whatsapp";

export default function ServicoDetalhe() {
  const { slug } = useParams();
  const service = getService(slug);

  useSeo({
    title: service ? `${service.title} sob medida` : "Serviço não encontrado",
    description: service
      ? `${service.short} ${service.description}`.slice(0, 300)
      : "Conheça os serviços da Olivium Tecnologia.",
    path: `/servicos/${slug}`,
  });

  if (!service) {
    return (
      <section className="container-power py-20 text-center sm:py-32">
        <h1 className="display text-[clamp(1.75rem,7.4vw,2rem)] font-semibold text-white sm:text-[clamp(2rem,5vw,3rem)]">
          Serviço não encontrado
        </h1>
        <p className="mt-5 text-muted-foreground">
          O endereço acessado não corresponde a nenhuma solução da Olivium.
        </p>
        <Link
          to="/servicos"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0a0c0e] sm:mt-9 sm:px-7 sm:py-4"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Ver todos os serviços
        </Link>
      </section>
    );
  }

  const others = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.title}
        breadcrumb={service.title}
        title={service.title}
        description={service.description}
      />

      <section className="py-14 sm:py-20 md:py-28">
        <div className="container-power grid gap-10 sm:gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="tech-label">{service.tagline}</p>
              <h2 className="display mt-4 text-[clamp(1.6rem,6.6vw,1.9rem)] font-semibold text-white sm:mt-6 sm:text-[clamp(1.9rem,3.6vw,2.8rem)]">
                O que está incluído
              </h2>
            </Reveal>
            <ul className="mt-7 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-2">
              {service.features.map((feature, i) => (
                <Reveal key={feature} delay={(i % 2) * 0.06}>
                  <li className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4 text-[15px] text-white/80 sm:px-5 sm:py-5">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="glass sticky top-28 rounded-3xl p-6 sm:p-8">
                <p className="tech-label">Próximo passo</p>
                <p className="mt-4 font-heading text-[19px] leading-snug text-white sm:mt-5 sm:text-[22px]">
                  Quer um orçamento para {service.title.toLowerCase()}?
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {service.short} A conversa abre no WhatsApp com o assunto já preenchido — você
                  completa com os detalhes do seu projeto.
                </p>
                <a
                  href={whatsappUrl(service.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0a0c0e] transition hover:shadow-[0_0_30px_8px_rgba(0,163,255,0.3)] sm:mt-7 sm:py-4"
                >
                  Falar sobre isso no WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <Link
                  to="/contato"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-primary hover:text-primary sm:mt-4 sm:py-4"
                >
                  Preencher formulário
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="py-14 sm:py-20 md:py-28">
        <div className="container-power">
          <Reveal>
            <p className="tech-label">Também fazemos</p>
            <h2 className="display mt-4 text-[clamp(1.55rem,6.2vw,1.8rem)] font-semibold text-white sm:mt-6 sm:text-[clamp(1.8rem,3.2vw,2.4rem)]">
              Outras soluções da Olivium
            </h2>
          </Reveal>
          <div className="mt-7 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3">
            {others.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.08}>
                <Link
                  to={`/servicos/${item.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-primary/40 sm:p-7"
                >
                  <div>
                    <span className="font-mono text-[11px] text-muted-foreground">{item.index}</span>
                    <h3 className="mt-3 font-heading text-[18px] font-semibold text-white sm:mt-4 sm:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] text-muted-foreground">{item.short}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                    Ver detalhes <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Vamos começar por ${service.title.toLowerCase()}?`}
        message={service.whatsapp}
      />
    </>
  );
}