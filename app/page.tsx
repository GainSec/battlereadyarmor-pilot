import ConfidentialInquiryForm from "@/components/ConfidentialInquiryForm";
import { ProofSelector } from "@/components/ProofSelector";
import WaitlistForm from "@/components/WaitlistForm";
import { AnimatedBraBrand } from "@/components/command/AnimatedBraBrand";
import { getMarketingWordmarkTheme } from "@/lib/marketing-wordmark-theme";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BRA | War Room",
  description:
    "Control-first BRA landing page for pilots, demos, and security leaders.",
};

const mono = `"JetBrains Mono","SF Mono","Fira Code","Cascadia Code",monospace`;
const wordmarkTheme = getMarketingWordmarkTheme("marketing2");

const threatCards = [
  "AI can now perform real offensive security work. What's missing is the control layers that keep operators in charge while the system executes.",
  "Without mechanical enforcement, a single hallucinated command can damage real infrastructure.",
  "Teams need the speed of AI without surrendering control.",
] as const;

const corePillars = [
  {
    title: "Control in Depth",
    body: "Scope, approvals, and rules of engagement are enforced at the moment an action executes.",
  },
  {
    title: "Agnostic by Design",
    body: "BRA works with the tools, models, and workflows teams already use instead of locking the stack to one vendor.",
  },
  {
    title: "Multi-Layered Checkpoints",
    body: "Sensitive values stay hidden from AI agents while operators retain full visibility in the control interface.",
  },
  {
    title: "Knowledge That Compounds",
    body: "Operational context becomes reusable intelligence instead of disappearing into chat history.",
  },
  {
    title: "Operate From Anywhere",
    body: "Direct engagements from desktop, phone, CLI, TUI, or an optional AI copilot without losing control.",
  },
] as const;

const enforcementItems = [
  {
    id: "tool",
    label: "Tool / Script",
    eyebrow: "Mechanical Enforcement",
    title: "Tools and scripts do not run on vibes.",
    description:
      "The system presents the proposed command, the exact tool path, and the operator gate before active execution proceeds.",
    src: "/toolapproval.png",
    alt: "BRA tool approval flow showing the proposed command and explicit operator gate.",
    width: 1447,
    height: 1366,
  },
] as const;

const proofItems = [
  {
    id: "results",
    label: "Results",
    eyebrow: "Knowledge That Compounds",
    title: "Controlled execution turns into a real written finding.",
    description:
      "Offensive knowledge should compound, not disappear. The system produces a reusable finding artifact with severity, impacted surface, evidence, and reproduction context.",
    src: "/finding.png",
    alt: "BRA finding artifact showing a high-severity unauthenticated admin interface issue with description, impact, and reproduction details.",
    width: 892,
    height: 895,
  },
] as const;

const buyers = [
  {
    title: "Security leaders",
    points: [
      "Mechanical enforcement instead of policy-based trust",
      "Masked for agents, clear to operators",
      "Runtime accountability at the moment of action",
    ],
  },
  {
    title: "Operators",
    points: [
      "Use the tools you already trust",
      "Move faster while staying in control of every action.",
      "Keep findings and evidence flowing in one controlled loop",
    ],
  },
  {
    title: "Practice leads",
    points: [
      "Retain institutional knowledge when people leave",
      "Standardize quality without flattening expert judgment",
      "Demonstrate stronger offensive capabilities to clients.",
    ],
  },
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-bold uppercase tracking-[0.32em] text-emerald-400"
      style={{ fontFamily: mono }}
    >
      {children}
    </p>
  );
}

