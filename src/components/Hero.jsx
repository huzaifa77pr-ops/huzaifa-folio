import { useState, useEffect } from "react";
import { HERO_TITLES, HERO_DESCRIPTIONS } from "../data/portfolioData";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [typingSpeed, setTypingSpeed] = useState(150);

  const currentTitleIndex = index % HERO_TITLES.length;

  useEffect(() => {
    const handleTyping = setTimeout(() => {
      const currentTitle = HERO_TITLES[index % HERO_TITLES.length];
      
      if (isDeleting) {
        setText(currentTitle.substring(0, text.length - 1));
        setTypingSpeed(45);
        if (text === "") {
          setIsDeleting(false);
          setIndex(index + 1);
          setTypingSpeed(250);
        }
      } else {
        setText(currentTitle.substring(0, text.length + 1));
        setTypingSpeed(100);
        if (text === currentTitle) {
          setIsDeleting(true);
          setTypingSpeed(2500); // Wait 2.5s before deleting
        }
      }
    }, typingSpeed);

    return () => clearTimeout(handleTyping);
  }, [text, isDeleting, index, typingSpeed]);

  return (
    <section
      id="home"
      className="hero-section animate-fade-in"
    >
      <div className="hero-container">
        {/* Left Text details */}
        <div className="hero-content animate-slide-in-left">
          <span className="hero-badge">Welcome to my Portfolio</span>
          <h1 className="hero-title">
            {text}
            <span className="typing-cursor">|</span>
          </h1>
          <p className="hero-desc">{HERO_DESCRIPTIONS[currentTitleIndex]}</p>
          <div className="hero-btns">
            <a href="#projects" className="hero-btn-outline">
              VIEW MY WORK
            </a>
            <a
              href="/pdf/Muhammad_Huzaifa_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-solid"
            >
              MY RESUME
            </a>
          </div>
        </div>

        {/* Right side floating image details */}
        <div className="hero-image-wrapper animate-fade-in-right">
          <div className="glowing-ring" />
          <div className="image-card">
            <img
              src="right.jpg"
              alt="Huzaifa"
              className="hero-profile-pic"
            />
          </div>
        </div>
      </div>

      {/* SVG Wave Divider at the bottom */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
            fill="#001219"
          />
        </svg>
      </div>
    </section>
  );
}
