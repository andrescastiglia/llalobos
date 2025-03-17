"use client";

import news, { Article } from "@/app/ui/news";
import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

interface ArticlePageProps {
  article: Article;
}

export const Audio: React.FC<ArticlePageProps> = ({ article }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string | undefined>(undefined);
  const [transcription, setTranscription] = useState(article.transcription);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("timeupdate", updateTime);
    return () => audio.removeEventListener("timeupdate", updateTime);
  }, [audioLoaded]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const autoPlay = () => {
      audio.play();
      setIsPlaying(true);
    };
    audio.addEventListener("loadeddata", autoPlay);
    return () => audio.removeEventListener("loadeddata", autoPlay);
  }, [audioLoaded]);

  const togglePlayback = async () => {
    if (!audioLoaded) {
      const newArticle = await news({ id: article.id });
      setTranscription(newArticle[0].transcription);
      const blob = new Blob([new Uint8Array(newArticle[0].media)], {
        type: "audio/mpeg",
      });
      const url = URL.createObjectURL(blob);
      setAudioSrc(url);
      setAudioLoaded(true);
    } else {
      const audio = audioRef.current;
      if (audio !== null) {
        if (isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
        setIsPlaying(!isPlaying);
      }
    }
  };

  const activeSegment = transcription.find(
    (segment) => currentTime >= segment.start && currentTime <= segment.finish
  );

  useEffect(() => {
    const activeSegmentElement = document.getElementById(
      `segment-${activeSegment?.start}`
    );
    if (activeSegmentElement) {
      activeSegmentElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentTime, activeSegment]);

  return (
    <>
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex items-center mb-4">
          {audioSrc && <audio ref={audioRef} src={audioSrc} controls={false} />}
          <button
            onClick={togglePlayback}
            className="mr-2 px-2 py-1 rounded"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <input
            type="range"
            min="0"
            max={audioRef.current?.duration ?? 0}
            value={currentTime}
            onChange={(e) => {
              if (audioRef.current) {
                audioRef.current.currentTime = parseFloat(e.target.value);
                setCurrentTime(audioRef.current.currentTime);
              }
            }}
            className="w-full"
          />
        </div>
      </div>
      <div className="space-y-2 h-12 overflow-hidden flex flex-col">
        {transcription.map((segment) => (
          <p
            id={`segment-${segment.start}`}
            key={segment.start}
            className="p-2 rounded inverted-color text-center text-sm sm:text-base md:text-lg"
          >
            {segment.content}
          </p>
        ))}
      </div>
    </>
  );
};
