"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionTitle({ eyebrow, title, description, centered = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#d4af37]/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[0.08em] text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">{description}</p>
      ) : null}
    </motion.div>
  );
}
