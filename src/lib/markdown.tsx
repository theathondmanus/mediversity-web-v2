/**
 * Minimal markdown renderer for insight articles.
 *
 * Supports:
 * - H1-H4 headings
 * - Paragraphs
 * - Bullet lists (- ... or * ...)
 * - Numbered lists (1. ...)
 * - Bold (**text**), italic (*text*), inline code (`code`)
 * - Links [text](url)
 * - Images ![alt](url)
 * - Block quotes (> ...)
 *
 * Returns a React node. Zero external dependencies.
 *
 * For richer content (tables, code blocks, embedded components), revisit later.
 */

import { Fragment, type ReactNode } from "react";

/* ── Inline parser ── */

function parseInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  // Order matters: image/link first, then bold, italic, code
  const patterns: { regex: RegExp; render: (m: RegExpMatchArray) => ReactNode }[] = [
    {
      regex: /^!\[([^\]]*)\]\(([^)]+)\)/,
      render: (m) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`img-${key++}`}
          src={m[2]}
          alt={m[1]}
          className="my-6 rounded-lg max-w-full h-auto"
        />
      ),
    },
    {
      regex: /^\[([^\]]+)\]\(([^)]+)\)/,
      render: (m) => (
        <a
          key={`a-${key++}`}
          href={m[2]}
          target={m[2].startsWith("http") ? "_blank" : undefined}
          rel={m[2].startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-[#00438A] underline hover:text-[#003066]"
        >
          {m[1]}
        </a>
      ),
    },
    {
      regex: /^\*\*([^*]+)\*\*/,
      render: (m) => <strong key={`b-${key++}`}>{m[1]}</strong>,
    },
    {
      regex: /^\*([^*]+)\*/,
      render: (m) => <em key={`i-${key++}`}>{m[1]}</em>,
    },
    {
      regex: /^`([^`]+)`/,
      render: (m) => (
        <code
          key={`c-${key++}`}
          className="bg-[#F4F2EE] px-1.5 py-0.5 rounded text-sm font-mono"
        >
          {m[1]}
        </code>
      ),
    },
  ];

  let buffer = "";
  while (remaining.length > 0) {
    let matched = false;
    for (const { regex, render } of patterns) {
      const m = remaining.match(regex);
      if (m) {
        if (buffer) {
          nodes.push(buffer);
          buffer = "";
        }
        nodes.push(render(m));
        remaining = remaining.slice(m[0].length);
        matched = true;
        break;
      }
    }
    if (!matched) {
      buffer += remaining[0];
      remaining = remaining.slice(1);
    }
  }
  if (buffer) nodes.push(buffer);

  return nodes;
}

/* ── Block parser ── */

interface Block {
  type: "h1" | "h2" | "h3" | "h4" | "p" | "ul" | "ol" | "blockquote" | "image";
  content?: string;
  items?: string[];
  src?: string;
  alt?: string;
}

function parseBlocks(markdown: string): Block[] {
  const lines = markdown.split(/\r?\n/);
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "") {
      i++;
      continue;
    }

    // Headings
    const hMatch = trimmed.match(/^(#{1,4})\s+(.*)$/);
    if (hMatch) {
      const level = hMatch[1].length as 1 | 2 | 3 | 4;
      blocks.push({ type: `h${level}` as Block["type"], content: hMatch[2] });
      i++;
      continue;
    }

    // Standalone image (whole line)
    const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      blocks.push({ type: "image", alt: imgMatch[1], src: imgMatch[2] });
      i++;
      continue;
    }

    // Bullet list
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const items: string[] = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))
      ) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    // Blockquote
    if (trimmed.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        quoteLines.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push({ type: "blockquote", content: quoteLines.join(" ") });
      continue;
    }

    // Paragraph (collect consecutive non-empty non-special lines)
    const paraLines: string[] = [];
    while (i < lines.length) {
      const t = lines[i].trim();
      if (
        t === "" ||
        /^#{1,4}\s/.test(t) ||
        t.startsWith("- ") ||
        t.startsWith("* ") ||
        /^\d+\.\s/.test(t) ||
        t.startsWith("> ") ||
        /^!\[[^\]]*\]\([^)]+\)$/.test(t)
      )
        break;
      paraLines.push(t);
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push({ type: "p", content: paraLines.join(" ") });
    }
  }

  return blocks;
}

/* ── Render ── */

export function renderMarkdown(markdown: string): ReactNode {
  const blocks = parseBlocks(markdown);

  return (
    <>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "h1":
            return (
              <h1 key={idx} className="text-3xl md:text-4xl font-bold text-[#0E0C19] mt-10 mb-4 font-display">
                {parseInline(block.content!)}
              </h1>
            );
          case "h2":
            return (
              <h2 key={idx} className="text-2xl md:text-3xl font-bold text-[#0E0C19] mt-10 mb-4 font-display">
                {parseInline(block.content!)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={idx} className="text-xl md:text-2xl font-semibold text-[#0E0C19] mt-8 mb-3 font-display">
                {parseInline(block.content!)}
              </h3>
            );
          case "h4":
            return (
              <h4 key={idx} className="text-lg font-semibold text-[#0E0C19] mt-6 mb-2">
                {parseInline(block.content!)}
              </h4>
            );
          case "p":
            return (
              <p key={idx} className="my-4 leading-relaxed text-[#3C3A47]">
                {parseInline(block.content!)}
              </p>
            );
          case "ul":
            return (
              <ul key={idx} className="my-4 ml-6 list-disc space-y-2 text-[#3C3A47]">
                {block.items!.map((item, j) => (
                  <li key={j}>{parseInline(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={idx} className="my-4 ml-6 list-decimal space-y-2 text-[#3C3A47]">
                {block.items!.map((item, j) => (
                  <li key={j}>{parseInline(item)}</li>
                ))}
              </ol>
            );
          case "blockquote":
            return (
              <blockquote
                key={idx}
                className="my-6 pl-4 border-l-4 border-[#C4922A] italic text-[#3C3A47]"
              >
                {parseInline(block.content!)}
              </blockquote>
            );
          case "image":
            return (
              <Fragment key={idx}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={block.src!}
                  alt={block.alt ?? ""}
                  className="my-6 rounded-lg max-w-full h-auto"
                />
              </Fragment>
            );
        }
      })}
    </>
  );
}
