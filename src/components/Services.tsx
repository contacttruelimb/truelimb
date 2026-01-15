import { ArrowRight } from "lucide-react";
import prostheticsImg from "@/assets/service-prosthetics.jpg";
import orthoticsImg from "@/assets/service-orthotics.jpg";
import cosmeticImg from "@/assets/service-cosmetic.jpg";
import gaitImg from "@/assets/service-gait.jpg";

const services = [
  {
    id: "prosthetics",
    title: "Prosthetic Services",
    description: "Custom-designed artificial limbs using cutting-edge technology. We offer upper and lower extremity prosthetics including microprocessor-controlled knees, bionic hands, and running blades.",
    image: prostheticsImg,
    features: ["Custom fitting & fabrication", "Microprocessor limbs", "Sports prosthetics", "Pediatric solutions"],
  },
  {
    id: "orthotics",
    title: "Orthotic Services",
    description: "Precision-crafted braces and supports that help stabilize, align, and protect various parts of your body. From spinal orthoses to ankle-foot orthoses (AFOs).",
    image: orthoticsImg,
    features: ["Spinal orthoses", "Lower limb bracing", "Custom foot orthotics", "Cranial helmets"],
  },
  {
    id: "cosmetic",
    title: "Cosmetic Restoration",
    description: "Lifelike silicone prostheses that restore natural appearance. Our skilled artists create custom pieces matching your exact skin tone, texture, and features.",
    image: cosmeticImg,
    features: ["Silicone fingers & hands", "Facial prosthetics", "Breast prostheses", "Custom skin matching"],
  },
  {
    id: "gait",
    title: "Gait Training",
    description: "Comprehensive rehabilitation programs to help you walk naturally with your new prosthetic or orthotic device. Our trained therapists guide you every step of the way.",
    image: gaitImg,
    features: ["Balance training", "Walking rehabilitation", "Strength building", "Progress tracking"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Comprehensive Care for<br />
            <span className="text-gradient">Every Need</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a full spectrum of prosthetic and orthotic services, tailored to your unique requirements and lifestyle goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="group bg-card rounded-2xl overflow-hidden card-elevated"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
