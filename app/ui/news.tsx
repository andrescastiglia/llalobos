"use client";

import { baseUrl } from "@/app/ui/const";

export interface NewsOptions {
  id?: number;
  page?: number;
  page_size?: number;
}

export interface Segment {
  start: number;
  finish: number;
  content: string;
}

export interface Article {
  id: number;
  date: Date;
  title: string;
  content: string;
  has_media: boolean;
  media: number[];
  transcription: Segment[];
}

export interface RawArticle {
  id: number;
  date: Date;
  title: string;
  content: string;
  has_media: boolean;
  media: number[];
  transcription: string | null;
}

interface Response {
  data: RawArticle[];
  page: number;
  page_size: number;
  total: number;
}

function seconds(timeString: string): number {
  const [minutes, secondsPart] = timeString.split(":");
  const [seconds, milliseconds] = secondsPart.split(".");
  return (
    parseInt(minutes) * 60 + parseInt(seconds) + parseInt(milliseconds) / 1000
  );
}

function parse(input: string | null): Segment[] {
  if (input === null) {
    return [];
  }

  const regex =
    /\[(\d{2}:\d{2}.\d{3}) --> (\d{2}:\d{2}.\d{3})\] (.*?)(?=\n|\r|$)/g;
  const transcription: Segment[] = [];
  let match;

  while ((match = regex.exec(input)) !== null) {
    const segment: Segment = {
      start: seconds(match[1]),
      finish: seconds(match[2]),
      content: match[3].trim(),
    };
    transcription.push(segment);
  }

  return transcription;
}

async function fetchAllNews(
  page: number,
  page_size: number
): Promise<Article[]> {
  const timestamp = Date.now();
  const response = await fetch(
    `${baseUrl}/api/news?page=${page}&page_size=${page_size}&t=${timestamp}`
  );
  if (!response.ok) throw new Error("Error fetching all news");
  const body: Response = await response.json();
  return body.data.map((row) => ({
    id: row.id,
    date: row.date,
    title: row.title,
    content: row.content,
    has_media: row.has_media,
    media: [],
    transcription: [],
  }));
}

async function fetchNews(id: number): Promise<Article[]> {
  const response = await fetch(`${baseUrl}/api/news?id=${id}`);
  if (!response.ok) throw new Error("Error fetching news");
  const body: Response = await response.json();
  return body.data.map((row) => ({
    id: row.id,
    date: row.date,
    title: row.title,
    content: row.content,
    has_media: row.has_media,
    media: row.media,
    transcription: parse(row.transcription),
  }));
}

export default async function news(
  options: NewsOptions = {}
): Promise<Article[]> {
  let articles: Article[] = [];
  try {
    if (options.id !== undefined) {
      articles = await fetchNews(options.id);
    } else {
      articles = await fetchAllNews(options.page ?? 1, options.page_size ?? 10);
    }
  } catch (error) {
    console.error("Failed fetching news:", error);
  }
  return articles;
}
