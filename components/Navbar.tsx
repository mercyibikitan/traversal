"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
