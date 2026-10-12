import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/lib/siteData";

export default function FaqList({ items = faq, light = false }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem
          key={item.q}
          value={`item-${i}`}
          className={light ? "border-slate-200" : "border-white/10"}
        >
          <AccordionTrigger
            className={`py-4 text-left font-heading text-[16.5px] hover:no-underline sm:py-6 sm:text-[18px] ${
              light ? "text-[#0a0c0e] hover:text-[#0069a8]" : "text-white hover:text-primary"
            }`}
          >
            {item.q}
          </AccordionTrigger>
          <AccordionContent
            className={`pb-5 text-[15px] leading-relaxed sm:pb-6 ${
              light ? "text-slate-600" : "text-muted-foreground"
            }`}
          >
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}