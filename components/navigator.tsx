"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FaNewspaper,
  FaFolder,
  FaAddressBook,
  FaBookReader,
} from "react-icons/fa";

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
        <Link href="/news" onClick={closeMenu}>
          <span className="flex items-center">
            <FaNewspaper className="mr-2" />
            <span>Noticias</span>
          </span>
        </Link>
        <Link href="/balance" onClick={closeMenu}>
          <span className="flex items-center">
            <FaBookReader className="mr-2" />
            <span>Balance</span>
          </span>
        </Link>
        <Link href="/doc" onClick={closeMenu}>
          <span className="flex items-center">
            <FaFolder className="mr-2" />
            <span>Documentos</span>
          </span>
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          <span className="flex items-center">
            <FaAddressBook className="mr-2" />
            <span>Contactos</span>
          </span>
        </Link>
        <a href="#toggle" className="icon" onClick={toggleMenu}>
          &#9776;
        </a>
      </nav>
    </div>
  );
};
