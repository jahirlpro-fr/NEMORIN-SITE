<![CDATA[
import { GetServerSideProps } from "next";
import { expertises } from "@/data/expertises";

fu
...
getServerSideProps: GetServerSideProps = async ({ res }) => {
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
]]>

[Tool result trimmed: kept first 100 chars and last 100 chars of 1624 chars.]