"use client";
import { About2 } from "@/components/About";
import { Banner2 } from "@/components/Banner";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Pagination from "@/layout/Pagination";
import TretoLayout from "@/layout/TretoLayout";
import { onepage } from "@/utility/onepage";
import { useEffect } from "react";
const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("mil-custom-scroll");
    onepage();
  }, []);

  return (
    <TretoLayout header={2} footer={2}>
      <Pagination direction={"left"} />
      <div className="mil-onepage">
        {/* banner */}
        <Banner2 />
        {/* banner end */}
        {/* about */}
        <About2 />
        {/* about end */}
        {/* skills */}
        <Skills />
        {/* skills end */}
        {/* education */}
        <Education />
        {/* education end */}
        {/* experience */}
        <Experience />
        {/* experience end */}
        {/* services */}
        <Services />
        {/* services end */}
        {/* reviews */}
        <Reviews />
        {/* reviews end */}
        {/* contacts */}
        <Contact />
        {/* contacts end */}
      </div>
    </TretoLayout>
  );
};
export default Index;
