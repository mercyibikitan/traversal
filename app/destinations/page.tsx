import Navbar from "@/components/Navbar";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";

export default function Destinations() {
    return (
        <main>
            <Navbar />

            <section className="destination-hero">
                <div className="destination-hero-overlay">
                    <div className="container destination-hero-content">
                        <p>EXPLORE WITH US</p>

                        <h1>Our Destinations</h1>

                        <span>
                            Discover beautiful places and unforgettable experiences
                            around the world.
                        </span>
                    </div>
                </div>
            </section>

            <section className="destinations-section">
                <div className="container">
                    <div className="section-heading">
                        <p>DISCOVER THE WORLD</p>

                        <h2>Popular Destinations</h2>

                        <span>
                            Choose your next adventure from our amazing destinations.
                        </span>
                    </div>

                    <div className="destination-grid">
                        {destinations.map((destination) => (
                            <DestinationCard
                                key={destination.id}
                                destination={destination}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}