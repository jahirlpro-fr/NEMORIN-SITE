"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { Button } from "@/components/shared/Button";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState < string | null > (null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
<header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-md" : "bg-bg/95 backdrop-blur-sm shadow-sm"
    }`}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col group">
            <span className="font-display text-2xl font-semibold text-gold">
              NEMORIN
            </span>
            <span className={`label-caps text-[0.65rem] transition-colors ${
              isScrolled ? "text-gold-light opacity-80" : "text-primary opacity-70"
            }`}>
              Avocate au Barreau de Paris
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {mainNavigation.map((link) => (
                <div
                    key={link.href}
                    className="relative"
                >
                    {link.subLinks ? (
                        <button
                            onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                            className={`font-body text-sm font-medium transition-colors flex items-center gap-1 ${isScrolled ? "text-white hover:text-gold" : "text-primary hover:text-gold"
                                }`}
                        >
                            {link.label}
                            <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                        </button>
                    ) : (
                        <Link
                            href={link.href}
                            className={`font-body text-sm font-medium transition-colors ${isScrolled ? "text-white hover:text-gold" : "text-primary hover:text-gold"
                                }`}
                        >
                            {link.label}
                        </Link>
                    )}
                {link.subLinks && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border border-border py-2 z-50">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="block px-4 py-2 text-sm text-primary hover:text-gold hover:bg-bg-alt transition-colors"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

<div className="hidden lg:flex items-center gap-3">
            
                        <Link href="tel:+33671610623" className={`hidden xl:flex items-center gap-2 font-body text-sm font-medium transition-colors hover:text-gold ${isScrolled ? "text-white" : "text-primary"}`}>
                            <Phone className="w-4 h-4" strokeWidth={1.5} />
                            06 71 61 06 23
                        </Link>
            <Button href="/contact" variant="primary">
              Prendre RDV
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gold hover:text-gold-light transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-primary/95 backdrop-blur-sm lg:hidden"
              style={{ top: "80px" }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-20 bottom-0 w-80 bg-primary shadow-2xl lg:hidden overflow-y-auto"
            >
              <nav className="flex flex-col p-6 gap-4">
                {mainNavigation.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-white hover:text-gold transition-colors font-medium border-b border-white/10"
                    >
                      {link.label}
                    </Link>
                    {link.subLinks && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-sm text-gold-light hover:text-gold transition-colors"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                                <Link href="tel:+33671610623" className="flex items-center gap-2 py-3 text-white hover:text-gold transition-colors font-medium border-b border-white/10">
                                    <Phone className="w-4 h-4" strokeWidth={1.5} />
                                    06 71 61 06 23
                                </Link>
                                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                    <span className="text-xs text-gold-light">Langues :</span>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gold">FR</span>
                    <span className="text-gold-light/40">|</span>
                    <span className="text-gold-light/60">EN</span>
                    <span className="text-gold-light/40">|</span>
                    <span className="text-gold-light/60">ES</span>
                  </div>
                </div>
                <Button
                  href="/contact"
                  variant="primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 w-full justify-center"
                >
                  Prendre RDV
                </Button>
              </nav>
            </motion.div>
          </>
    )
}
      </AnimatePresence >
    </header >
  );
}