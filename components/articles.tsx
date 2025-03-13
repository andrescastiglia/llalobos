import { Article } from "@/app/ui/news";
import { Audio } from "@/components/audio";
import React, { useState } from "react";
import nextConfig from "@/base/next.config";

interface ArticlesPageProps {
  articles: Article[];
}

export const Articles: React.FC<ArticlesPageProps> = ({ articles: news }) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: news.map((item, index) => ({
      "@type": "NewsArticle",
      position: index + 1,
      headline: item.title,
      datePublished: new Date(item.date).toISOString().substring(0, 10),
      author: {
        "@type": "Person",
        name: "Andres Castiglia",
      },
      publisher: {
        "@type": "Organization",
        name: "La Libertad Avanza Lobos",
        logo: {
          "@type": "ImageObject",
          url: "https://lalibertadavanzalobos.ar/publisher.png",
        },
      },
      image: "https://lalibertadavanzalobos.ar/article.png",
      articleBody: item.content,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://lalibertadavanzalobos.ar/news?id=${item.id}`,
      },
      description: "Politica de Lobos, Provincia de Buenos Aires",
      keywords: "politica,lobos,noticia",
    })),
  };

  return (
    <div className="max-w-4xl mx-auto p-1 relative">
      <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
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
