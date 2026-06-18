import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Trigger animations when elements enter the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.05 }
    );

    // Give Vite dev server a tiny latency buffer to fully mount components
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".scroll-animate, #education, #certificates, #contact");
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Simple active nav section highlight link update
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "education", "contact"];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Highlight active menu item
              const navLinks = document.querySelectorAll(".nav-item");
              navLinks.forEach((link) => {
                const href = link.getAttribute("href");
                if (href === `#${id}`) {
                  link.classList.add("active");
                } else {
                  link.classList.remove("active");
                }
              });
            }
          });
        },
        {
          rootMargin: "-20% 0px -60% 0px",
          threshold: 0
        }
      );
      
      observer.observe(el);
      observers.push({ observer, el });
    });

    return () => {
      observers.forEach(({ observer, el }) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Sticky Header / Navigation */}
      <Navbar />

      {/* Hero Header typing intro section */}
      <Hero />

      {/* About terminal JSON info section */}
      <About />

      {/* Technical skills node map visualization section */}
      <Skills />

      {/* Featured Projects catalog section */}
      <Projects />

      {/* Education timeline section */}
      <Education />

      

      {/* Connect & mail form section */}
      <Contact />

      {/* Copyright footer segment */}
      <Footer />
    </div>
  );
}
