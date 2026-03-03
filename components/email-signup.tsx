"use client";

import { useState } from "react";

export default function EmailSignup({ cta }: { cta: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else if (res.status === 429) {
        setStatus("error");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="font-mono text-sm text-accent">
        You&apos;re in! Check your inbox.
      </p>
    );
  }

  return (
    <div>
      <p className="mb-4 text-text-body">{cta}</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-text-muted">
            &gt;
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="w-full rounded-lg border border-border bg-surface py-3 pl-8 pr-4 font-mono text-sm text-foreground placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Notify Me"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-sm text-red-400">
          Something went wrong. Try again.
        </p>
      )}
    </div>
  );
}
