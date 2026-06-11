"use client";

import { site } from "@/data/site";
import { Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-4 py-14 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <div className="text-2xl font-semibold uppercase tracking-[0.18em] text-white">{site.name}</div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
            A premium hospitality ecosystem presented as a luxury dark experience for modern travellers, families and guests.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[#d4af37]/80">Built by Hi Tech</p>
        </div>

        <div>
          <div className="text-sm uppercase tracking-[0.25em] text-white/50">Quick Links</div>
          <div className="mt-4 grid gap-3">
            {site.quickLinks.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-white/70 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm uppercase tracking-[0.25em] text-white/50">Contact</div>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#d4af37]" /> {site.phone}</p>
            <p className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-[#d4af37]" /> WhatsApp Booking</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#d4af37]" /> Rohru, Himachal Pradesh</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
