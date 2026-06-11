"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import {
  CarFront,
  Coffee,
  BedDouble,
  Car,
  MapPin,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const icons = [CarFront, Coffee, BedDouble, Car, MapPin];

export default function TravelerStop() {
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Traveler's Stop"
          title="Everything you need during your journey"
          description="This section gives the website a true ecosystem identity — not just dining, but a complete roadside hospitality stop."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {site.travelerStop.map((item, idx) => {
            const Icon = icons[idx] || MapPin;

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -5 }}
                className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 text-center shadow-luxe backdrop-blur-2xl"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}