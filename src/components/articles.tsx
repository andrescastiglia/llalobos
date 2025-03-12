import { Article } from "@/api/news";
import { Audio } from "@/components/audio";
import React, { useState } from "react";
import nextConfig from "../../next.config";

interface ArticlesPageProps {
  articles: Article[];
}

export const Articles: React.FC<ArticlesPageProps> = ({ articles: news }) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto p-1 relative">
      {news.map((article) => (
        <div key={article.id} className="rounded-2xl shadow-lg p-4">
          <h2 className="text-xl font-bold mb-2">{article.title}</h2>
          <p className="text-sm text-gray-500 mb-2">
            {new Date(article.date).toLocaleDateString(
              nextConfig.i18n?.defaultLocale
            )}
          </p>
          <p className="whitespace-pre-line">
            {expanded === article.id
              ? article.content
              : `${article.content.slice(0, 250)} `}
            {expanded !== article.id && (
              <span
                onClick={() => toggleExpand(article.id)}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                [+]
              </span>
            )}
          </p>
          {expanded === article.id && (
            <div className="flex justify-between mt-4">
              <span
                onClick={() => toggleExpand(article.id)}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                [-]
              </span>
            </div>
          )}
          {article.has_media && <Audio article={article} />}
        </div>
      ))}
    </div>
  );
};
