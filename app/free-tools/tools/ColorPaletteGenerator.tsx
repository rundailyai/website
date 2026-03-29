"use client";

import { useState } from "react";

interface Color {
  hex: string;
  rgb: string;
}

export function ColorPaletteGenerator() {
  const [palette, setPalette] = useState<Color[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  const generatePalette = () => {
    const newPalette: Color[] = [];
    for (let i = 0; i < 5; i++) {
      const hue = (i * 360) / 5 + Math.random() * 60;
      const saturation = 60 + Math.random() * 30;
      const lightness = 45 + Math.random() * 20;

      const hex = hslToHex(hue, saturation, lightness);
      const rgb = hslToRgb(hue, saturation, lightness);

      newPalette.push({ hex, rgb });
    }
    setPalette(newPalette);
  };

  const hslToHex = (h: number, s: number, l: number): string => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  const hslToRgb = (h: number, s: number, l: number): string => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color);
    };
    return `rgb(${f(0)}, ${f(8)}, ${f(4)})`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Color Palette Generator</h2>
      <p className="text-gray-600 mb-6">
        Generate beautiful, harmonious color palettes for your designs
      </p>

      <button
        onClick={generatePalette}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-8"
      >
        Generate Palette
      </button>

      {palette.length > 0 && (
        <div className="space-y-4">
          <div className="grid grid-cols-5 gap-4 mb-8">
            {palette.map((color, index) => (
              <div key={index} className="aspect-square rounded-lg" style={{ backgroundColor: color.hex }} />
            ))}
          </div>

          <div className="space-y-3">
            {palette.map((color, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 rounded-lg flex-shrink-0" style={{ backgroundColor: color.hex }} />
                <div className="flex-1 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => copyToClipboard(color.hex)}
                    className="text-left px-3 py-2 bg-white rounded border border-gray-200 hover:bg-gray-50 transition font-mono text-sm"
                  >
                    {color.hex}
                    {copied === color.hex && <span className="ml-2 text-green-600">✓</span>}
                  </button>
                  <button
                    onClick={() => copyToClipboard(color.rgb)}
                    className="text-left px-3 py-2 bg-white rounded border border-gray-200 hover:bg-gray-50 transition font-mono text-sm"
                  >
                    {color.rgb}
                    {copied === color.rgb && <span className="ml-2 text-green-600">✓</span>}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {palette.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">Click &quot;Generate Palette&quot; to create a color palette</p>
        </div>
      )}
    </div>
  );
}
