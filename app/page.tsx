import ConfidentialInquiryForm from "@/components/ConfidentialInquiryForm";
import { ProofSelector } from "@/components/ProofSelector";
import { AnimatedBraBrand } from "@/components/command/AnimatedBraBrand";
import { getMarketingWordmarkTheme } from "@/lib/marketing-wordmark-theme";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Battle Ready Armor Pilot | GainSec",
  description:
    "Governed agent-assisted offensive security landing page for private pilot briefings.",
};

const mono = `"JetBrains Mono","SF Mono","Fira Code","Cascadia Code",monospace`;
const wordmarkTheme = getMarketingWordmarkTheme("marketing2");

const heroHighlights = [
  {
    title: "Scope Enforcement",
    body: "Targets must be explicitly authorized before interaction.",
  },
  {
    title: "Runtime Approval Gates",
    body: "Proposed actions require operator approval before execution.",
  },
  {
    title: "Agent Isolation",
    body: "Agents operate inside controlled execution boundaries.",
  },
  {
    title: "Full Action Trace",
    body: "Every step produces a verifiable action trail.",
  },
  {
    title: "Private Deployment",
    body: "BRA runs inside your environment so engagement data, targets, and artifacts remain under your control.",
  },
  {
    title: "Command Interface",
    body: "Operators maintain visibility into scope, authorization, and execution context while directing engagements.",
  },
] as const;

const coreProblemCards = [
  "AI capability is accelerating faster than operational governance.",
  "AI systems can now assist with reconnaissance, analysis, and exploit development.",
  "What organizations lack is a controlled execution layer that allows operators to safely direct and verify that work.",
  "Without runtime control, a single hallucinated command can damage production infrastructure.",
  "Security teams need the adaptability of AI without surrendering operational authority.",
] as const;

const enforcementItems = [
  {
    id: "tool",
    label: "Tool / Script Approval Gate",
    eyebrow: "",
    title: "",
    description:
      "The system presents the proposed command, tool path, and execution context before allowing the operator to authorize the action.",
    src: "/toolapproval.png",
    alt: "BRA tool approval flow showing the proposed command and explicit operator gate.",
    width: 1447,
    height: 1366,
  },
] as const;

const knowledgePoints = [
  "The system retains engagement context, artifacts, and decisions so organizations compound offensive capability over time.",
  "Findings preserved as structured artifacts",
  "Attack paths retained as institutional knowledge",
  "Tool workflows recorded as reusable capability",
  "Expertise preserved beyond individual operators",
  "Decisions traceable across engagements",
] as const;

const proofItems = [
  {
    id: "results",
    label: "Example Finding Artifact",
    eyebrow: "",
    title: "",
    description:
      "Governed execution produces a reproducible finding artifact including severity, affected surface, evidence, and reproduction steps.",
    src: "/finding.png",
    mobileSrc: "/mobile-finding.jpg",
    alt: "BRA finding artifact showing a high-severity unauthenticated admin interface issue with description, impact, and reproduction details.",
    width: 892,
    height: 895,
    mobileWidth: 1184,
    mobileHeight: 1829,
  },
] as const;

