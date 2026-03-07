const features = [
  {
    title: "Activity management",
    description:
      "Create, manage, and track CME activities from planning through completion with a clean, intuitive interface.",
  },
  {
    title: "QR code check-in",
    description:
      "Learners check in by scanning a code. No app download required. Attendance tracked automatically.",
  },
  {
    title: "PARS-ready reporting",
    description:
      "Export ACCME-compliant reports with one click. Built for PARS from day one, not bolted on after.",
  },
  {
    title: "Transparent pricing",
    description:
      "Published pricing on the website. No sales calls, no surprise invoices, no multi-year lock-in.",
  },
  {
    title: "SSO included",
    description:
      "SAML single sign-on at every tier. Your learners authenticate through your institution's identity provider.",
  },
  {
    title: "Built by CME professionals",
    description:
      "Our co-founder manages a CME program day-to-day. Every feature is informed by real operational experience.",
  },
];

export default function Features() {
  return (
    <section className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-[720px] px-6">
        <h2 className="text-xl font-medium text-foreground sm:text-2xl">
          What we&apos;re building
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title}>
              <h3 className="text-base font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
