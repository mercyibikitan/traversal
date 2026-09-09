"use client";

import { useState } from "react";

export default function DateSearch() {
    const [destination, setDestination] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        console.log({
            destination,
            checkIn,
            checkOut,
        });
    };

    return (
        <section className="date-search-section">
            <div className="container">
                <form className="date-search" onSubmit={handleSearch}>
                    <div className="search-field">
                        <label htmlFor="destination">Where to?</label>
                        <input
                            id="destination"
                            type="text"
                            placeholder="Enter destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>

                    <div className="search-field">
                        <label htmlFor="check-in">Check-in</label>
                        <input
                            id="check-in"
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                        />
                    </div>

                    <div className="search-field">
                        <label htmlFor="check-out">Check-out</label>
                        <input
                            id="check-out"
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="search-btn">
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
}