import news from "@/app/ui/news";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { page = "1", page_size = "10" } = request.query;
  const articles = await news({
    page: Number(page),
    page_size: Number(page_size),
  });

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>La Libertad Avanza Lobos</title>
      <link>https://lalibertadavanzalobos.ar</link>
      <description>Noticias de política en Lobos, Provincia de Buenos Aires</description>
      <language>es</language>
      <atom:link href="https://lalibertadavanzalobos.ar/rss" rel="self" type="application/rss+xml" />
      ${articles
        .map(
          (item) => `
        <item>
          <title>${item.title}</title>
          <link>https://lalibertadavanzalobos.ar/news?id=${item.id}</link>
          <guid>https://lalibertadavanzalobos.ar/news?id=${item.id}</guid>
          <description><![CDATA[${item.content}]]></description>
          <category>Política</category>
          <pubDate>${new Date(item.date).toUTCString()}</pubDate>
        </item>`
        )
        .join("")}
    </channel>
  </rss>`;

  response.setHeader("Content-Type", "application/xml");
  response.status(200).send(rss);
}
