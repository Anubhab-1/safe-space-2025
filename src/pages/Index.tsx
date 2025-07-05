import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SafetyTips from "@/components/SafetyTips";
import ReportForm from "@/components/ReportForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SafetyTips />
        <ReportForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
