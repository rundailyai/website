"use client";

import { useState } from "react";
import { WordCounter } from "./tools/WordCounter";
import { ColorPaletteGenerator } from "./tools/ColorPaletteGenerator";
import { JsonFormatter } from "./tools/JsonFormatter";

export default function FreeToolsPage() {
  const [activeTool, setActiveTool] = useState<string>("word-counter");

  const tools = [
    { id: "word-counter", name: "Word Counter", icon: "📊" },
    { id: "color-palette", name: "Color Palette", icon: "🎨" },
    { id: "json-formatter", name: "JSON Formatter", icon: "🔧" },
  ];

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Free Tools</h1>
          <p className="text-xl text-gray-600">
            Useful web tools - no signup required, completely free
          </p>
        </div>

        {/* Tool Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition ${
                activeTool === tool.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span>{tool.icon}</span>
              <span>{tool.name}</span>
            </button>
          ))}
        </div>

        {/* Tool Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {activeTool === "word-counter" && <WordCounter />}
          {activeTool === "color-palette" && <ColorPaletteGenerator />}
          {activeTool === "json-formatter" && <JsonFormatter />}
        </div>
      </div>
    </div>
  );
}
