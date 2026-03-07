"use client";

import { useState } from "react";

export default function ConfidentialInquiryForm() {
  const [email, setEmail] = useState("");
  const [nameOrOrg, setNameOrOrg] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/confidential-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name_or_org: nameOrOrg,
          message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Private inquiry received.");
        setEmail("");
        setNameOrOrg("");
        setMessage("");
      } else {
        setStatus(data.error || "Submit failed.");
      }
    } catch {
      setStatus("Submit failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/40"
        />

        <input
          type="text"
          value={nameOrOrg}
          onChange={(e) => setNameOrOrg(e.target.value)}
          placeholder="name or org (optional)"
          className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/40"
        />

        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What do you want to discuss privately?"
          className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/40"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-emerald-300 px-6 py-2 font-semibold text-black transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Confidential Outreach"}
        </button>
      </form>

      {status ? <p className="mt-3 text-sm text-slate-400">{status}</p> : null}
    </div>
  );
}
