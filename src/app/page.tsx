"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";
import Project from "./project";
import Contact from "./contact";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("main");
  const [menuOpen, setMenuOpen] = useState(false);
  const navbar = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.history.pushState(null, "", `/#${page}`);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "main":
        return <Main />;
      case "project":
        return <Project />;
      case "contact":
        return <Contact />;
      default:
        return <Main />;
    }
  };

  return (
    <>
      <nav ref={navbar} className={`navbar${menuOpen ? " responsive" : ""}`}>
        <a href="#main" onClick={() => handlePageChange("main")}>
          🏠 Principal
        </a>
        <a href="#project" onClick={() => handlePageChange("project")}>
          📁 Proyectos
        </a>
        <a href="#contact" onClick={() => handlePageChange("contact")}>
          👤 Contactos
        </a>
        <a href="#toggle" className="icon" onClick={toggleMenu}>
          &#9776;
        </a>
      </nav>
      <div className="grid grid-rows-[auto_1fr_10px] items-center justify-items-center min-h-screen p-4 pb-20 gap-4 sm:p-10 font-[family-name:var(--font-geist-sans)]">
        <Header />
        {renderPage()}
        <Footer />
      </div>
    </>
  );
}
