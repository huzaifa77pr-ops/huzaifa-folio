import { PROFILE } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="footer-professional">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="logo-container" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className="logo-icon">
              <i className="fa-solid fa-code"></i>
            </span>
            <div className="logo-text">
              {PROFILE.name}
              <span className="logo-sub">{PROFILE.role}</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(PROFILE.contact.location)}`}
            target="_blank"
            rel="noopener noreferrer"
            title={PROFILE.contact.location}
          >
            <i className="fa-solid fa-location-dot" />
          </a>
          <a
            href={PROFILE.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <i className="fa-brands fa-whatsapp" />
          </a>
          <a
            href={PROFILE.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in" />
          </a>
          <a href={`mailto:${PROFILE.contact.email}`} title="Email">
            <i className="fa-solid fa-envelope" />
          </a>
        </div>
      </div>
    </footer>
  );
}
