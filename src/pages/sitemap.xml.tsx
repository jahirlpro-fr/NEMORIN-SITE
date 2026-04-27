import { GetServerSideProps } from "next";
import { expertises } from "@/data/expertises";
import { siteConfig } from "@/data/siteConfig";

function generateSitemap() {
  const baseUrl = siteConfig.url;
  
  // Static pages
  const staticPages = [
    "",
    "/a-propos",
    "/expertises",
    "/cabinet",
    "/contact",
    "/mentions-legales",
    "/politique-de-confidentialite",
    "/politique-cookies"
  ];

  // Dynamic pages
  const dynamicPages = expertises.map(exp => `/expertises/${exp.slug}`);

  const allPages = [...staticPages, ...dynamicPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${allPages
       .map((url) => {
         return `
       <url>
           <loc>${baseUrl}${url}</loc>
           <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>${url === "" ? "1.0" : "0.8"}</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSitemap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}