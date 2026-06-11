"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import SectionTitle from "@/components/SectionTitle";
import WhatsappButton from "@/components/WhatsappButton";

export default function Homestay() {
  return (
    <section id="homestay" className="bg-[#0b0b0b] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Homestay"
          title="A premium stay experience with warm mountain comfort"
          description="Rooms are positioned to feel calm, elegant and practical for couples, families and travellers."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {site.rooms.map((room, idx) => (
            <motion.article
              key={room.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 shadow-luxe backdrop-blur-2xl"
            >
              <Image src={room.image} alt={room.name} width={1200} height={900} className="h-60 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{room.name}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {room.features.map((f) => (
                    <span key={f} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <WhatsappButton
                    text="View Details"
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi, I want to know more about ${room.name} at Signature 75.`)}`}
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
