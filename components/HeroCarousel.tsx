"use client";

import { useEffect, useState } from "react";

const slides = [
    {
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80",
        title: "Explore The World",
        text: "Discover amazing destinations and create unforgettable memories around the world.",
    },
    {
        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=2000&q=80",
        title: "Discover Beautiful Places",
        text: "Experience new cultures, beautiful cities and incredible adventures.",
    },
    {
        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2000&q=80",
        title: "Create Unforgettable Memories",
        text: "Your next adventure is waiting. Start exploring the world with us.",
    },
];

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((current) => (current + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="hero"
            style={{
                backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.55)
          ),
          url("${slides[currentSlide].image}")
        `,
            }}
        >
            <div className="hero-overlay">
                <div className="container hero-content">
                    <p className="hero-subtitle">LET&apos;S TRAVEL</p>

                    <h1 key={currentSlide}>
                        {slides[currentSlide].title}
                    </h1>

                    <p className="hero-text">
                        {slides[currentSlide].text}
                    </p>

                    <a href="/destinations" className="primary-btn">
                        Explore Destinations
                    </a>
                </div>
            </div>

            <div className="carousel-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={index === currentSlide ? "active" : ""}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}