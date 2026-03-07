"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("You're on the list.");
        setEmail("");
        setMessage("");
      } else {
        setStatus(data.error || "Signup failed.");
      }
    } catch {
      setStatus("Signup failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/40"
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What kind of offensive work do you want to run with this?"
          rows={3}
          className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/40"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-emerald-300 px-6 py-2 font-semibold text-black transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </button>
      </form>

      {status ? <p className="mt-3 text-sm text-slate-400">{status}</p> : null}
    </div>
  );
}
