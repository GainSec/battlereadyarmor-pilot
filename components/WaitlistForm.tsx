"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("You're on the list.");
        setEmail("");
      } else {
        setMessage(data.error || "Signup failed.");
      }
    } catch {
      setMessage("Signup failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/40"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-emerald-300 px-6 py-2 font-semibold text-black transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </button>
      </form>

      {message ? <p className="mt-3 text-sm text-slate-400">{message}</p> : null}
    </div>
  );
}
