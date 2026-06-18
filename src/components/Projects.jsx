import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header scroll-animate">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project, idx) => (
          <div
            key={project._id}
            className="project-card scroll-animate"
            style={{ transitionDelay: `${idx * 0.12}s` }}
          >
            {/* Project Header Image */}
            <div className="project-header">
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                <img src={project.imageUrl} alt={project.title} />
              </a>
            </div>

            {/* Project Details */}
            <div className="project-content" style={{ textAlign: "left" }}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              {/* Actions */}
              <div className="project-actions">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project demo"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square" /> Live Demo
                </a>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
