import { ArrowRight, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-prosthetics.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Truelimb prosthetics clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6">
              Advanced Prosthetic & Orthotic Solutions
            </span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Restoring Mobility,<br />
            <span className="opacity-90">Rebuilding Lives</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            At Truelimb, we combine cutting-edge technology with compassionate care to provide custom prosthetic and orthotic solutions that empower you to live life fully.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" variant="secondary" asChild>
              <a href="#services" className="gap-2">
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <MapPin className="w-5 h-5 text-primary-foreground flex-shrink-0" />
              <div>
                <p className="text-primary-foreground/70 text-xs">Location</p>
                <p className="text-primary-foreground text-sm font-medium">New Delhi, India</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Phone className="w-5 h-5 text-primary-foreground flex-shrink-0" />
              <div>
                <p className="text-primary-foreground/70 text-xs">Call Us</p>
                <p className="text-primary-foreground text-sm font-medium">+91 12345 67890</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="w-5 h-5 text-primary-foreground flex-shrink-0" />
              <div>
                <p className="text-primary-foreground/70 text-xs">Working Hours</p>
                <p className="text-primary-foreground text-sm font-medium">Mon - Sat: 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
