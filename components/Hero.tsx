"use client";

import Image from "next/image";
import { MapPinned, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import WhatsappButton from "@/components/WhatsappButton";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-exterior.png"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,3,6,0.18),rgba(3,3,6,0.7)_40%,rgba(3,3,6,0.92))]" />
        <div className="absolute inset-0 bg-radial-luxe opacity-80" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-16 pt-28 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/25 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/70 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-[#d4af37]" />
              Premium Ecosystem in Rohru
            </div>

            <h1 className="text-5xl font-semibold uppercase tracking-[0.08em] text-white md:text-7xl lg:text-8xl">
              {site.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
              Experience premium hospitality with dining, drinks, comfortable stays and journey convenience — all under one refined roof.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsappButton
                text="Book Room"
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I want to book a room at Signature 75.")}`}
              />
              <WhatsappButton
                text="Reserve Table"
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I want to reserve a table at Signature 75.")}`}
              />
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 backdrop-blur transition hover:bg-white/10"
              >
                <MapPinned className="h-4 w-4 text-[#d4af37]" />
                View Location
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {site.stats.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-2xl shadow-luxe"
                >
                  <div className="text-2xl font-semibold text-[#d4af37]">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-[#d4af37]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 p-3 shadow-luxe backdrop-blur-2xl">
              <div className="overflow-hidden rounded-[1.6rem] border border-white/10">
                <Image
                  src="/images/hero-exterior.png"
                  alt="Signature 75 exterior"
                  width={1200}
                  height={900}
                  className="h-[30rem] w-full object-cover"
                  priority
                />
              </div>

              <div className="absolute bottom-7 left-7 right-7 rounded-[1.5rem] border border-white/15 bg-black/50 p-5 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-white/55">Featured Experience</p>
                <div className="mt-2 text-2xl font-semibold text-white">Luxury, comfort and convenience</div>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Dinner, drinks, rooms and road-trip essentials in one elegant destination.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-3 text-center text-xs uppercase tracking-[0.24em] text-white/45 md:grid-cols-3">
          <div>Signature Luxury Nights</div>
          <div>Restaurant • Bar • Stay</div>
          <div>Open for Travellers & Families</div>
        </div>
      </div>
    </section>
  );
}
