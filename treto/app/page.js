"use client";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
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
    <TretoLayout header={1}>
      <div className="mil-onepage">
        {/* banner */}
        <Banner bgImage="img/faces/5.jpg" />
        {/* banner end */}
        {/* about */}
        <About />
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
        {/* contacts */}
        <Contact />
        {/* contacts end */}
      </div>
      <Pagination />
    </TretoLayout>
  );
};
export default Index;
