"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;

        setDarkMode(newDarkMode);

        if (newDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link href="/" className="logo">
                    Traversal
                </Link>

                <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
                    <Link href="/" onClick={() => setMenuOpen(false)}>
                        Home
                    </Link>

                    <Link
                        href="/destinations"
                        onClick={() => setMenuOpen(false)}
                    >
                        Destinations
                    </Link>

                    <Link href="/about" onClick={() => setMenuOpen(false)}>
                        About
                    </Link>

                    <Link href="/contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </Link>
                </div>

                <Link href="/contact" className="book-btn">
                    Contact Us
                </Link>

                {/* DARK MODE */}
                <button
                    type="button"
                    className="dark-mode-btn"
                    onClick={toggleDarkMode}
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? "☀️" : "🌙"}
                </button>

                {/* MOBILE MENU */}
                <button
                    type="button"
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    ☰
                </button>
            </div>
        </nav>
    );
}