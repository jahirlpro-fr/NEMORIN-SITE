import { SEO } from "@/components/SEO";

export default function MentionsLegales() {
  return (
    <>
      <SEO 
        title="Mentions Légales — Cabinet Maître NEMORIN" 
        description="Mentions légales du site internet du cabinet de Maître Stéphanie NEMORIN, Avocate au Barreau de Paris."
      />
      <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-navy mb-8">Mentions Légales</h1>
        
        <div className="space-y-8 text-dm-sans text-navy/80">
          <section>
            <h2 className="font-serif text-2xl text-navy mb-4">1. Éditeur du site</h2>
            <p>
              Le présent site est édité par :<br />
              <strong>Maître Stéphanie NEMORIN</strong><br />
              Avocate au Barreau de Paris (Toque : E1119)<br />
              Adresse : 75116 Paris<br />
              Email : contact@nemorin-avocat.fr
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy mb-4">2. Hébergement</h2>
            <p>
              Le site est hébergé par :<br />
              <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy mb-4">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés. La reproduction de tout ou partie de ce site sur un support électronique ou papier quel qu'il soit est formellement interdite sauf autorisation expresse de Maître Stéphanie NEMORIN.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy mb-4">4. Responsabilité</h2>
            <p>
              Maître Stéphanie NEMORIN s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, elle décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}