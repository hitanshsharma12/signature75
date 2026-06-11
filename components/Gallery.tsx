"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";

const gallery = [
  { src: "/images/gallery-outdoor-seating.png", alt: "Outdoor seating at Signature 75" },
  { src: "/images/gallery-dining.png", alt: "Elegant dining interior" },
  { src: "/images/gallery-collage.png", alt: "Signature 75 collage" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Gallery"
          title="A cinematic visual tour"
          description="The property, the ambience and the premium social spaces all come together in a polished visual story."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item, idx) => (
            <motion.button
              key={item.src}
              onClick={() => setActive(idx)}
              whileHover={{ scale: 1.01 }}
              className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 text-left shadow-luxe"
            >
              <Image src={item.src} alt={item.alt} width={1200} height={900} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <div className="text-lg font-semibold text-white">Gallery {idx + 1}</div>
                <p className="text-sm text-white/70">{item.alt}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white"
                aria-label="Close gallery"
              >
                <X className="h-5 w-5" />
              </button>
              <Image
                src={gallery[active].src}
                alt={gallery[active].alt}
                width={1600}
                height={1100}
                className="h-[90vh] w-full object-contain"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
