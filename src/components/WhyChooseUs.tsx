import { Award, Users, Clock, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Patients Served" },
  { icon: Award, value: "Certified", label: "P&O Professional" },
  { icon: Clock, value: "Dedicated", label: "Follow-up Care" },
  { icon: Heart, value: "Patient", label: "First Approach" },
];

const reasons = [
  {
    title: "Certified Expertise",
    description: "Led by a qualified Prosthetist & Orthotist with hands-on experience in fitting, fabrication, and patient rehabilitation.",
  },
  {
    title: "Personalized Care",
    description: "Every patient is unique. We take time to understand your needs, lifestyle, and goals to create solutions that truly work for you.",
  },
  {
    title: "Quality Materials",
    description: "We use high-quality, durable materials and modern techniques to ensure long-lasting comfort and reliable performance.",
  },
  {
    title: "Ethical Practice",
    description: "We believe in honest guidance without unnecessary recommendations. Your well-being is our priority, not sales.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-accent" />
              </div>
              <p className="font-display text-3xl lg:text-4xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Truelimb</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              A Clinic Built on<br />
              <span className="text-gradient">Care & Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Truelimb is a specialized Prosthetic & Orthotic clinic founded with a simple belief: every patient deserves personalized attention, honest guidance, and solutions that genuinely improve their quality of life.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Run by a Certified Prosthetist & Orthotist, we combine clinical expertise with a patient-first approach. From the initial consultation to fitting and follow-up care, we walk with you through every step of your journey towards better mobility and independence.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-accent/30 border-2 border-card flex items-center justify-center"
                  >
                    <span className="text-accent text-xs font-bold">✓</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by patients in Ranchi & Jharkhand
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="bg-card rounded-xl p-6 card-elevated border border-accent/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <span className="text-accent font-bold">{index + 1}</span>
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;