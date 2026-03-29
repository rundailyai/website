"use client";

import { useEffect } from "react";

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  useEffect(() => {
    // Add IDs to headings for TOC navigation
    const headings = document.querySelectorAll("h1, h2, h3");
    headings.forEach((heading) => {
      const text = heading.textContent || "";
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      heading.id = id;
    });
  }, []);

  // Simple markdown to HTML converter (for demonstration)
  const renderMarkdown = (md: string) => {
    let html = md;

    // Headers
    html = html.replace(/^### (.+)$/gm, "<h3 class='text-2xl font-bold mt-8 mb-4'>$1</h3>");
    html = html.replace(/^## (.+)$/gm, "<h2 class='text-3xl font-bold mt-10 mb-4'>$1</h2>");
    html = html.replace(/^# (.+)$/gm, "<h1 class='text-4xl font-bold mt-10 mb-6'>$1</h1>");

    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

    // Lists
    html = html.replace(/^- (.+)$/gm, "<li class='ml-6 mb-2'>$1</li>");
    html = html.replace(/^(\d+)\. (.+)$/gm, "<li class='ml-6 mb-2'>$2</li>");

    // Paragraphs
    html = html
      .split("\n\n")
      .map((para) => {
        if (
          para.startsWith("<h") ||
          para.startsWith("<li") ||
          para.trim() === "" ||
          para.startsWith("<strong")
        ) {
          return para;
        }
        return `<p class='mb-4 text-gray-700 leading-relaxed'>${para}</p>`;
      })
      .join("\n");

    return html;
  };

  return (
    <div
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
    />
  );
}
