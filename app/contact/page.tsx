import Navbar from "@/components/Navbar";


export default function Contact() {
  return (
    <main>
      <Navbar />

      {/* CONTACT HERO */}
      <section className="destination-hero">
        <div className="destination-hero-overlay">
          <div className="container destination-hero-content">
            <p>GET IN TOUCH</p>

            <h1>Contact Us</h1>

            <span>
              Have a question or need help planning your next trip?
              We would love to hear from you.
            </span>

          
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <p className="contact-subtitle">CONTACT US</p>

            <h2>Let&apos;s Talk About Your Next Journey</h2>

            <p>
              Whether you have a question about our destinations,
              travel packages, or anything else, feel free to reach
              out to us.
            </p>

            <div className="contact-details">
              <div>
                <h3>Email</h3>
                <p>info@traversal.com</p>
              </div>

              <div>
                <h3>Phone</h3>
                <p>+234 800 000 0000</p>
              </div>

              <div>
                <h3>Location</h3>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>

              <input
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                id="subject"
                type="text"
                placeholder="Enter subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                rows={6}
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
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