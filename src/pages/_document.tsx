import { Html, Head, Main, NextScript } from "next/document";
import { SEOElements } from "@/components/SEO";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <SEOElements
          title="Maître Stéphanie NEMORIN — Avocate au Barreau de Paris"
          description="Avocate au Barreau de Paris spécialisée en droit des affaires, droit pénal des affaires et droit des sociétés. Cabinet à Paris 16ème, accompagnement en français, anglais et espagnol."
          image="/og-image.png"
          url="https://nemorin-avocat.fr"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}