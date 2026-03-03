import Hero from "@/components/hero";
import CurrentlyBuilding from "@/components/currently-building";
import About from "@/components/about";
import EmailSignup from "@/components/email-signup";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main>
        <Hero />
        <CurrentlyBuilding />
        <About />

        {/* Bottom email signup */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-[720px] px-6">
            <EmailSignup cta="I'm building in the open. Drop your email to get notified when I ship new tools and share what I'm learning along the way." />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
