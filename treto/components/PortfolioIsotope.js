"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

const PortfolioIsotope = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [projects, setProjects] = useState([]);

  // Fetch project data from your API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        const data = await response.json();
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error('Fetched data is not an array', data);
          setProjects([]); // Fallback to empty array if data is not an array
        }
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchProjects();
  }, []);

  // Initialize Isotope layout
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".mil-portfolio-grid", {
        itemSelector: ".mil-grid-item",
        percentPosition: true,
        masonry: { columnWidth: ".mil-grid-item" },
        animationOptions: { duration: 750, easing: "linear", queue: false },
      });
    }, 500);
  }, [projects]); // Reinitialize after projects data is loaded

  // Filter items based on selected category
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "mil-current" : "");

  return (
    <Fragment>
      <div className="mil-filter">
        <div className="container">
          <ul className="mil-filter-links mil-mb-30">
             
             
             
            
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="mil-portfolio-grid mil-mb-30">
          <div className="grid-sizer" />
          {projects.map((project) => {
            const projectId = project._id.toString();  // Use the project ID for dynamic routing
            return (
              <div key={projectId} className={`mil-grid-item ${project.category}`}>
                <Link href={`/project/${projectId}`} legacyBehavior>
                  <div className="mil-portfolio-item mil-square-item mil-mb-60">
                    <div className="mil-cover">
                      <img src={`http://localhost:5000${project.images[0]}`} alt={project.title} /> 
                      <div className="mil-hover-link">
                        <i className="fas fa-link" />
                      </div>
                    </div>
                    <div className="mil-project-descr">
                      <p className="mil-upper mil-accent mil-mb-15">{project.category}</p>
                      <h4 className="mil-up">{project.title}</h4> {/* Use the correct project title */}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default PortfolioIsotope;
