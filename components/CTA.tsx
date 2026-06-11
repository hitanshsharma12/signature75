"use client";

import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import WhatsappButton from "@/components/WhatsappButton";

export default function CTA() {
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.2rem] border border-[#d4af37]/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.16),rgba(255,255,255,0.06),rgba(0,0,0,0.55))] p-8 shadow-luxe md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#f2d98c]">Booking CTA</p>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
                Ready for your next stay or dinner plan?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
                Use WhatsApp to book a room, reserve a table, or plan your journey stop with Signature 75.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <WhatsappButton
                text="WhatsApp Booking"
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.bookingText)}`}
                className="w-full"
              />
              <a
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                Call Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
