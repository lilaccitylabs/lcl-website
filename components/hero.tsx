"use client";

import dynamic from "next/dynamic";
import EmailSignup from "./email-signup";

const AuroraBackground = dynamic(() => import("./aurora-background"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute h-[500px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.25),rgba(236,72,153,0.1),transparent_70%)] blur-3xl" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      {/* Animated gradient glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <AuroraBackground />
      </div>

      <div className="relative mx-auto max-w-[720px] px-6">
        {/* Wordmark */}
        <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Lilac City Labs
        </h1>

        {/* Tagline with blinking cursor */}
        <p className="mt-4 font-mono text-lg text-text-body sm:text-xl">
          Solo-built software for underserved markets
          <span
            className="ml-0.5 inline-block text-accent"
            style={{ animation: "blink 1s step-end infinite" }}
          >
            _
          </span>
        </p>

        {/* Hero paragraph */}
        <p className="mt-6 text-base leading-relaxed text-text-body sm:text-lg">
          Lilac City Labs is a one-person software studio focused on finding and
          filling gaps in app marketplaces. I use data pipelines and AI analysis
          to systematically discover underserved markets, then build the tools
          people are already looking for.
        </p>

        {/* CTAs */}
        <div className="mt-10">
          <EmailSignup cta="Get notified when I ship something" />
        </div>

        <div className="mt-6">
          <a
            href="https://github.com/lilaccitylabs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-text-body transition-colors hover:bg-surface hover:text-foreground"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
