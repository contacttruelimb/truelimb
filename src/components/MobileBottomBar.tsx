import { Phone, Navigation } from "lucide-react";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir//Truelimb-+Artificial+Limbs+Centre,+Plaza+Chowk,+Hazaribagh+Rd,+opposite+Plaza+Cinema,+New+Barhi+Toli,+Ranchi,+Jharkhand+834001/@23.3497146,85.3652949,2576m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x39f4e12b66490fb5:0xbe8447c0f329df64!2m2!1d85.3326682!2d23.371572";

const MobileBottomBar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border px-3 py-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] flex gap-2 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.15)]">
      <a
        href="tel:+919288511995"
        className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold py-3 rounded-lg transition-colors shadow-md"
      >
        <Phone className="w-5 h-5" />
        <span>Call Now</span>
      </a>
      <a
        href={DIRECTIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors shadow-md"
      >
        <Navigation className="w-5 h-5" />
        <span>Directions</span>
      </a>
    </div>
  );
};

export default MobileBottomBar;
