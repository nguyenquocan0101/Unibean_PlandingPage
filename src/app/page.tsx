import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import TesterForm from "@/components/TesterForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <TesterForm />
      <Footer />
    </main>
  );
}
