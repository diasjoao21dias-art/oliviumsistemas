import { useEffect } from "react";
import { site } from "@/lib/siteData";

const setTag = (selector, attrs) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith("link") ? "link" : "meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
};

/**
 * Per-page SEO: title, meta description, canonical and social tags.
 */
export default function useSeo({ title, description, path = "/", type = "website" }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.fullName}` : `${site.fullName} | Sites e sistemas sob medida`;
    const desc = description || site.tagline;
    document.title = fullTitle;

    setTag('meta[name="description"]', { name: "description", content: desc });
    setTag('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    setTag('meta[property="og:description"]', { property: "og:description", content: desc });
    setTag('meta[property="og:type"]', { property: "og:type", content: type });
    setTag('link[rel="canonical"]', { rel: "canonical", href: `https://oliviumsistemas.com.br${path}` });

    if (title) {
      document
        .querySelectorAll('script[data-seo="jsonld"]')
        .forEach((node) => node.remove());
      const ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.dataset.seo = "jsonld";
      ld.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": type === "article" ? "BlogPosting" : "LocalBusiness",
        name: site.fullName,
        description: desc,
        telephone: site.whatsappDisplay,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Monte Carmelo",
          addressRegion: "MG",
          addressCountry: "BR",
        },
        areaServed: "Brasil",
      });
      document.head.appendChild(ld);
    }
  }, [title, description, path, type]);
}
