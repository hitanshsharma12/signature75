import { MessageCircle } from "lucide-react";

type Props = {
  text: string;
  href: string;
  className?: string;
};

export default function WhatsappButton({ text, href, className = "" }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        "inline-flex items-center justify-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37] px-5 py-3 text-sm font-medium text-black shadow-[0_10px_35px_rgba(212,175,55,0.28)] transition hover:scale-[1.02] hover:bg-[#e3c25a] " +
        className
      }
    >
      <MessageCircle className="h-4 w-4" />
      {text}
    </a>
  );
}
