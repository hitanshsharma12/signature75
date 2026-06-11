"use client";

import { motion } from "framer-motion";
import { BedDouble, Fuel, UtensilsCrossed, Wine } from "lucide-react";
import { site } from "@/data/site";
import SectionTitle from "@/components/SectionTitle";

const icons = {
  Restaurant: UtensilsCrossed,
  Bar: Wine,
  Homestay: BedDouble,
  "Fuel Station": Fuel,
};

export default function QuickServices() {
  return (
    <section className="border-y border-white/10 bg-[#090909] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Quick Services"
          title="Everything under one refined roof"
          description="A luxury hospitality ecosystem where every stop feels intentional, elegant and easy."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {site.services.map((item, index) => {
            const Icon = icons[item.title as keyof typeof icons];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group rounded-[1.8rem] border border-white/10 bg-white/5 p-6 shadow-luxe backdrop-blur-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{item.description}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
                <p className="mt-4 text-xs uppercase tracking-[0.28em] text-white/40 group-hover:text-[#d4af37]">
                  Premium Experience
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
