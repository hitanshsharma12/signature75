"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import SectionTitle from "@/components/SectionTitle";

export default function About() {
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-luxe"
        >
          <Image
            src="/images/gallery-outdoor-seating.png"
            alt="Signature 75 outdoor seating"
            width={1400}
            height={1000}
            className="h-[32rem] w-full rounded-[1.5rem] object-cover"
          />
          <div className="absolute inset-3 rounded-[1.5rem] border border-white/10" />
        </motion.div>

        <div>
          <SectionTitle
            eyebrow="About Signature 75"
            title="Hospitality that feels premium from the first step"
            description="Located in the heart of Rohru, Signature 75 blends dining, accommodation and travel convenience with a refined, modern identity."
          />

          <div className="mt-8 space-y-5 text-sm leading-7 text-white/60 md:text-base">
            {site.aboutParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {site.highlights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 px-4 py-5 text-center text-sm font-medium text-white/80 backdrop-blur-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
