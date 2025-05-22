import BestInterior from "@/components/BestInterior";
import Description from "@/components/Description";
// import CatalogueSwiper from "@/components/CatalogueSwiper";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import RightAlignedInterior from "@/components/RightAlignedInterior";
import ZoomParallax from "@/components/ZoomParallax";

export default function Home() {
  return (
    <div>
      <Hero />
      <ZoomParallax />
      <BestInterior />
      <RightAlignedInterior/>
      <Description />
      <Projects />
      {/* <CatalogueSwiper /> */}
    </div>
  );
}
