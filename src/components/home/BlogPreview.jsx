import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { base44 } from "@/api/base44Client";
import SectionHeading from "@/components/site/SectionHeading";
import BlogCard from "@/components/site/BlogCard";
import Reveal from "@/components/site/Reveal";

export default function BlogPreview() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    base44.entities.BlogPost.filter({ published: true }, { sort: "-published_date", limit: 3 })
      .then((page) => active && setPosts(page.items || []))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  if (!loading && posts.length === 0) return null;

  return (
    <section className="relative py-16 sm:py-24 md:py-32">
      <div className="container-power">
        <div className="flex flex-col justify-between gap-5 sm:gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="06"
            eyebrow="Conteúdos"
            title="Ideias para decidir melhor."
            description="Artigos sobre presença digital, sistemas e o que realmente move um negócio na internet."
          />
          <Reveal delay={0.1}>
            <Link
              to="/blog"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-primary hover:text-primary sm:px-7 sm:py-4"
            >
              Ver todos os artigos <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:mt-16 md:gap-10 md:grid-cols-2 xl:grid-cols-3">
          {(loading ? Array.from({ length: 3 }) : posts).map((post, i) =>
            loading ? (
              <div key={i} className="h-80 animate-pulse rounded-3xl border border-white/5 bg-white/[0.02]" />
            ) : (
              <Reveal key={post.id} delay={i * 0.08} className="h-full">
                <BlogCard post={post} />
              </Reveal>
            )
          )}
        </div>
      </div>
    </section>
  );
}