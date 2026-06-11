"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { ShieldCheck, Users, MapPinned, ParkingCircle, UtensilsCrossed, Hotel } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const icons = [Users, UtensilsCrossed, Hotel, ShieldCheck, MapPinned, ParkingCircle];

export default function WhyChoose() {
  return (
    <section className="bg-[#0a0a0a] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Why Choose Signature 75"
          title="Designed for comfort, trust and a premium first impression"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {site.whyChoose.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={item}
                whileHover={{ y: -5 }}
                className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 shadow-luxe backdrop-blur-2xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  A polished hospitality layer that reinforces the premium ecosystem feel.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
