import { Shield, Calendar, Globe, MapPin } from "lucide-react";

const badges = [
  { icon: Shield, text: "Barreau de Paris" },
  { icon: Calendar, text: "Inscrite depuis 2019" },
  { icon: Globe, text: "Français · English · Español" },
  { icon: MapPin, text: "Paris — 16ème" },
];

export function TrustBadges() {
  return (
    <section className="bg-bg-alt border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="flex items-center gap-12">
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  <span className="font-label font-light text-sm text-text">
                    {badge.text}
                  </span>
                </div>
                {index < badges.length - 1 && (
                  <div className="hidden md:block w-1 h-1 rotate-45 bg-gold opacity-50" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}