export default function Marketing2() {
  return (
    <div
      className="min-h-screen bg-[#040816] text-slate-100"
      style={{
        fontFamily: `Manrope,"Segoe UI",sans-serif`,
        background:
          "radial-gradient(circle at top, rgba(16,185,129,0.12), transparent 28%), linear-gradient(180deg, #030712 0%, #071120 46%, #030712 100%)",
      }}
    >
      <header className="sticky top-0 z-50 border-b border-emerald-400/10 bg-[#030712]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <AnimatedBraBrand
              accentColor={wordmarkTheme.accentColor}
              glowColor={wordmarkTheme.glowColor}
              mutedColor={wordmarkTheme.mutedColor}
            />
          </div>
          <nav
            className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.26em] text-slate-400 md:flex"
            style={{ fontFamily: mono }}
          >
            <Link href="#gap" className="transition hover:text-emerald-300">
              Control in Depth
            </Link>
            <Link href="#pillars" className="transition hover:text-emerald-300">
              Core
            </Link>
            <Link href="#knowledge" className="transition hover:text-emerald-300">
              Knowledge
            </Link>
            <Link href="#buyers" className="transition hover:text-emerald-300">
              Buyers
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
          <div className="mx-auto max-w-6xl">
            <div>
              <p
                className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.28em] text-emerald-300"
                style={{ fontFamily: mono }}
              >
                Pilot Program Open
              </p>
              <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-white lg:text-7xl">
                The control plane for
                <br />
                <span className="text-emerald-300">
                  AI-assisted offensive security.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                Offensive AI, under mechanical control.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
                BRA coordinates tools, AI reasoning, and human operators to
                execute offensive security workflows under mechanical control.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
                AI models can now perform real security work. Whats missing is
                control layers that keep operators in charge.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/40 hover:text-emerald-200"
                >
                  Join Waitlist
                </Link>
              </div>

              <p className="mt-4 text-sm text-slate-400">
                Investor, partner, or cleared org inquiry?{" "}
                <a className="text-emerald-300 underline underline-offset-4" href="#cta">
                  Reach out quietly here.
                </a>
              </p>

              <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  "Scope Enforcement",
                  "Runtime Approval Gates",
                  "Agent Isolation",
                  "Full Action Trace",
                ].map((label) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p
                      className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300"
                      style={{ fontFamily: mono }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <p
                  className="text-xs font-bold uppercase tracking-[0.32em] text-emerald-400"
                  style={{ fontFamily: mono }}
                >
                  Command Center
                </p>
                <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white lg:text-5xl">
                  Direct offensive workflows through a controlled command interface.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                  Scope, authorization, and execution context remain visible while the operator directs the engagement.
                </p>

                <div className="mt-12 overflow-hidden rounded-[14px] border border-white/10 bg-[#020817]">
                  <Image
                    src="/bra-dash-proper.png"
                    alt="BRA command center showing engagement scope and governance"
                    width={5103}
                    height={1285}
                    priority
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-emerald-400/10 px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.08fr_0.72fr]">
            <div>
              <SectionLabel>REAL OFFENSIVE WORK</SectionLabel>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight text-white lg:text-5xl">
                BRA coordinates tools,
                <br />
                AI reasoning,
                <br />
                and operators.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                Real offensive workflows execute
                <br />
                under mechanical control.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
                Operators approve every action.
              </p>
            </div>

            <div className="w-full max-w-[340px] self-start rounded-xl border border-white/10 bg-white/[0.03] p-4 -mt-4 lg:-mt-8 lg:ml-auto">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300" style={{ fontFamily: mono }}>
                Recent runs
              </p>
              <div className="mt-2 grid gap-1.5">
                {[
                  "analyzed unfamiliar targets",
                  "chained recon → enumeration → exploitation",
                  "reached remote code execution in minutes",
                  "completed attack paths in tens of actions",
                ].map((item) => (
                  <div key={item} className="flex gap-2 text-sm leading-tight text-slate-200">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-400/80" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="gap" className="border-t border-emerald-400/10 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>The Control Gap</SectionLabel>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white lg:text-5xl">
              The model is not the product. the control layer is.
            </h2>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {threatCards.map((card) => (
                <div
                  key={card}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-relaxed text-slate-300"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pillars" className="border-t border-emerald-400/10 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Core Pillars</SectionLabel>
            <h2 className="mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-white lg:text-5xl">
              BRA is built around five operational guarantees.
            </h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-5">
              {corePillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <h3 className="text-base font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{pillar.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="loop" className="border-t border-emerald-400/10 px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionLabel>Multi-Layered Checkpoints</SectionLabel>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white lg:text-5xl">
                Every action passes through explicit control before execution.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                Chain of custody is enforced in the execution layer, not in
                documentation or prompts.
              </p>
              <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <div className="grid gap-4">
                  {[
                    "Targets must be explicitly authorized before the system interacts with them.",
                    "Tool and script execution is gated at the moment of action.",
                    "New sensitive values can be masked upstream before they reach agents.",
                    "The operator keeps real situational awareness in the GUI throughout the loop.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-relaxed text-slate-200">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ProofSelector items={[...enforcementItems]} />
          </div>
        </section>

        <section id="knowledge" className="border-t border-emerald-400/10 px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <SectionLabel>Knowledge That Compounds</SectionLabel>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white lg:text-5xl">
                Offensive knowledge should compound, not disappear.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                Every engagement improves the system’s operational knowledge.
              </p>
              <div className="mt-5 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm font-semibold text-emerald-300">
                  Operational context becomes durable intelligence:
                </p>
                <div className="mt-4 grid gap-3">
                  {[
                    "findings turn into reusable artifacts",
                    "attack paths become institutional knowledge",
                    "tools and workflows become visible system capabilities",
                    "expertise survives operator turnover",
                    "operator decisions persist across engagements",
                    "security policies and masking rules carry forward automatically",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-snug text-slate-200">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ProofSelector items={[...proofItems]} />
          </div>
        </section>

        <section id="buyers" className="border-t border-emerald-400/10 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Who Moves First</SectionLabel>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {buyers.map((buyer) => (
                <div
                  key={buyer.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <h3 className="text-lg font-semibold text-white">{buyer.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    {buyer.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="border-t border-emerald-400/10 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-emerald-400/14 bg-emerald-400/[0.06] p-8 text-center lg:p-12">
            <SectionLabel>Request Access</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white lg:text-5xl">
              Run offensive AI under real operational control in a private pilot.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
              If you want the speed curve of frontier models without betting
              your reputation on blind autonomy, this is the conversation to have.
            </p>
            <WaitlistForm />
            <p className="mt-8 text-sm text-slate-400">
              Investor, partner, or cleared org briefing:
            </p>
            <ConfidentialInquiryForm />
          </div>
        </section>

        <footer className="mt-24 border-t border-white/10 px-6 pt-8 text-center text-xs text-slate-500 lg:px-8">
          © 2026 Battle Ready Armor (BRA) by GainSec. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
