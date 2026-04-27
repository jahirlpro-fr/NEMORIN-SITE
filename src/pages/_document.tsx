import { Html, Head, Main, NextScript } from "next/document";
import { SEOElements } from "@/components/SEO";
import { siteConfig } from "@/data/siteConfig";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <SEOElements
          title={siteConfig.name}
          description={siteConfig.description}
          image={`${siteConfig.url}/og-image.png`}
          url={siteConfig.url}
        />
      </Head>
      <body className="antialiased bg-bg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}