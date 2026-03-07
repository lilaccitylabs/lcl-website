import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Features from "@/components/features";
import About from "@/components/about";
import EmailSignup from "@/components/email-signup";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main>
        <Hero />
        <Problem />
        <Features />
        <About />

        <section className="border-t border-border py-20 sm:py-24">
          <div className="mx-auto max-w-[720px] px-6">
            <EmailSignup cta="We're launching soon. Drop your email to get notified when our CME platform is ready." />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
