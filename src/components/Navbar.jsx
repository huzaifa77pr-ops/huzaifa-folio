import { useState, useEffect } from "react";
import { PROFILE } from "../data/portfolioData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        {/* Top Info Bar (Socials + Contact) */}
        <div className="header-top-right">
          <div className="social-icons">
            <a
              href={PROFILE.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href={PROFILE.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href={`mailto:${PROFILE.contact.email}`} title="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
          <a href="#contact" className="btn-contact-top">
            CONTACT US
          </a>
        </div>

        {/* Main Blue Nav Band */}
        <div className="nav-blue-band">
          <div className="logo-section">
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

          {/* Desktop Navigation Links */}
          <ul className="nav-menu">
            <li>
              <a href="#home" className="nav-item">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="nav-item">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-item">
                SKILLS
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-item">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#education" className="nav-item">
                EDUCATION
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-item">
                CONTACT
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Icon */}
          <div className="mobile-burger" onClick={() => setMenuOpen((s) => !s)}>
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="mobile-drawer-nav">
          <a href="#home" onClick={() => setMenuOpen(false)} className="drawer-item">
            HOME
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="drawer-item">
            ABOUT
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="drawer-item">
            SKILLS
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="drawer-item">
            PROJECTS
          </a>
          <a href="#education" onClick={() => setMenuOpen(false)} className="drawer-item">
            EDUCATION
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="drawer-item">
            CONTACT
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="drawer-item-btn">
            CONTACT US
          </a>
        </div>
      )}
    </header>
  );
}
