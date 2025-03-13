"use client";

import news, { Article } from "@/app/ui/news";
import { Articles } from "@/components/articles";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const pageSize = 10;
  const searchParams = useSearchParams();
  const id = searchParams?.get("id"); 

  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetch = async () => {
      if (id) {
        setArticles(await news({ id: Number(id) }));
      } else {
        setArticles(await news({ page: currentPage, page_size: pageSize }));
      }
    };
    fetch();
  }, [currentPage, id]);

  const handlePreviousPage = async () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = async () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <main className="flex flex-col items-start p-1">
      <div className="w-full">
        <Articles articles={articles} />
        <div className="flex justify-center space-x-5 mt-1">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            &lt;-
          </button>
          <span>{currentPage}</span>
          <button onClick={handleNextPage} disabled={articles.length === 0}>
            -&gt;
          </button>
        </div>
      </div>
    </main>
  );
}
