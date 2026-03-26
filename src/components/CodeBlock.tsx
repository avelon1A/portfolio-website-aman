"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

interface Token {
  type: "keyword" | "type" | "string" | "comment" | "annotation" | "number" | "function" | "operator" | "punctuation" | "plain";
  text: string;
}

const KEYWORDS = new Set([
  "fun", "val", "var", "class", "object", "interface", "sealed", "data", "abstract",
  "override", "private", "public", "protected", "internal", "suspend", "companion",
  "init", "constructor", "get", "set", "when", "if", "else", "try", "catch",
  "finally", "throw", "return", "is", "in", "as", "by", "lazy", "const", "lateinit",
  "inner", "enum", "annotation", "import", "package", "typealias", "break", "continue",
  "do", "while", "for", "super", "this", "true", "false", "null"
]);

function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  while (i < line.length) {
    // Comments
    if (line.substring(i).startsWith("//")) {
      tokens.push({ type: "comment", text: line.substring(i) });
      break;
    }

    // String literals
    if (line[i] === '"' || line[i] === "'" || line[i] === "`") {
      const quote = line[i];
      let end = i + 1;
      while (end < line.length && line[end] !== quote) {
        if (line[end] === "\\") end++;
        end++;
      }
      if (end < line.length) end++;
      tokens.push({ type: "string", text: line.substring(i, end) });
      i = end;
      continue;
    }

    // Annotations
    if (line[i] === "@") {
      let end = i + 1;
      while (end < line.length && /[a-zA-Z0-9_]/.test(line[end])) end++;
      tokens.push({ type: "annotation", text: line.substring(i, end) });
      i = end;
      continue;
    }

    // Numbers
    if (/[0-9]/.test(line[i])) {
      let end = i;
      while (end < line.length && /[0-9.]/.test(line[end])) end++;
      if (end < line.length && /[fFdDlL]/.test(line[end])) end++;
      tokens.push({ type: "number", text: line.substring(i, end) });
      i = end;
      continue;
    }

    // Words
    if (/[a-zA-Z_]/.test(line[i])) {
      let end = i;
      while (end < line.length && /[a-zA-Z0-9_]/.test(line[end])) end++;
      const word = line.substring(i, end);

      if (KEYWORDS.has(word)) {
        tokens.push({ type: "keyword", text: word });
      } else if (/^[A-Z]/.test(word)) {
        tokens.push({ type: "type", text: word });
      } else {
        let nextNonSpace = end;
        while (nextNonSpace < line.length && line[nextNonSpace] === " ") nextNonSpace++;
        if (nextNonSpace < line.length && line[nextNonSpace] === "(") {
          tokens.push({ type: "function", text: word });
        } else {
          tokens.push({ type: "plain", text: word });
        }
      }
      i = end;
      continue;
    }

    // Operators
    if (/[=+\-*/%<>!&|^~?:]/.test(line[i])) {
      tokens.push({ type: "operator", text: line[i] });
      i++;
      continue;
    }

    // Punctuation
    if (/[{}[\]();,]/.test(line[i])) {
      tokens.push({ type: "punctuation", text: line[i] });
      i++;
      continue;
    }

    // Whitespace and other
    tokens.push({ type: "plain", text: line[i] });
    i++;
  }

  return tokens;
}

const TOKEN_COLORS: Record<Token["type"], string> = {
  keyword: "text-purple-400",
  type: "text-sky-400",
  string: "text-emerald-400",
  comment: "text-gray-500 italic",
  annotation: "text-amber-400",
  number: "text-orange-400",
  function: "text-blue-400",
  operator: "text-gray-400",
  punctuation: "text-gray-300",
  plain: "text-gray-300",
};

export default function CodeBlock({ code, language = "kotlin" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className="relative group my-6 rounded-lg border border-[var(--border)] overflow-hidden bg-[#1e1e1e]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[var(--border)]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[0.625rem] text-gray-500 uppercase tracking-wider ml-2">
            {language}
          </span>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 text-[0.625rem] text-gray-500 hover:text-gray-300 transition-colors px-2 py-1 rounded hover:bg-[#333]"
        >
          {copied ? (
            <>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-[0.8125rem] leading-relaxed font-mono">
          <code>
            {lines.map((line, lineIndex) => {
              const lineTokens = tokenizeLine(line);
              return (
                <span key={lineIndex} className="block">
                  {lineTokens.map((token, tokenIndex) => (
                    <span key={tokenIndex} className={TOKEN_COLORS[token.type]}>
                      {token.text}
                    </span>
                  ))}
                </span>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
}
