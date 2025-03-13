"use client";

import Link from "next/link";
import React, { useState } from "react";

export const Navigator = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <nav className={`navbar${menuOpen ? " responsive" : ""}`}>
        <Link href="/news" onClick={closeMenu}>🏠 Noticias</Link>
        <Link href="/balance" onClick={closeMenu}>📁 Balance</Link>
        <Link href="/contact" onClick={closeMenu}>👤 Contactos</Link>
        <a href="#toggle" className="icon" onClick={toggleMenu}>
          &#9776;
        </a>
      </nav>
    </div>
  );
};
