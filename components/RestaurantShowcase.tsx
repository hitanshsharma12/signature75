"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import SectionTitle from "@/components/SectionTitle";
import WhatsappButton from "@/components/WhatsappButton";

export default function RestaurantShowcase() {
  return (
    <section id="restaurant" className="bg-[#0a0a0a] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Restaurant Showcase"
          title="Premium food moments with a luxury atmosphere"
          description="From family meals to quick snacks, the presentation stays polished and the feel remains upscale."
        />

        <div className="mt-6 flex flex-wrap gap-3">
          {site.categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#e5cc83]"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {site.foodCards.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 shadow-luxe backdrop-blur-2xl"
            >
              <div className="relative">
                <Image src={item.image} alt={item.title} width={1200} height={900} className="h-56 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{item.description}</p>
                <div className="mt-5">
                  <WhatsappButton
                    text="Order / Enquire on WhatsApp"
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi, I want to enquire about ${item.title} at Signature 75.`)}`}
                    className="w-full"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
