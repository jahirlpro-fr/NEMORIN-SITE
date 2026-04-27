"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/shared/Button";

type ConsentType = "all" | "necessary" | "custom" | null;

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [consent, setConsent] = useState<{
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
  }>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookie-consent");
    if (!savedConsent) {
      // Delay banner appearance for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consentData));
    setShowBanner(false);
    // Initialize analytics here if needed
  };

  const handleRejectAll = () => {
    const consentData = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consentData));
    setShowBanner(false);
  };

  const handleCustomSave = () => {
    const consentData = {
      ...consent,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consentData));
    setShowBanner(false);
    setShowCustomize(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gold shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {!showCustomize ? (
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <p className="text-sm text-text leading-relaxed">
                    Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser notre audience. En continuant à naviguer, vous acceptez notre{" "}
                    <Link
                      href="/politique-de-confidentialite"
                      className="text-gold hover:text-gold-light underline"
                    >
                      politique de confidentialité
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    variant="ghost"
                    onClick={handleRejectAll}
                    className="text-sm px-4 py-2"
                  >
                    Refuser
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setShowCustomize(true)}
                    className="text-sm px-4 py-2"
                  >
                    Personnaliser
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleAcceptAll}
                    className="text-sm px-6 py-2"
                  >
                    Accepter tout
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                    Personnaliser les cookies
                  </h3>
                  <p className="text-sm text-text-muted">
                    Choisissez les types de cookies que vous acceptez.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Necessary Cookies */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="necessary"
                      checked={consent.necessary}
                      disabled
                      className="mt-1 w-4 h-4 text-gold focus:ring-gold border-border rounded disabled:opacity-50"
                    />
                    <div className="flex-1">
                      <label htmlFor="necessary" className="text-sm font-medium text-text">
                        Cookies nécessaires
                      </label>
                      <p className="text-xs text-text-muted mt-1">
                        Indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés.
                      </p>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="analytics"
                      checked={consent.analytics}
                      onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                      className="mt-1 w-4 h-4 text-gold focus:ring-gold border-border rounded"
                    />
                    <div className="flex-1">
                      <label htmlFor="analytics" className="text-sm font-medium text-text">
                        Cookies analytiques
                      </label>
                      <p className="text-xs text-text-muted mt-1">
                        Nous aident à comprendre comment vous utilisez le site pour l'améliorer.
                      </p>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="marketing"
                      checked={consent.marketing}
                      onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
                      className="mt-1 w-4 h-4 text-gold focus:ring-gold border-border rounded"
                    />
                    <div className="flex-1">
                      <label htmlFor="marketing" className="text-sm font-medium text-text">
                        Cookies marketing
                      </label>
                      <p className="text-xs text-text-muted mt-1">
                        Utilisés pour afficher des publicités pertinentes selon vos intérêts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    onClick={() => setShowCustomize(false)}
                    className="text-sm px-4 py-2"
                  >
                    Retour
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleCustomSave}
                    className="text-sm px-6 py-2"
                  >
                    Enregistrer mes préférences
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}