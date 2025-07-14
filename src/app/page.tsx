
import EssentialTools from "@/components/EssentialTools";
import FAQ from "@/components/faq";
import FEATURE from "@/components/FeaturedCategories";
import FooterSection from "@/components/footer";
import HERO from "@/components/hero";
import PopularGuides from "@/components/PopularGuides";
import Start from "@/components/start";


export default function Home() {
  return (
    <div>
      <HERO />
      <FEATURE />
      <PopularGuides />
      <EssentialTools />
       <Start />
       <FAQ />
       <FooterSection />
      </div>
       );
}
