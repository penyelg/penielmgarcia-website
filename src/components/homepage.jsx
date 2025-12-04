import { useState, useRef, useEffect } from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "../App.css"

// Import images
import optimizedImage from '../assets/nyel-optimized.jpg';
import fallbackImage from '../assets/nyel.jpg';

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("nav-open");
  };

  const handleNavClick = (event, selector) => {
    if (selector) {
      const section = document.querySelector(selector);
      if (section) {
        event.preventDefault();
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    if (isOpen) {
      closeMenu();
    }
  };

  return (
    <div>
      {/* Header / Navbar */}
      <header className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={(event) => handleNavClick(event, "#home")}
        >
          Peniel
        </a>

        <button
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span className="menu-icon"></span>
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${isOpen ? "open" : ""}`}
        >
          <a
            href="#home"
            className="active"
            onClick={(event) => handleNavClick(event, "#home")}
          >
            Home
          </a>
          <a
            href="#services"
            onClick={(event) => handleNavClick(event, "#services")}
          >
            Services
          </a>
          <a href="#" onClick={isOpen ? closeMenu : undefined}>Skills</a>
          <a href="#" onClick={isOpen ? closeMenu : undefined}>Education</a>
          <a href="#" onClick={isOpen ? closeMenu : undefined}>Experience</a>
          <a href="#" onClick={isOpen ? closeMenu : undefined}>Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="home-img">
          <picture>
            <source
              srcSet={optimizedImage}
              type="image/jpg"
            />
            <img
              src={fallbackImage}
              alt="Peniel Garcia"
              className="hero-image"
              width="400"
              height="500"
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '400px',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 0 15px 5px hsl(38, 87%, 69%)',
                transition: 'box-shadow 0.3s ease-in-out',
                position: 'relative',
                zIndex: 1
              }}
            />
          </picture>
        </div>

        <div className="home-content">
          <h1>
            Hi, It's <span>Peniel</span>
          </h1>
          <h3 className="typing-text">
            <span></span>
          </h3>
          <p>
            I’m a passionate and dedicated developer focused on creating clean, efficient, and user-friendly digital experiences. 
            I enjoy solving real-world problems through code and continuously improving my skills to bring ideas to life. 
            Whether it’s building modern web interfaces or crafting smooth user journeys, I aim to deliver work that is both 
            functional and visually engaging.
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>

          <a href="#" className="btn" onClick={isOpen ? closeMenu : undefined}>
            Hire me
          </a>
        </div>
      </section>
    </div>
  );
}