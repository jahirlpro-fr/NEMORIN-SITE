import Link from "next/link";
import { Linkedin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { expertises } from "@/data/expertises";
import { footerLinks } from "@/data/navigation";
import { GoldDivider } from "@/components/shared/GoldDivider";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <GoldDivider />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo + Tagline */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-display text-3xl font-semibold text-gold">
                NEMORIN
              </span>
              <span className="label-caps text-[0.65rem] text-gold-light opacity-80">
                Avocate au Barreau de Paris
              </span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Votre avocate d'affaires à Paris — Rigueur, Discrétion, Expertise
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10">
              <h5 className="text-xs font-label uppercase tracking-wider text-gold-light mb-2">
                Mentions légales
              </h5>
              <ul className="space-y-1">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/60 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">
              Domaines d'Expertise
            </h4>
            <ul className="space-y-2">
              {expertises.map((expertise) => (
                <li key={expertise.slug}>
                  <Link
                    href={`/expertises/${expertise.slug}`}
                    className="text-sm text-white/80 hover:text-gold transition-colors"
                  >
                    {expertise.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <p className="font-medium text-white">Adresse</p>
                <p>Paris {siteConfig.contact.address.postalCode}</p>
                <p>{siteConfig.contact.address.city}</p>
              </li>
              <li>
                <p className="font-medium text-white">Email</p>
                <Link
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {siteConfig.contact.email}
                </Link>
              </li>
              <li>
                <p className="font-medium text-white">Téléphone</p>
                <Link
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-gold transition-colors"
                >
                  {siteConfig.contact.phone}
                </Link>
              </li>
              <li>
                <p className="font-medium text-white">Horaires</p>
                <p className="text-xs">{siteConfig.contact.hours}</p>
              </li>
              <li className="pt-2">
                <p className="text-xs text-gold-light">
                  ✓ Réponse sous 48h ouvrées
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <p>
              © {currentYear} {siteConfig.legalName} — {siteConfig.title}
            </p>
            <p className="label-caps">
              Numéro de toque {siteConfig.bar.number} — {siteConfig.bar.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}