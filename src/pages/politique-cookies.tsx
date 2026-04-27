import { SEO } from "@/components/SEO";

export default function PolitiqueCookies() {
  return (
    <>
      <SEO 
        title="Politique des Cookies — Cabinet Maître NEMORIN" 
        description="Politique de gestion des cookies du site de Maître Stéphanie NEMORIN."
      />
      <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-navy mb-8">Politique des Cookies</h1>
        
        <div className="space-y-8 text-dm-sans text-navy/80">
          <section>
            <h2 className="font-serif text-2xl text-navy mb-4">1. Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou mobile) lors de la visite d'un site internet. Il permet de conserver des données utilisateur afin de faciliter la navigation et de permettre certaines fonctionnalités.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy mb-4">2. Les cookies que nous utilisons</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-navy">Cookies strictement nécessaires</h3>
                <p>Ces cookies sont indispensables au bon fonctionnement du site (ex: mémorisation de vos préférences en matière de cookies). Ils ne peuvent pas être désactivés.</p>
              </div>
              
              <div>
                <h3 className="font-bold text-navy">Cookies analytiques</h3>
                <p>Ces cookies nous permettent de connaître l'utilisation et les performances de notre site, d'en améliorer le fonctionnement (par exemple, les pages le plus souvent consultées).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy mb-4">3. Durée de conservation</h2>
            <p>
              Les cookies sont conservés pour une durée maximale de 13 mois conformément aux recommandations de la CNIL. Vos choix concernant les cookies sont conservés pendant 6 mois.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy mb-4">4. Gestion des cookies</h2>
            <p>
              Vous pouvez à tout moment modifier vos préférences en matière de cookies via le bandeau de gestion des cookies accessible en bas de page, ou en paramétrant votre navigateur.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}