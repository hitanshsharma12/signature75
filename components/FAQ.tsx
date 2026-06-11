"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { site } from "@/data/site";
import SectionTitle from "@/components/SectionTitle";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#0a0a0a] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="FAQ"
          title="Quick answers for guests and travellers"
          centered
        />

        <div className="mt-10 space-y-4">
          {site.faqs.map((item, idx) => {
            const active = open === idx;
            return (
              <div key={item.q} className="rounded-[1.5rem] border border-white/10 bg-white/5 shadow-luxe backdrop-blur-2xl">
                <button
                  onClick={() => setOpen(active ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-base font-medium text-white">{item.q}</span>
                  <ChevronDown className={`h-5 w-5 text-[#d4af37] transition ${active ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {active ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm leading-7 text-white/60">{item.a}</div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
