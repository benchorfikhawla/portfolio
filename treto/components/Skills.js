import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  // Fetch skills data from the backend
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/skills");
        const data = await response.json();
        if (Array.isArray(data)) {
          setSkills(data); // Set the fetched skills data to the state
        }// Set the fetched skills data to the state
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="mil-section mil-op-space-90">
      <div className="mil-bg-item" style={{ bottom: "15%", left: "7%" }} />
      <div
        className="mil-bg-item mil-bg-item-large"
        style={{ top: "-15%", right: "25%", transform: "rotate(-35deg)" }}
      />
      <div className="container">
        <div>
          <p className="mil-upper mil-mb-30">
            My great <span className="mil-accent">work</span>
          </p>
          <h2 className="mil-up mil-mb-60">Ability or Skill</h2>
        </div>
        <div className="row">
          <div className="col-xl-2" />
          <div className="col-xl-10">
            <div className="row">
              {skills.map((skill) => (
                <div key={skill._id} className="col-xl-6 mil-mb-40">
                  <div className="mil-text-row">
                    <div className="mil-icon-box">
                      <div className="mil-text-icon no-textured">
                        <i className={`fab ${skill.icon}`} />
                      </div>
                    </div>
                    <div className="mil-progress-inline">
                      <span className="mil-upper">{skill.name}</span>
                      <div className="mil-progress-track">
                        <div
                          className="mil-progress"
                          style={{ width: `${skill.level}%` }}
                        >
                          <span className="mil-upper mil-upper-sm mil-accent">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
