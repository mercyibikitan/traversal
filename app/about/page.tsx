import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main>
      <Navbar />

      <section className="destination-hero">
        <div className="destination-hero-overlay">
          <div className="container destination-hero-content">
            <p>ABOUT US</p>

            <h1>About Traversal</h1>

            <span>
              Discover our passion for travel and creating
              unforgettable experiences around the world.
            </span>
          </div>
        </div>
      </section>

      <section className="destinations-section">
        <div className="container">
          <div className="section-heading">
            <p>WHO WE ARE</p>

            <h2>Travel. Explore. Discover.</h2>

            <span>
              At Traversal, we believe every journey should be
              memorable.
            </span>
          </div>

          <div className="container">
            <p>
              We help travelers discover beautiful destinations,
              explore new cultures, and create unforgettable
              experiences around the world.
            </p>

            <p>
              Whether you are planning a relaxing getaway or an
              exciting adventure, Traversal is here to help you make
              the most of your journey.
            </p>

            <div className="center-button">
              <a href="/destinations" className="primary-btn">
                Explore Destinations
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>Traversal</h2>

            <p>
              Explore beautiful destinations and create unforgettable
              travel experiences around the world.
            </p>
          </div>

          <nav className="footer-nav">
            <a href="/">Home</a>
            <a href="/destinations">Destinations</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="#">Packages</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
          </nav>

          <div className="footer-contact">
            <h3>Contact Us</h3>

            <p>info@traversal.com</p>
            <p>+234 800 000 0000</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Traversal.by merbikscodes.
          </p>
        </div>
      </footer>
    </main>
  );
}
