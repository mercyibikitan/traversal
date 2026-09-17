import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { destinations } from "@/data/destinations";

type DestinationPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function DestinationPage({
    params,
}: DestinationPageProps) {
    const { id } = await params;

    const destination = destinations.find(
        (item) => item.id === Number(id)
    );

    if (!destination) {
        notFound();
    }

    return (
        <main>
            <Navbar />

            <section
                className="destination-detail-hero"
                style={{
                    backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url("${destination.image}")
          `,
                }}
            >
                <div className="destination-detail-overlay">
                    <div className="container destination-detail-content">
                        <Link href="/destinations" className="back-link">
                            ← Back to Destinations
                        </Link>

                        <p>{destination.location}</p>

                        <h1>{destination.name}</h1>

                        <span>
                            Discover the beauty and unforgettable experiences
                            waiting for you in {destination.name}.
                        </span>
                    </div>
                </div>
            </section>

            <section className="destination-detail-section">
                <div className="container destination-detail-grid">
                    <div className="destination-detail-image">
                        <img
                            src={destination.image}
                            alt={destination.name}
                        />
                    </div>

                    <div className="destination-detail-info">
                        <p className="destination-detail-subtitle">
                            EXPLORE {destination.location.toUpperCase()}
                        </p>

                        <h2>Discover {destination.name}</h2>

                        <p>{destination.description}</p>

                        <p>
                            Explore amazing places, experience the local culture,
                            discover beautiful scenery, and create unforgettable
                            memories on your journey.
                        </p>

                        <Link href="/contact" className="primary-btn">
                            Plan Your Trip
                        </Link>
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
                        <Link href="/">Home</Link>
                        <Link href="/destinations">Destinations</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>info@traversal.com</p>
                        <p>+234 800 000 0000</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Traversal. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}