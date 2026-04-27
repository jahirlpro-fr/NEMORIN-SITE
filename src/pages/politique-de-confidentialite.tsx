import { SEO } from "@/components/SEO";

export default function PolitiqueConfidentialite() {
  return (
    <>
      <SEO 
        title="Politique de Confidentialité — Cabinet Maître NEMORIN" 
        description="Politique de confidentialité et protection des données personnelles du cabinet de Maître Stéphanie NEMORIN."
      />
      <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-navy mb-8">Politique de Confidentialité</h1>
        
        <div className="space-y-8 text-dm-sans text-navy/80">
          <section>
            <h2 className="font-serif text-2xl text-navy mb-4">1. Données collectées</h2>
            <p>
              Dans le cadre de son activité, Maître Stéphanie NEMORIN est amenée à collecter et traiter des données à caractère personnel vous concernant. Les données collectées via le formulaire de contact incluent : nom, prénom, adresse email, numéro de téléphone (optionnel), et les informations contenues dans votre message.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy mb-4">2. Finalités et base légale du traitement</h2>
            <p>
              Les données sont collectées pour :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Traiter vos demandes de contact et vous répondre</li>
              <li>La gestion des dossiers clients (le cas échéant)</li>
              <li>L'envoi de lettres d'information (uniquement avec votre consentement explicite)</li>
            </ul>
            <p className="mt-4">
              La base légale de ces traitements est l'intérêt légitime du cabinet pour les demandes de contact, l'exécution de mesures précontractuelles ou contractuelles pour la gestion des dossiers, et le consentement pour la newsletter.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy mb-4">3. Durée de conservation</h2>
            <p>
              Les données liées aux demandes de contact n'ayant pas abouti à l'ouverture d'un dossier sont conservées pendant un délai maximum de 3 ans. Les données liées aux dossiers clients sont conservées pendant la durée de la relation contractuelle augmentée des délais de prescription légale applicables.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy mb-4">4. Droits des utilisateurs</h2>
            <p>
              Conformément à la réglementation applicable (RGPD), vous disposez d'un droit d'accès, de rectification, de portabilité, d'effacement de vos données personnelles, ainsi que d'un droit à la limitation et d'opposition à leur traitement.
              <br /><br />
              Pour exercer ces droits, vous pouvez contacter le cabinet à l'adresse email : contact@nemorin-avocat.fr.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}