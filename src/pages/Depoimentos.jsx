import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { base44 } from "@/api/base44Client";
import useSeo from "@/lib/useSeo";
import PageHero from "@/components/site/PageHero";
import TestimonialCard from "@/components/site/TestimonialCard";
import Reveal from "@/components/site/Reveal";
import CtaBand from "@/components/site/CtaBand";
import { segments } from "@/lib/siteData";

export default function Depoimentos() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useSeo({
    title: "Depoimentos de clientes",
    description:
      "Veja o que empresas e profissionais dizem sobre os projetos desenvolvidos pela Olivium Tecnologia: sites, lojas virtuais e sistemas sob medida.",
    path: "/depoimentos",
  });

  useEffect(() => {
    let active = true;
    base44.entities.Testimonial.filter({}, { sort: "order", limit: 60 })
      .then((page) => active && setItems(page.items || []))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  const featured = items.find((item) => item.featured) || items[0];
  const rest = items.filter((item) => item.id !== featured?.id);

  return (
    <>
      <PageHero
        eyebrow="Depoimentos"
        breadcrumb="Depoimentos"
        image="https://media.base44.com/images/public/6acac4c5da7b1aec3ab7331a/0c9046bfe_generated_image.png"
        title="Resultados contados por quem contratou."
        description="Projetos diferentes, negócios diferentes — e um mesmo cuidado com cada detalhe."
      />

      {loading ? (
        <section className="container-power py-16 sm:py-24">
          <div className="h-72 animate-pulse rounded-3xl border border-white/5 bg-white/[0.02]" />
        </section>
      ) : items.length === 0 ? (
        <section className="container-power py-16 sm:py-24 text-center">
          <p className="font-heading text-[22px] text-white">
            Os depoimentos estão sendo publicados.
          </p>
          <p className="mt-4 text-muted-foreground">
            Enquanto isso, fale com a gente no WhatsApp para conhecer casos parecidos com o seu.
          </p>
        </section>
      ) : (
        <>
          {featured && (
            <section className="border-b border-white/5 py-14 sm:py-20 md:py-24">
              <div className="container-power">
                <Reveal>
                  <figure className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10 md:p-14">
                    <div className="absolute inset-0 bg-[radial-gradient(60%_100%_at_10%_0%,rgba(0,163,255,0.14),transparent_60%)]" />
                    <div className="relative">
                      <div className="flex gap-1">
                        {Array.from({ length: featured.rating || 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <blockquote className="mt-6 max-w-4xl font-heading text-[clamp(1.25rem,5.4vw,1.5rem)] font-medium leading-snug text-white sm:mt-8 sm:text-[clamp(1.4rem,3vw,2.2rem)]">
                        “{featured.content}”
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-3 sm:mt-9 sm:gap-4">
                        <span className="grid h-14 w-14 place-items-center rounded-full border border-primary/40 bg-primary/10 font-heading text-base font-semibold text-primary">
                          {featured.name
                            .split(" ")
                            .slice(0, 2)
                            .map((p) => p[0])
                            .join("")}
                        </span>
                        <span>
                          <span className="block font-heading text-[17px] text-white">
                            {featured.name}
                          </span>
                          <span className="block text-[14px] text-muted-foreground">
                            {[featured.role, featured.company, featured.city]
                              .filter(Boolean)
                              .join(" · ")}
                          </span>
                        </span>
                      </figcaption>
                    </div>
                  </figure>
                </Reveal>
              </div>
            </section>
          )}

          <section className="py-14 sm:py-20 md:py-24">
            <div className="container-power">
              <div className="grid gap-4 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
                {rest.map((item, i) => (
                  <Reveal key={item.id} delay={(i % 3) * 0.07} className="h-full">
                    <TestimonialCard testimonial={item} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <section className="chapter-light py-14 sm:py-20">
        <div className="container-power flex flex-wrap items-center justify-between gap-6 sm:gap-8">
          <div>
            <p className="tech-label">Segmentos atendidos</p>
            <p className="mt-3 max-w-xl font-heading text-[19px] leading-snug text-[#0a0c0e] sm:mt-4 sm:text-[22px]">
              Do comércio local à indústria, cada segmento tem uma necessidade diferente.
            </p>
          </div>
          <ul className="flex max-w-md flex-wrap gap-2">
            {segments.map((segment) => (
              <li
                key={segment}
                className="rounded-full border border-slate-300 px-4 py-2 text-[13.5px] text-slate-700"
              >
                {segment}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Quer ser o próximo depoimento?"
        description="Começamos com uma conversa sem compromisso sobre o seu cenário."
        message="Olá! Vi os depoimentos da Olivium e quero conversar sobre o meu projeto."
      />
    </>
  );
}