const buyers = [
  {
    title: "Offensive Security Leaders",
    points: [
      "Govern agent-assisted workflows without losing accountability",
      "Maintain operational visibility across engagements",
      "Preserve institutional knowledge across teams",
    ],
  },
  {
    title: "Operators",
    points: [
      "Use existing tools through a governed execution layer",
      "Move faster while retaining approval authority",
      "Produce structured findings and artifacts automatically",
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
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-4 lg:px-8">
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
            <Link href="#control" className="transition hover:text-emerald-300">
              Control
            </Link>
            <Link href="#loop" className="transition hover:text-emerald-300">
              Traceability
            </Link>
            <Link href="#knowledge" className="transition hover:text-emerald-300">
              Knowledge
            </Link>
            <Link href="#cta" className="transition hover:text-emerald-300">
              Request Briefing
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
          <div className="mx-auto w-full max-w-[1400px]">
            <p
              className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.28em] text-emerald-300"
              style={{ fontFamily: mono }}
            >
              Private Pilot Briefings Available
            </p>
            <h1 className="mt-8 w-full max-w-[980px] text-4xl font-semibold leading-[1.04] tracking-tight text-white lg:text-7xl">
              Govern agent-assisted offensive security without surrendering
              control.
            </h1>
            <p className="mt-6 w-full max-w-[760px] text-lg leading-relaxed text-slate-300">
              Agent-assisted offensive security under runtime operator control.
            </p>
            <p className="mt-4 w-full max-w-[760px] text-base leading-relaxed text-slate-300">
              BRA coordinates tools, models, and operators through enforced
              approval gates so engagements move faster without losing oversight.
            </p>
            <p className="mt-4 w-full max-w-[760px] text-sm leading-relaxed text-slate-400">
              AI systems can assist with real offensive work, but enterprises
              lack safe execution layers that keep humans accountable for every
              action.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-200"
              >
                Request Private Briefing
              </Link>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Pilot, design-partner, or investor inquiries handled through the
              same{" "}
              <a className="text-emerald-300 underline underline-offset-4" href="#cta">
                confidential briefing form.
              </a>
            </p>

            <div
              id="control"
              className="mt-12 scroll-mt-28 grid w-full max-w-[1080px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {heroHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p
                    className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300"
                    style={{ fontFamily: mono }}
                  >
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gap" className="border-t border-emerald-400/10 px-6 py-14 lg:px-8">
          <div className="mx-auto w-full max-w-[1400px]">
            <SectionLabel>Core Problem</SectionLabel>
            <div className="mt-10 grid gap-4 lg:grid-cols-5">
              {coreProblemCards.map((card) => (
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

        <section id="loop" className="border-t border-emerald-400/10 px-6 py-14 lg:px-8">
          <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionLabel>Runtime Control</SectionLabel>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white lg:text-5xl">
                Every action is governed before execution.
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-400">
                Every action, approval, artifact, and finding is preserved as a
                verifiable engagement record.
              </p>
              <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <div className="grid gap-4">
                  {[
                    "Targets must be explicitly authorized before the system interacts with them.",
                    "Tools and scripts require approval at the moment of execution.",
                    "Sensitive values can be masked before they reach automated agents.",
                    "Operators retain full situational awareness while the engagement progresses.",
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

        <section id="knowledge" className="border-t border-emerald-400/10 px-6 py-14 lg:px-8">
          <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <SectionLabel>Knowledge That Compounds</SectionLabel>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white lg:text-5xl">
                Offensive knowledge should compound, not disappear.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                Every governed engagement produces durable operational artifacts.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
                Operational knowledge is retained as structured artifacts so
                expertise survives operator turnover.
              </p>
              <div className="mt-5 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm font-semibold text-emerald-300">
                  Examples include:
                </p>
                <div className="mt-4 grid gap-3">
                  {knowledgePoints.map((item) => (
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

        <section id="buyers" className="border-t border-emerald-400/10 px-6 py-14 lg:px-8">
          <div className="mx-auto w-full max-w-[1400px]">
            <SectionLabel>Who This Is For</SectionLabel>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
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

        <section id="cta" className="border-t border-emerald-400/10 px-6 py-14 lg:px-8">
          <div className="mx-auto w-full max-w-[1200px] rounded-[32px] border border-emerald-400/14 bg-emerald-400/[0.06] p-8 text-center lg:p-12">
            <p className="text-sm leading-relaxed text-slate-400">
              Built by GainSec — offensive security leader with 50+ disclosed
              CVEs and published research in Phrack and other industry venues.
            </p>
            <SectionLabel>Request Private Briefing</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white lg:text-5xl">
              Run agent-assisted offensive security under real operational
              control.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
              Organizations exploring agent-assisted security workflows can
              request a confidential pilot briefing.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
              Qualified teams may be invited to participate in the private pilot
              program.
            </p>
            <ConfidentialInquiryForm />
            <p className="mt-8 text-sm text-slate-400">
              Pilot, design-partner, or investor inquiries handled through the
              same confidential form.
            </p>
          </div>
        </section>

        <footer className="mt-24 border-t border-white/10 px-6 pt-8 text-center text-xs text-slate-500 lg:px-8">
          © 2026 Battle Ready Armor (BRA) by GainSec. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
