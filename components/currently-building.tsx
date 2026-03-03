export default function CurrentlyBuilding() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-[720px] px-6">
        <p className="font-mono text-sm text-text-muted">
          {"// currently building"}
        </p>

        <div className="mt-8 space-y-8">
          {/* Project 1 */}
          <div>
            <p className="font-mono text-base text-foreground">
              <span className="text-text-muted mr-3">{">"}</span>
              <span className="text-accent">App Opportunity Pipeline</span>
            </p>
            <p className="mt-3 pl-6 text-base leading-relaxed text-text-body">
              An AI-powered system that mines app store listings, user reviews,
              and community discussions to surface markets that are underserved
              or ignored. It uses{" "}
              <span className="text-violet-400">embedding search</span>,{" "}
              <span className="text-violet-400">LLM scoring</span>, and{" "}
              <span className="text-violet-400">composite ranking</span> to cut
              through noise and find real opportunities worth building for.
            </p>
          </div>

          {/* Project 2 */}
          <div>
            <p className="font-mono text-base text-foreground">
              <span className="text-text-muted mr-3">{">"}</span>
              <span className="text-accent">First app coming soon</span>
            </p>
            <p className="mt-3 pl-6 text-base leading-relaxed text-text-body">
              The pipeline is already surfacing strong opportunities. The first
              product built from its discoveries is in the works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
