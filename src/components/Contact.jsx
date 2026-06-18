import { PROFILE } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-header scroll-animate">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Open to opportunities, collaborations, or just a friendly hello.
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Info Panels */}
        <div className="connect-wrapper">
          <a
            href={PROFILE.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="connect-item scroll-animate"
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="connect-icon whatsapp">
              <i className="fa-brands fa-whatsapp" />
            </span>
            <div className="connect-details">
              <span className="connect-label">WhatsApp</span>
              <span className="connect-text">03140407955</span>
            </div>
          </a>

          <a
            href={PROFILE.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="connect-item scroll-animate"
            style={{ transitionDelay: "0.2s" }}
          >
            <span className="connect-icon linkedin">
              <i className="fa-brands fa-linkedin-in" />
            </span>
            <div className="connect-details">
              <span className="connect-label">LinkedIn</span>
              <span className="connect-text">huzaifa-dev</span>
            </div>
          </a>

          <a
            href={`mailto:${PROFILE.contact.email}`}
            className="connect-item scroll-animate"
            style={{ transitionDelay: "0.3s" }}
          >
            <span className="connect-icon email">
              <i className="fa-solid fa-envelope" />
            </span>
            <div className="connect-details">
              <span className="connect-label">Email</span>
              <span className="connect-text">{PROFILE.contact.email}</span>
            </div>
          </a>

          <div
            className="connect-item cursor-default scroll-animate"
            style={{ transitionDelay: "0.4s" }}
          >
            <span className="connect-icon location">
              <i className="fa-solid fa-location-dot" />
            </span>
            <div className="connect-details">
              <span className="connect-label">Location</span>
              <span className="connect-text">{PROFILE.contact.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
