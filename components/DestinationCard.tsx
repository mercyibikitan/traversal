import Link from "next/link";
import { Destination } from "@/data/destinations";

type DestinationCardProps = {
    destination: Destination;
};

export default function DestinationCard({
    destination,
}: DestinationCardProps) {
    return (
        <article className="destination-card">
            <div className="destination-image">
                <img
                    src={destination.image}
                    alt={destination.name}
                />
            </div>

            <div className="destination-content">
                <p className="destination-location">
                    {destination.location}
                </p>

                <h3>{destination.name}</h3>

                <p className="destination-description">
                    {destination.description}
                </p>

                <Link
                    href={`/destinations/${destination.id}`}
                    className="learn-more"
                >
                    Explore →
                </Link>
            </div>
        </article>
    );
}