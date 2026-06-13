import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyTrueLimb from "@/components/WhyTrueLimb";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBottomBar from "@/components/MobileBottomBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <WhyTrueLimb />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBottomBar />
    </div>
  );
};

export default Index;
