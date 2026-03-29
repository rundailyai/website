"use client";

import { useState, useEffect } from "react";

export function WordCounter() {
  const [text, setText] = useState("");
  const [stats, setStats] = useState({
    characters: 0,
    charactersNoSpaces: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0,
  });

  useEffect(() => {
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const sentences = text.split(/[.!?]+/).filter((s) => s.trim()).length;
    const paragraphs = text.split(/\n\n+/).filter((p) => p.trim()).length;
    const readingTime = Math.ceil(words / 200); // 200 words per minute

    setStats({
      characters,
      charactersNoSpaces,
      words,
      sentences,
      paragraphs,
      readingTime,
    });
  }, [text]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Word Counter</h2>
      <p className="text-gray-600 mb-6">
        Count words, characters, sentences, and estimate reading time
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing or paste your text here..."
        className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-3xl font-bold text-blue-600">{stats.words}</div>
          <div className="text-sm text-gray-600">Words</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-3xl font-bold text-purple-600">{stats.characters}</div>
          <div className="text-sm text-gray-600">Characters</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-3xl font-bold text-green-600">{stats.charactersNoSpaces}</div>
          <div className="text-sm text-gray-600">Chars (no spaces)</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="text-3xl font-bold text-orange-600">{stats.sentences}</div>
          <div className="text-sm text-gray-600">Sentences</div>
        </div>
        <div className="bg-pink-50 p-4 rounded-lg">
          <div className="text-3xl font-bold text-pink-600">{stats.paragraphs}</div>
          <div className="text-sm text-gray-600">Paragraphs</div>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <div className="text-3xl font-bold text-indigo-600">{stats.readingTime}</div>
          <div className="text-sm text-gray-600">Min read time</div>
        </div>
      </div>
    </div>
  );
}
