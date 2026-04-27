import Script from "next/script";
import { siteConfig } from "@/data/siteConfig";

export function SchemaMarkup() {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": siteConfig.name,
    "image": `${siteConfig.url}/og-image.png`,
    "@id": siteConfig.url,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "postalCode": siteConfig.contact.address.postalCode,
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.8712073,
      "longitude": 2.2893127
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Stéphanie NEMORIN",
    "jobTitle": "Avocate au Barreau de Paris",
    "url": siteConfig.url,
    "worksFor": {
      "@type": "LegalService",
      "name": siteConfig.name
    }
  };

  return (
    <>
      <Script id="legal-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      <Script id="person-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    </>
  );
}