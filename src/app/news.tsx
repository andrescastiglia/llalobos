import news, { Article } from "@/api/news";
import { Articles } from "@/components/articles";
import React, { useEffect, useState } from "react";

const pageSize = 10;

export default function News() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetch = async () => {
      setArticles(await news({ page: currentPage, page_size: pageSize }));
    };
    fetch();
  }, [currentPage]);

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
