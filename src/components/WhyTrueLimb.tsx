import { Award, FlaskConical, Ruler } from "lucide-react";

const cards = [
  {
    icon: Award,
    title: "30+ Years",
    subtitle: "Expertise-Backed Professionals",
  },
  {
    icon: FlaskConical,
    title: "Modern Lab",
    subtitle: "New-Age Precision & Technology",
  },
  {
    icon: Ruler,
    title: "Custom Fit",
    subtitle: "Precision Global Components",
  },
];

const WhyTrueLimb = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why TrueLimb
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Built on Experience, Driven by Precision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/50 card-elevated text-center"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-3xl font-bold text-gradient mb-2">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrueLimb;
