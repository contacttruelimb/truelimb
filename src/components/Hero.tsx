import { ArrowRight, MapPin, Phone, Clock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-dark"
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 scale-[0.95] origin-center"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/70 to-slate-950/85" />
        {/* Geometric grid pattern */}
        <div className="absolute inset-0 hero-grid-pattern" />
        {/* Glowing accents */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent/15 blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Advanced Prosthetic & Orthotic Solutions
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            Restoring Mobility,
            <br />
            <span className="bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent">
              Rebuilding Lives
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-white/75 mb-8 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            At Truelimb, we combine cutting-edge technology with compassionate care to deliver custom prosthetic and orthotic solutions that empower you to live life fully.
          </p>

          {/* Primary CTA Buttons */}
          <div
            className="flex flex-wrap gap-3 mb-8 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground btn-glow rounded-full px-7"
              asChild
            >
              <a href="#services" className="gap-2">
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 backdrop-blur border-white/20 text-white hover:bg-white/15 hover:text-white rounded-full px-7"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Secondary Action */}
          <div
            className="mb-10 animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            <Button
              size="default"
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10 gap-2"
              asChild
            >
              <a href="/brochure.jpeg" download="Truelimb-Brochure.jpeg">
                <Download className="w-4 h-4" />
                Download Brochure
              </a>
            </Button>
          </div>

          {/* Quick Info */}
          <div
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Ranchi, Jharkhand</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span>+91 9288511995</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span>Mon - Sat: 10AM - 6:30PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
