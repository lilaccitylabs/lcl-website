import EmailSignup from "./email-signup";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center">
      {/* Subtle gradient glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08),rgba(124,58,237,0.03),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[720px] px-6">
        <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Lilac City Labs
        </h1>

        <p className="mt-4 text-lg text-text-body sm:text-xl">
          Modern software for continuing medical education
        </p>

        <p className="mt-6 text-base leading-relaxed text-text-body sm:text-lg">
          We&apos;re building a CME management platform that&apos;s faster,
          simpler, and radically more affordable than what&apos;s on the market
          today. Designed by people who actually run CME programs.
        </p>

        <div className="mt-10">
          <EmailSignup cta="Get notified when we launch" />
        </div>
      </div>
    </section>
  );
}
