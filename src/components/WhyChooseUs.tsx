import { Award, Users, Clock, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "5000+", label: "Happy Patients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Support Available" },
  { icon: Heart, value: "100%", label: "Care Commitment" },
];

const reasons = [
  {
    title: "Expert Team",
    description: "Our certified prosthetists and orthotists bring decades of combined experience and continuous training in the latest technologies.",
  },
  {
    title: "Custom Solutions",
    description: "Every device we create is tailored to your unique anatomy, lifestyle, and goals - because you deserve more than one-size-fits-all.",
  },
  {
    title: "Advanced Technology",
    description: "We use 3D scanning, CAD/CAM design, and cutting-edge materials to deliver precise, comfortable, and durable solutions.",
  },
  {
    title: "Compassionate Care",
    description: "We understand the emotional journey of limb loss or mobility challenges. Our team provides support beyond just devices.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-32 bg-accent/50">
      <div className="container mx-auto px-4">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-display text-3xl lg:text-4xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Truelimb</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Your Partner in<br />
              <span className="text-gradient">Mobility & Independence</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              At Truelimb, we believe everyone deserves the freedom to move, work, play, and live without limitations. Our mission is to provide not just devices, but complete solutions that restore confidence and quality of life.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center"
                  >
                    <span className="text-primary text-xs font-bold">✓</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by thousands of patients across India
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="bg-card rounded-xl p-6 card-elevated"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{index + 1}</span>
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
