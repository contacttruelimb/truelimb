import { ArrowRight, MapPin, Phone, Clock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-[0.85] origin-center"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Very light translucent overlay - 15% opacity for maximum video visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/50 via-foreground/30 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent/90 backdrop-blur-sm rounded-full text-accent-foreground text-sm font-semibold mb-6">
              Advanced Prosthetic & Orthotic Solutions
            </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Restoring Mobility,<br />
            <span className="text-accent">Rebuilding Lives</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            At Truelimb, we combine cutting-edge technology with compassionate care to provide custom prosthetic and orthotic solutions that empower you to live life fully.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="#services" className="gap-2">
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Secondary Action */}
          <div className="mb-10 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <Button size="default" variant="ghost" className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 gap-2" asChild>
              <a href="/brochure.jpeg" download="Truelimb-Brochure.jpeg">
                <Download className="w-4 h-4" />
                Download Brochure
              </a>
            </Button>
          </div>

          {/* Quick Info - Compact inline style */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-primary-foreground/80 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Ranchi, Jharkhand</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-primary-foreground/30" />
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span>+91 9288511995</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-primary-foreground/30" />
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