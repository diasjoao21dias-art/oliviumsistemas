import { site } from "@/lib/siteData";

export const whatsappUrl = (message) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message || site.defaultMessage)}`;

export const openWhatsApp = (message) => {
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
};

export const mailtoUrl = (subject, body) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject || "Contato pelo site")}&body=${encodeURIComponent(body || "")}`;
