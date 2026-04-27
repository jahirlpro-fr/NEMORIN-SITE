import type { AppProps } from "next/app";
import { Cormorant_Garamond, Playfair_Display, DM_Sans, Montserrat } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { ScrollProgressBar } from "@/components/shared/ScrollProgressBar";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import "@/styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-display",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-label",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${cormorant.variable} ${playfair.variable} ${dmSans.variable} ${montserrat.variable}`}>
          <SchemaMarkup />
          <ScrollProgressBar />
          <CustomCursor />
          <Header />
      <main className="min-h-screen pt-20">
        <Component {...pageProps} />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}