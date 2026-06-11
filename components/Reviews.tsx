"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { site } from "@/data/site";
import SectionTitle from "@/components/SectionTitle";

export default function Reviews() {
  const items = [...site.reviews, ...site.reviews];

  return (
    <section className="overflow-hidden bg-[#0a0a0a] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Customer Reviews"
          title="Social proof that feels polished and premium"
          description="A lightweight auto-moving showcase with luxury-style cards and strong visual hierarchy."
          centered
        />

        <div className="mt-10 relative">
          <div className="flex animate-[marquee_30s_linear_infinite] gap-5 whitespace-nowrap">
            {items.map((review, idx) => (
              <div
                key={`${review.name}-${idx}`}
                className="w-[320px] shrink-0 rounded-[1.8rem] border border-white/10 bg-white/5 p-6 shadow-luxe backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">{review.name}</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">{review.role}</p>
                  </div>
                  <div className="flex gap-1 text-[#d4af37]">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-4 whitespace-normal text-sm leading-6 text-white/65">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
