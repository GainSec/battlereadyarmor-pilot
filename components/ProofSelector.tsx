"use client";

import Image from "next/image";
import { useState } from "react";

type ProofSelectorItem = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  src: string;
  mobileSrc?: string;
  alt: string;
  width: number;
  height: number;
  mobileWidth?: number;
  mobileHeight?: number;
  imageClassName?: string;
};

type ProofSelectorProps = {
  items: ProofSelectorItem[];
  tone?: "dark" | "light";
};

export function ProofSelector({ items, tone = "dark" }: ProofSelectorProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const active = items.find((item) => item.id === activeId) ?? items[0];

  const theme =
    tone === "light"
      ? {
          shell: "border-stone-300 bg-white",
          tabs: "border-stone-200 bg-stone-100",
          tabIdle: "text-stone-500 hover:text-stone-900",
          tabActive: "bg-white text-stone-900 shadow-sm",
          frame: "border-stone-200 bg-stone-50",
          eyebrow: "text-stone-500",
          title: "text-stone-900",
          body: "text-stone-600",
        }
      : {
          shell: "border-white/10 bg-white/[0.04]",
          tabs: "border-white/10 bg-black/20",
          tabIdle: "text-slate-400 hover:text-white",
          tabActive: "bg-cyan-300 text-[#04111d] shadow-[0_0_18px_rgba(103,232,249,0.25)]",
          frame: "border-white/10 bg-[#020817]",
          eyebrow: "text-cyan-300",
          title: "text-white",
          body: "text-slate-400",
        };

  if (!active) {
    return null;
  }

  return (
    <div className={`rounded-[28px] border p-3 sm:p-4 ${theme.shell}`}>
      <div className={`inline-flex flex-wrap gap-2 rounded-full border p-1 ${theme.tabs}`}>
        {items.map((item) => {
          const isActive = item.id === active.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                isActive ? theme.tabActive : theme.tabIdle
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        className={`mt-5 flex min-h-[220px] items-center justify-center overflow-hidden rounded-[22px] border p-3 sm:min-h-[320px] sm:p-5 md:min-h-[360px] ${theme.frame}`}
      >
        {active.mobileSrc ? (
          <>
            <Image
              src={active.mobileSrc}
              alt={active.alt}
              width={active.mobileWidth ?? active.width}
              height={active.mobileHeight ?? active.height}
              className={`h-auto max-h-[72vh] w-full object-contain md:hidden ${active.imageClassName ?? ""}`}
            />
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              className={`hidden h-auto max-h-[72vh] w-full object-contain md:block ${active.imageClassName ?? ""}`}
            />
          </>
        ) : (
          <Image
            src={active.src}
            alt={active.alt}
            width={active.width}
            height={active.height}
            className={`h-auto max-h-[72vh] w-full object-contain ${active.imageClassName ?? ""}`}
          />
        )}
      </div>

      <div className="px-1 pb-1 pt-4 sm:pt-5">
        <p className={`text-[11px] font-bold uppercase tracking-[0.26em] ${theme.eyebrow}`}>
          {active.eyebrow}
        </p>
        <p className={`mt-2 text-base font-semibold sm:text-lg ${theme.title}`}>{active.title}</p>
        <p className={`mt-2 text-sm leading-relaxed sm:text-[15px] ${theme.body}`}>{active.description}</p>
      </div>
    </div>
  );
}
