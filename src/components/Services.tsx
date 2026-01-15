import { ArrowRight } from "lucide-react";
import prostheticsImg from "@/assets/service-prosthetics.jpg";
import orthoticsImg from "@/assets/service-orthotics.jpg";
import cosmeticImg from "@/assets/service-cosmetic.jpg";
import gaitImg from "@/assets/service-gait.jpg";

const services = [
  {
    id: "prosthetics",
    title: "Prosthetic Services",
    description: "We provide customized artificial limbs designed to match your body, lifestyle, and personal goals. Whether you need an upper or lower limb prosthesis, our certified prosthetist works closely with you to ensure proper fit, comfort, and natural movement.",
    image: prostheticsImg,
    features: ["Personalized fitting & design", "Upper & lower limb solutions", "Lightweight & durable materials", "Regular follow-up care"],
  },
  {
    id: "orthotics",
    title: "Orthotic Services",
    description: "Our custom orthotic devices provide essential support and stability for various conditions. From ankle-foot orthoses (AFOs) to spinal braces, each device is carefully crafted to improve your mobility and reduce discomfort in daily activities.",
    image: orthoticsImg,
    features: ["Ankle-foot orthoses (AFO/KAFO)", "Spinal support braces", "Custom foot orthoses", "Pediatric orthotics"],
  },
  {
    id: "cosmetic",
    title: "Cosmetic Restoration Services",
    description: "Restore your natural appearance with our lifelike silicone prostheses. Our skilled team creates custom cosmetic restorations that closely match your skin tone, texture, and features—helping you regain confidence in your everyday life.",
    image: cosmeticImg,
    features: ["Silicone fingers & hands", "Custom skin tone matching", "Natural-looking finish", "Comfortable wear"],
  },
  {
    id: "gait",
    title: "Gait Training & Rehabilitation",
    description: "Learning to walk with a new prosthetic or orthotic device takes time and guidance. Our dedicated rehabilitation program helps you build strength, improve balance, and develop a natural walking pattern with ongoing support from our trained team.",
    image: gaitImg,
    features: ["Step-by-step walking training", "Balance & strength exercises", "Progress monitoring", "Ongoing support"],
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
