import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import useSeo from "@/lib/useSeo";
import PageHero from "@/components/site/PageHero";
import BlogCard from "@/components/site/BlogCard";
import Reveal from "@/components/site/Reveal";
import CtaBand from "@/components/site/CtaBand";

const CATEGORIES = [
  "Todos",
  "Presença digital",
  "Sistemas",
  "Vendas online",
  "SEO",
  "Infraestrutura",
];

export default function Blog() {
  const [category, setCategory] = useState("Todos");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useSeo({
    title: "Blog e conteúdos sobre tecnologia para negócios",
    description:
      "Artigos da Olivium Tecnologia sobre presença digital, sistemas personalizados, vendas online, SEO e infraestrutura em nuvem.",
    path: "/blog",
  });

  useEffect(() => {
    let active = true;
    setLoading(true);
    const query = { published: true };
    if (category !== "Todos") query.category = category;
    base44.entities.BlogPost.filter(query, { sort: "-published_date", limit: 40 })
      .then((page) => active && setPosts(page.items || []))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [category]);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        breadcrumb="Blog"
        image="https://media.base44.com/images/public/6acac4c5da7b1aec3ab7331a/a55548af8_generated_image.png"
        title="Conteúdos para decidir com clareza."
        description="O que aprendemos em projetos reais, escrito de forma direta — sem jargão e sem promessa exagerada."
      />

      <section className="py-12 sm:py-16 md:py-24">
        <div className="container-power">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                  className={`rounded-full border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] transition sm:px-5 sm:py-3 ${
                    category === item
                      ? "border-primary bg-primary/15 text-white"
                      : "border-white/10 text-muted-foreground hover:border-primary/50 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </Reveal>

          {loading ? (
            <div className="mt-10 grid gap-6 md:mt-14 md:gap-10 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-64 animate-pulse rounded-3xl border border-white/5 bg-white/[0.02] sm:h-80" />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-10 text-center sm:mt-16 sm:px-8 sm:py-16">
              <p className="font-heading text-[20px] text-white">
                Nenhum artigo publicado nesta categoria ainda.
              </p>
              <p className="mt-3 text-muted-foreground">
                Veja todas as categorias ou fale com a gente para conversar sobre o assunto.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 md:mt-14 md:gap-10 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.id} delay={(i % 3) * 0.07} className="h-full">
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand
        title="Prefere conversar em vez de ler?"
        description="Se o seu caso não está nos artigos, conte o cenário e a gente responde direto."
        message="Olá! Li os conteúdos do blog da Olivium e quero conversar sobre o meu caso."
      />
    </>
  );
}
