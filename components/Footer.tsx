import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import DateSearch from "@/components/DateSearch";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";

export default function Home() {
    return (
        <main>
            <Navbar />

            <HeroCarousel />

            <DateSearch />

            {/* POPULAR DESTINATIONS */}
            <section className="destinations-section">
                <div className="container">
                    <div className="section-heading">
                        <p>TRAVEL WITH US</p>

                        <h2>Popular Destinations</h2>

                        <span>
                            Explore some of the most beautiful destinations around
                            the world.
                        </span>
                    </div>

                    <div className="destination-grid">
                        {destinations.slice(0, 6).map((destination) => (
                            <DestinationCard
                                key={destination.id}
                                destination={destination}
                            />
                        ))}
                    </div>

                    <div className="center-button">
                        <a href="/destinations" className="primary-btn">
                            View All Destinations
                        </a>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="stats-section">
                <div className="container stats-grid">
                    <div>
                        <h3>100+</h3>
                        <p>Destinations</p>
                    </div>

                    <div>
                        <h3>500+</h3>
                        <p>Happy Travelers</p>
                    </div>

                    <div>
                        <h3>50+</h3>
                        <p>Travel Packages</p>
                    </div>

                    <div>
                        <h3>10+</h3>
                        <p>Years Experience</p>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section className="about-section" id="about">
                <div className="container about-container">
                    <div className="about-content">
                        <p className="about-subtitle">ABOUT US</p>

                        <h2>Travel. Explore. Discover.</h2>

                        <p>
                            At Traversal, we believe that every journey should be
                            memorable. We help travelers discover beautiful
                            destinations, explore new cultures, and create
                            unforgettable experiences around the world.
                        </p>

                        <p>
                            Whether you are planning a relaxing getaway or an
                            exciting adventure, we are here to help you make the
                            most of your journey.
                        </p>

                        <a href="/destinations" className="primary-btn">
                            Explore Destinations
                        </a>
                    </div>

                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80"
                            alt="Travelers exploring a destination"
                        />
                    </div>
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
                        <a href="/#about">About</a>
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
                        © {new Date().getFullYear()} Traversal.by merbiks.
                    </p>
                </div>
            </footer>
        </main>
    );
}