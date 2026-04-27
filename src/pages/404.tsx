import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/shared/Button";
import { SEO } from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page non trouvée | Maître Stéphanie NEMORIN" />
      <div className="min-h-screen bg-navy flex items-center justify-center px-4 relative overflow-hidden">
        {/* Subtle background noise texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-8xl md:text-9xl text-gold mb-6"
          >
            404
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-3xl md:text-4xl text-white mb-6"
          >
            Cette page n'existe pas
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 text-lg mb-10 max-w-md mx-auto"
          >
            Il semble que le lien que vous avez suivi soit rompu ou que la page ait été déplacée.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/">
              <Button variant="primary">Retour à l'accueil</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" className="border-white/20 text-white hover:bg-white hover:text-navy">Nous contacter</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}