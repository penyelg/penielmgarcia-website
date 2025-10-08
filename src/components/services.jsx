import "../App.css"

export default function Services() {
  return (
    <div id="services">
      <main className="page services-page">
        <section className="page-hero">
          <div className="page-hero__content">
            <p className="eyebrow">What I Offer</p>
            <h1>Services Tailored for Your Success</h1>
            <p className="intro">
              From concept to launch, I help ideas take shape through clean design, solid engineering, and compelling storytelling.
            </p>
          </div>
        </section>

        <section className="services-grid" aria-label="Service offerings">
          <article className="service-card">
            <div className="service-card__icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <h2>Web Development</h2>
            <p>
              Responsive, high-performance websites built with modern technologies to keep your brand ahead of the curve.
            </p>
            <ul className="service-card__list">
              <li>Custom landing pages</li>
              <li>Progressive web apps</li>
              <li>Maintenance & optimization</li>
            </ul>
          </article>

          <article className="service-card">
            <div className="service-card__icon">
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
            <h2>App Development</h2>
            <p>
              User-centered mobile experiences crafted for seamless performance across iOS and Android devices.
            </p>
            <ul className="service-card__list">
              <li>Cross-platform builds</li>
              <li>Prototype to production</li>
              <li>App store deployment</li>
            </ul>
          </article>

          <article className="service-card">
            <div className="service-card__icon">
              <i className="fa-solid fa-camera-retro"></i>
            </div>
            <h2>Photography & Editing</h2>
            <p>
              Capture and enhance the moments that matter with professional-grade shoots and post-production polish.
            </p>
            <ul className="service-card__list">
              <li>Portrait & lifestyle sessions</li>
              <li>Brand storytelling</li>
              <li>Advanced retouching</li>
            </ul>
          </article>

          <article className="service-card">
            <div className="service-card__icon">
              <i className="fa-solid fa-chalkboard-user"></i>
            </div>
            <h2>Tech Mentorship</h2>
            <p>
              Guidance for students and junior developers through structured learning paths, code reviews, and career coaching.
            </p>
            <ul className="service-card__list">
              <li>Portfolio reviews</li>
              <li>Hands-on workshops</li>
              <li>Interview preparation</li>
            </ul>
          </article>
        </section>

        <section className="cta-band">
          <div className="cta-band__content">
            <h2>Ready to Start a Project?</h2>
            <p>Let’s collaborate to build something extraordinary. I’m just a message away.</p>
            <a className="btn" href="mailto:hello@peniel.dev">
              Let’s Talk
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}