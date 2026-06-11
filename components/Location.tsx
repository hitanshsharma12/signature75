"use client";

import { MapPinned, Phone } from "lucide-react";
import { site } from "@/data/site";
import WhatsappButton from "@/components/WhatsappButton";
import SectionTitle from "@/components/SectionTitle";

export default function Location() {
  return (
    <section id="contact" className="px-4 py-20 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionTitle
            eyebrow="Location"
            title="Find Signature 75 easily"
            description="The map, call, and WhatsApp actions are arranged to keep booking friction low."
          />

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-luxe backdrop-blur-2xl">
            <iframe
              title="Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
              className="h-[26rem] w-full rounded-[1.5rem] border-0"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-luxe backdrop-blur-2xl">
            <div className="flex items-center gap-3 text-[#d4af37]">
              <MapPinned className="h-5 w-5" />
              <span className="text-sm uppercase tracking-[0.24em]">Signature 75</span>
            </div>
            <h3 className="mt-4 text-3xl font-semibold text-white">{site.location}</h3>
            <p className="mt-4 text-sm leading-7 text-white/65">
              Reserve a room, book a table, or plan a stopover with a single WhatsApp message.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/85 transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-[#d4af37]" />
                Call Now
              </a>
              <WhatsappButton
                text="WhatsApp Booking"
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.bookingText)}`}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
