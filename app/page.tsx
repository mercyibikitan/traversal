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
    </main>
  );
}