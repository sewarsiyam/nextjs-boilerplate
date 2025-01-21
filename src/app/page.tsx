import AboutSection from "@/components/Home/AboutSection";
import HeroSection from "@/components/Home/HeroSection";
import ServicesSection from "@/components/Home/ServicesSection";
import WorksSection from "@/components/Home/WorksSection";
// import PackagesSection from "@/components/Home/PackagesSection";

// import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden">
        <HeroSection />
      </section>

      <section className="mt-16 overflow-hidden" id="about">
        <AboutSection />
      </section>

      <section className="pt-16 pb-16 overflow-hidden" id="services">
        <ServicesSection />
      </section>
      <section className="pt-16 overflow-hidden" id="works">
        <WorksSection />
      </section>
      
{/* 
      <section className="pt-16 overflow-hidden" id="packages">
        <PackagesSection />
      </section> */}

    </>
  );
}




