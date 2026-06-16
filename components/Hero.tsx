"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPinned, Sparkles, X, PartyPopper, Users, ParkingCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";

type FormType = "event" | "table" | null;

type FormData = {
  name: string;
  phone: string;
  date: string;
  time: string;
  people: string;
  eventType: string;
  parking: string;
  message: string;
};

const WHATSAPP_NUMBER = "917018796714";

const initialFormData: FormData = {
  name: "",
  phone: "",
  date: "",
  time: "",
  people: "",
  eventType: "",
  parking: "No",
  message: "",
};

export default function Hero() {
  const [openForm, setOpenForm] = useState<FormType>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  useEffect(() => {
    if (openForm === "event") {
      setFormData({
        ...initialFormData,
        eventType: "Birthday Party",
      });
    } else if (openForm === "table") {
      setFormData({
        ...initialFormData,
        parking: "No",
      });
    }
  }, [openForm]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const buildWhatsAppMessage = () => {
    if (openForm === "event") {
      return `Hi, I want to book an event at ${site.name}.

Event Name:
${formData.eventType || "Not selected"}

Name:
${formData.name || "Not provided"}

Phone:
${formData.phone || "Not provided"}

Date:
${formData.date || "Not provided"}

Time:
${formData.time || "Not provided"}

Number of People:
${formData.people || "Not provided"}

Additional Message:
${formData.message || "None"}`;
    }

    if (openForm === "table") {
      return `Hi, I want to reserve a table at ${site.name}.

Name:
${formData.name || "Not provided"}

Phone:
${formData.phone || "Not provided"}

Date:
${formData.date || "Not provided"}

Time:
${formData.time || "Not provided"}

Number of People:
${formData.people || "Not provided"}

Parking Required:
${formData.parking || "No"}

Additional Message:
${formData.message || "None"}`;
    }

    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(buildWhatsAppMessage());
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setOpenForm(null);
    setFormData(initialFormData);
  };

  const openModal = (type: FormType) => {
    setOpenForm(type);
  };

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
              Experience premium hospitality with dining, drinks, comfortable stays and journey convenience —
              all under one refined roof.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openModal("event")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4af37] px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-[#d4af37]/20 transition hover:scale-[1.02] hover:bg-[#e7c45a]"
              >
                <PartyPopper className="h-4 w-4" />
                Book Event
              </button>

              <button
                type="button"
                onClick={() => openModal("table")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 backdrop-blur transition hover:bg-white/10"
              >
                <Users className="h-4 w-4 text-[#d4af37]" />
                Reserve Table
              </button>

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

      <AnimatePresence>
        {openForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 px-4 py-4 backdrop-blur-sm sm:items-center"
            onClick={() => setOpenForm(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0c0c10] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                <div>
                  <h2 className="text-lg font-semibold text-white sm:text-xl">
                    {openForm === "event" ? "Book Event" : "Reserve Table"}
                  </h2>
                  <p className="mt-1 text-xs text-white/55 sm:text-sm">
                    Fill the details and send directly on WhatsApp.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenForm(null)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="max-h-[80vh] overflow-y-auto px-5 py-5 sm:px-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm text-white/75">Full Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4af37]/60"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/75">Phone Number</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      inputMode="numeric"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4af37]/60"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/75">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#d4af37]/60"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/75">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#d4af37]/60"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/75">Number of People</label>
                    <input
                      name="people"
                      value={formData.people}
                      onChange={handleChange}
                      required
                      inputMode="numeric"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4af37]/60"
                      placeholder="e.g. 25"
                    />
                  </div>

                  {openForm === "event" ? (
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm text-white/75">Type of Event</label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#d4af37]/60"
                      >
                        <option value="Birthday Party">Birthday Party</option>
                        <option value="Wedding Function">Wedding Function</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Corporate Meeting">Corporate Meeting</option>
                        <option value="Kitty Party">Kitty Party</option>
                        <option value="Family Gathering">Family Gathering</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  ) : (
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm text-white/75">Parking Needed?</label>
                      <select
                        name="parking"
                        value={formData.parking}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#d4af37]/60"
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>
                  )}

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm text-white/75">Additional Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4af37]/60"
                      placeholder="Any special request..."
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#d4af37] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#e7c45a]"
                  >
                    <ParkingCircle className="h-4 w-4" />
                    Send on WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpenForm(null)}
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}