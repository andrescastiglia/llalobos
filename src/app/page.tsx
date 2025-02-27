import React from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_10px] items-center justify-items-center min-h-screen p-4 pb-20 gap-4 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
