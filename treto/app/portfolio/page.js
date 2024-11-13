import TretoLayout from "@/layout/TretoLayout";
import dynamic from "next/dynamic";
const PortfolioIsotope = dynamic(
  () => import("@/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const page = () => {
  return (
    <TretoLayout noFooter>
      <div>
        <div className="mil-page">
          <div
            className="mil-bg-item"
            style={{ top: "3%", right: "15%", transform: "rotate(-45deg)" }}
          />
          <div className="container">
            <div className="mil-top-banner">
              <p className="mil-upper mil-mb-30">
                Featured <span className="mil-accent">projects</span>
              </p>
              <h2 className="mil-up mil-mb-30">Portfolio</h2>
              <p className="mil-left-offset">
                A Collection of my favorites project I’ve designed recently.{" "}
                <br />
                Feeling great while sharing here.
              </p>
            </div>
          </div>
          <PortfolioIsotope />
        </div>
      </div>
    </TretoLayout>
  );
};
export default page;
