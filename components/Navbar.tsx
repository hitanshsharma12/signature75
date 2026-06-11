"use client";

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/35 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#home" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#d4af37]/30 bg-white/5 text-sm font-bold text-[#d4af37] shadow-luxe">
            75
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
              {site.name}
            </div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/50">
              Premium Hospitality
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {site.quickLinks.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-white/70 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-black/90 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4">
              <div className="grid gap-3">
                {site.quickLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
