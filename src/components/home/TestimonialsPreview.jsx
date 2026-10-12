import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { base44 } from "@/api/base44Client";
import SectionHeading from "@/components/site/SectionHeading";
import TestimonialCard from "@/components/site/TestimonialCard";
import Reveal from "@/components/site/Reveal";

export default function TestimonialsPreview() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    base44.entities.Testimonial.filter({}, { sort: "order", limit: 3 })
      .then((page) => active && setItems(page.items || []))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  if (!loading && items.length === 0) return null;

  return (
    <section className="chapter-light relative py-16 sm:py-24 md:py-32">
      <div className="container-power">
        <div className="flex flex-col justify-between gap-5 sm:gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="04"
            eyebrow="Depoimentos"
            title="Quem já trabalha com a gente."
            description="A melhor apresentação da Olivium não é nossa — é a de quem contratou."
            light
          />
          <Reveal delay={0.1}>
            <Link
              to="/depoimentos"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0a0c0e] transition hover:border-primary hover:text-[#0069a8] sm:px-7 sm:py-4"
            >
              Todos os depoimentos <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:mt-16 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {(loading ? Array.from({ length: 3 }) : items).map((item, i) =>
            loading ? (
              <div key={i} className="h-64 animate-pulse rounded-3xl bg-slate-100" />
            ) : (
              <Reveal key={item.id} delay={i * 0.08} className="h-full">
                <TestimonialCard testimonial={item} light />
              </Reveal>
            )
          )}
        </div>
      </div>
    </section>
  );
}