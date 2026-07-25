import { useState } from "react";
import { Play, Share2, X, Image as ImageIcon, Video as VideoIcon, Grid3x3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type MediaType = "video" | "post";

interface MediaItem {
  id: string;
  type: MediaType;
  title: string;
  description: string;
  thumbnail: string;
  src?: string; // video url
}

// Placeholder content — replace thumbnails/urls with real clinic media
const items: MediaItem[] = [
  {
    id: "1",
    type: "video",
    title: "Fitting a Hi-Tech Prosthetic Leg",
    description: "Walkthrough of our advanced prosthetic leg fitting process.",
    thumbnail:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=70",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "2",
    type: "post",
    title: "Custom Orthotic Braces",
    description: "Tailored bracing solutions for daily mobility & support.",
    thumbnail:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "3",
    type: "video",
    title: "Gait Training Session",
    description: "Guided rehab sessions to restore natural walking patterns.",
    thumbnail:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=70",
    src: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: "4",
    type: "post",
    title: "Cosmetic Restoration",
    description: "Lifelike silicone finishes crafted to your skin tone.",
    thumbnail:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "5",
    type: "post",
    title: "Corrective Footwear",
    description: "Custom insoles & footwear that ease every step.",
    thumbnail:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "6",
    type: "video",
    title: "Patient Success Story",
    description: "Real journeys of mobility rebuilt at TrueLimb Ranchi.",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=70",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

type Filter = "all" | "video" | "post";

const tabs: { key: Filter; label: string; icon: React.ReactNode }[] = [
  { key: "all", label: "All", icon: <Grid3x3 className="w-4 h-4" /> },
  { key: "video", label: "Videos", icon: <VideoIcon className="w-4 h-4" /> },
  { key: "post", label: "Posts", icon: <ImageIcon className="w-4 h-4" /> },
];

const Gallery = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<MediaItem | null>(null);

  const visible = items.filter((i) => filter === "all" || i.type === filter);

  const share = async (item: MediaItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: item.title, text: item.description, url });
      } catch {
        /* cancelled */
      }
    } else {
      navigator.clipboard?.writeText(url);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary font-semibold mb-3">
            Gallery & Social Feed
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Life at <span className="text-gradient">TrueLimb</span>
          </h2>
          <p className="text-muted-foreground">
            A closer look at our clinic, patient journeys, and informational content from our team.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-card border border-border rounded-full p-1 shadow-sm">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setFilter(t.key)}
                className={`inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full transition-all ${
                  filter === t.key
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.icon}
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {visible.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item)}
              className="group relative aspect-square overflow-hidden rounded-xl bg-muted border border-border card-elevated text-left"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="w-14 h-14 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-primary fill-primary ml-0.5" />
                  </span>
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-sm md:text-base mb-1 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-white/80 text-xs md:text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div
                  role="button"
                  onClick={(e) => share(item, e)}
                  className="inline-flex self-start items-center gap-1.5 text-xs bg-white/15 hover:bg-white/25 backdrop-blur text-white px-3 py-1.5 rounded-full transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  Share
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card">
          {active && (
            <div>
              <div className="relative bg-black aspect-video">
                {active.type === "video" && active.src ? (
                  <video
                    src={active.src}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={active.thumbnail}
                    alt={active.title}
                    className="w-full h-full object-contain"
                  />
                )}
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {active.title}
                </h3>
                <p className="text-muted-foreground mb-4">{active.description}</p>
                <Button
                  variant="outline"
                  onClick={(e) => share(active, e as unknown as React.MouseEvent)}
                  className="gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
