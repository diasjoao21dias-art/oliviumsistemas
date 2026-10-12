import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { base44 } from "@/api/base44Client";
import useSeo from "@/lib/useSeo";
import { Image } from "@/components/ui/image";
import BlogCard from "@/components/site/BlogCard";
import Reveal from "@/components/site/Reveal";
import CtaBand from "@/components/site/CtaBand";
import { whatsappUrl } from "@/lib/whatsapp";

const markdownComponents = {
  h2: (props) => (
    <h2 className="display mt-9 text-[clamp(1.3rem,5.6vw,1.5rem)] font-semibold text-white sm:mt-14 sm:text-[clamp(1.5rem,3vw,2.1rem)]" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-7 font-heading text-[18px] font-semibold text-white sm:mt-10 sm:text-[20px]" {...props} />
  ),
  p: (props) => <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-[17px]" {...props} />,
  ul: (props) => <ul className="mt-6 space-y-3 pl-1" {...props} />,
  li: (props) => (
    <li className="flex gap-2.5 text-[15.5px] leading-relaxed text-muted-foreground sm:gap-3 sm:text-[16.5px]" {...props} />
  ),
  strong: (props) => <strong className="font-semibold text-white" {...props} />,
  a: (props) => (
    <a className="text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-primary/60 pl-5 font-heading text-[17px] italic leading-relaxed text-white/85 sm:mt-8 sm:pl-6 sm:text-[19px]"
      {...props}
    />
  ),
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useSeo({
    title: post?.title || "Artigo do blog",
    description: post?.excerpt || "Conteúdo da Olivium Tecnologia.",
    path: `/blog/${slug}`,
    type: "article",
  });

  useEffect(() => {
    let active = true;
    setLoading(true);
    base44.entities.BlogPost.filter({ slug, published: true }, { limit: 1 })
      .then((page) => {
        if (!active) return;
        const found = page.items?.[0] || null;
        setPost(found);
        if (found?.category) {
          return base44.entities.BlogPost.filter(
            { published: true, category: found.category },
            { sort: "-published_date", limit: 4 }
          ).then((relatedPage) => {
            if (active) {
              setRelated((relatedPage.items || []).filter((item) => item.id !== found.id).slice(0, 3));
            }
          });
        }
        return null;
      })
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="container-power py-20 sm:py-32">
        <div className="h-8 w-40 animate-pulse rounded-full bg-white/5" />
        <div className="mt-8 h-16 w-full max-w-3xl animate-pulse rounded-2xl bg-white/5" />
        <div className="mt-9 h-64 animate-pulse rounded-3xl bg-white/[0.03] sm:mt-12 sm:h-80" />
      </div>
    );
  }

  if (!post) {
    return (
      <section className="container-power py-20 sm:py-32 text-center">
        <h1 className="display text-[clamp(2rem,5vw,3rem)] font-semibold text-white">
          Artigo não encontrado
        </h1>
        <p className="mt-5 text-muted-foreground">
          O conteúdo que você procura pode ter sido movido ou despublicado.
        </p>
        <Link
          to="/blog"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0a0c0e]"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Voltar para o blog
        </Link>
      </section>
    );
  }

  return (
    <>
      <article>
        <header className="relative overflow-hidden border-b border-white/5 grain">
          <Image
            src={post.cover_image}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c0e]/80 via-[#0a0c0e]/90 to-[#0a0c0e]" />
          <div className="container-power relative z-10 py-16 sm:py-24 md:py-28">
            <Reveal>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground transition hover:text-primary"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Blog
              </Link>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="tech-label mt-6 sm:mt-8">{post.category}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="display mt-4 max-w-4xl text-[clamp(1.8rem,7.4vw,2.05rem)] font-semibold text-white sm:mt-6 sm:text-[clamp(2.2rem,5vw,4rem)]">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:mt-7">
                {[post.author, post.published_date, post.read_time].filter(Boolean).join(" · ")}
              </p>
            </Reveal>
          </div>
        </header>

        <div className="container-power grid gap-10 py-14 sm:gap-16 sm:py-20 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {post.excerpt && (
              <p className="border-l-2 border-primary/60 pl-5 font-heading text-[17px] leading-relaxed text-white/85 sm:pl-6 sm:text-[20px]">
                {post.excerpt}
              </p>
            )}
            <div className="mt-7 sm:mt-10">
              <ReactMarkdown components={markdownComponents}>{post.content || ""}</ReactMarkdown>
            </div>

            {post.tags?.length > 0 && (
              <div className="mt-9 flex flex-wrap gap-2 border-t border-white/5 pt-6 sm:mt-12 sm:pt-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-4 py-2 text-[13px] text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="glass sticky top-28 rounded-3xl p-6 sm:p-8">
              <p className="tech-label">Precisa disso na prática?</p>
              <p className="mt-4 font-heading text-[19px] leading-snug text-white sm:mt-5 sm:text-[21px]">
                Vamos aplicar esse assunto no seu negócio.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Conte o seu cenário e receba uma orientação direta, sem enrolação.
              </p>
              <a
                href={whatsappUrl(`Olá! Li o artigo "${post.title}" no site da Olivium e quero conversar sobre o meu caso.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0a0c0e] transition hover:shadow-[0_0_30px_8px_rgba(0,163,255,0.3)] sm:mt-7 sm:py-4"
              >
                Falar no WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-white/5 py-14 sm:py-20">
          <div className="container-power">
            <h2 className="display text-[clamp(1.4rem,6vw,1.6rem)] font-semibold text-white sm:text-[clamp(1.6rem,3vw,2.2rem)]">
              Continue lendo
            </h2>
            <div className="mt-7 grid gap-6 sm:mt-10 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
              {related.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.07} className="h-full">
                  <BlogCard post={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title="Tem um projeto esperando para sair do papel?"
        description="Uma conversa no WhatsApp resolve mais que dez formulários."
        message={`Olá! Li o artigo "${post.title}" no site da Olivium e quero conversar sobre um projeto.`}
      />
    </>
  );
}