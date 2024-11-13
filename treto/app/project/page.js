import TretoLayout from "@/layout/TretoLayout";
import dynamic from "next/dynamic";
const ProjectDetailsIsotope = dynamic(
  () => import("@/components/ProjectDetailsIsotope"),
  {
    ssr: false,
  }
);
const page = () => {
  return (
    <TretoLayout noFooter>
      <div>
        <div className="mil-page">
          <div className="container">
            <div className="mil-top-banner mil-text-center">
              <p className="mil-upper mil-mb-30">
                <span className="mil-accent">Full Stack Developer</span>
              </p>
              <h2 className="mil-up mil-mb-60">Khawla Ben chorfi</h2>
              <p>
              "My projects reflect a blend of front-end and back-end development, with a strong focus on user experience and efficient solutions,
               incorporating React.js, Node.js, and full-stack development to meet both technical and organizational needs."{" "}
              </p>
            </div>
            <div className="mil-project mil-mb-60">
              <div className="mil-divider" />
              <div className="row justify-content-between mil-mb-60">
                <div className="col-lg-8">
                  <div className="mil-mb-60" />
                  <p className="mil-mb-30">
                  Fisatex is an eCommerce platform dedicated to offering high-quality Moroccan cosmetic products. The site provides a seamless shopping experience, 
                  allowing customers to browse and purchase a wide range of skincare and beauty products, all sourced directly from Morocco, ensuring authenticity and natural ingredients
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="mil-timeline-nav">
                    <div className="mil-mb-30">
                      <p className="mil-upper mil-mb-10">Date:</p>
                      <p className="mil-text-sm">17 May 2020</p>
                    </div>
                    <div className="mil-mb-30">
                      <p className="mil-upper mil-mb-10">Client Name:</p>
                      <p className="mil-text-sm">TRETO - Creative Agency</p>
                    </div>
                  </div>
                </div>
              </div>
              <ProjectDetailsIsotope />
              <div className="row">
                <div className="col-lg-12">
                  <h3 className="mil-up mil-mb-30">more details</h3>
                </div>
                <div className="col-lg-6">
                  <p>
                  The project is structured around two main roles: the admin and the user. 
                  The admin role is responsible for managing the entire product catalog, 
                  including adding new products, editing existing ones, and handling orders.
                  Admins also have full control over the inventory, ensuring product availability and accurate order management.
                  This role is essential for maintaining the functionality and smooth operation of the platform.
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                  The user role, on the other hand, focuses on browsing and interacting with the available products. 
                  Users can easily filter through the product catalog based on their preferences and view detailed descriptions, images, and prices. 
                  Once they've selected their desired products, users can place orders securely and track their purchase history. 
                  This two-tier system ensures a well-organized platform, allowing both admins and users to have a streamlined and effective experience when managing and purchasing Moroccan cosmetic products.
                  </p>
                </div>
              </div>
            </div>
            <div className="mil-pagination-panel">
              <a href="#" className="mil-button mil-type-2 mil-mb-30">
                Previous Project
              </a>
              <a href="#" className="mil-button mil-mb-30">
                Next Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </TretoLayout>
  );
};
export default page;
