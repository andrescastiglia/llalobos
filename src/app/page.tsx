"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Balance from "./balance";
import News from "./news";
import Contact from "./contact";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("news");
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
      case "news":
        return <News />;
      case "balance":
        return <Balance />;
      case "contact":
        return <Contact />;
      default:
        return <News />;
    }
  };

  return (
    <>
      <div className="font-[family-name:var(--font-geist-sans)]">
        <nav ref={navbar} className={`navbar${menuOpen ? " responsive" : ""}`}>
          <a href="#news" onClick={() => handlePageChange("news")}>
            🏠 Noticias
          </a>
          <a href="#balance" onClick={() => handlePageChange("balance")}>
            📁 Balance
          </a>
          <a href="#contact" onClick={() => handlePageChange("contact")}>
            👤 Contactos
          </a>
          <a href="#toggle" className="icon" onClick={toggleMenu}>
            &#9776;
          </a>
        </nav>
      </div>
      <div className="grid grid-rows-[auto_1fr_5px] items-center justify-items-center min-h-screen p-1 pb-5 gap-4 sm:p-5 font-[family-name:var(--font-geist-sans)]">
        <Header />
        {renderPage()}
        &nbsp;
        <Footer />
      </div>
    </>
  );
}
