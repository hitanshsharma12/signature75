"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import SectionTitle from "@/components/SectionTitle";

export default function BarExperience() {
  return (
    <section id="bar" className="relative overflow-hidden px-4 py-20 md:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_55%)]" />
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Bar Experience"
          title="Dark, intimate and designed for memorable evenings"
          description="A refined lounge mood with premium drinks, warm lighting and a premium social atmosphere."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-luxe backdrop-blur-2xl"
          >
            <div className="grid gap-4">
              {site.barFeatures.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/10 bg-black/30 px-4 py-4 text-white/85">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="grid gap-5 md:grid-cols-2"
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1514361892635-6df7f5fca18a?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury bar vibe"
                width={1200}
                height={900}
                className="h-[22rem] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
                alt="Cocktail ambience"
                width={1200}
                height={900}
                className="h-[22rem] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
