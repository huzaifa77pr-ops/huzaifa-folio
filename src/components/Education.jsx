import { useState, useEffect, useRef } from "react";
import { EDUCATION } from "../data/portfolioData";

export default function Education() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="education"
      className={inView ? "in-view" : ""}
      ref={sectionRef}
    >
      <div className="section-header">
        <span className="section-label">Academic Background</span>
        <h2 className="section-title">Education</h2>
      </div>

      <div className="timeline-container">
        {EDUCATION.map((edu, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={edu.id}
              className={`timeline-item ${isLeft ? "left" : "right"}`}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-date">{edu.period}</span>
                <h3 className="timeline-degree">{edu.degree}</h3>
                
                {/* GPA & Status pills */}
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.6rem" }}>
                  <span className="timeline-status">{edu.status}</span>
                  <span className="timeline-gpa">{edu.gpa}</span>
                </div>
                
                <p className="timeline-inst">{edu.inst}</p>
                
                {/* Timeline Tag badges */}
                <div className="timeline-tags">
                  {edu.tags.map((tag, tagIdx) => (
                    <span className="timeline-tag" key={tagIdx}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
