import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { ArrowUpRight } from "lucide-react";

export default function BlogCard({ post }) {
  return (
    <article className="group h-full">
      <Link to={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10">
          <Image
            src={post.cover_image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e]/70 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/85 backdrop-blur-md">
            {post.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col pt-4 sm:pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            {post.published_date}
            {post.read_time ? ` · ${post.read_time}` : ""}
          </p>
          <h3 className="mt-3 font-heading text-[18px] font-semibold leading-snug text-white transition-colors group-hover:text-primary sm:text-[21px]">
            {post.title}
          </h3>
          <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
            Ler artigo <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}