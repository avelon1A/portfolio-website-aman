"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "kotlin" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightKotlin = (code: string) => {
    const lines = code.split("\n");
    return lines.map((line, lineIndex) => {
      let highlighted = line;
      
      // Comments (// style)
      if (line.trim().startsWith("//")) {
        return (
          <span key={lineIndex} className="block">
            <span className="text-[#6b7280] italic">{line}</span>
          </span>
        );
      }

      // Process tokens in order of priority
      const tokens: { text: string; className: string }[] = [];
      let remaining = line;
      
      // Keywords
      const keywords = [
        "fun", "val", "var", "class", "object", "interface", "sealed", "data", "abstract",
        "override", "private", "public", "protected", "internal", "suspend", "companion",
        "init", "constructor", "get", "set", "when", "if", "else", "when", "try", "catch",
        "finally", "throw", "return", "is", "in", "as", "by", "lazy", "const", "lateinit",
        "inner", "enum", "annotation", "import", "package", "typealias", "break", "continue",
        "do", "while", "for", "super", "this", "true", "false", "null"
      ];

      // Annotations
      const annotations = [
        "@Composable", "@Preview", "@Test", "@Before", "@After", "@Stable", "@Immutable",
        "@Inject", "@Module", "@Provides", "@Singleton", "@AndroidEntryPoint",
        "@HiltAndroidApp", "@ViewModelInject", "@AssistedInject"
      ];

      // Types
      const types = [
        "String", "Int", "Long", "Double", "Float", "Boolean", "Char", "Byte", "Short",
        "Unit", "Any", "Nothing", "List", "MutableList", "Map", "MutableMap", "Set",
        "MutableSet", "Array", "Pair", "Triple", "Result", "StateFlow", "MutableStateFlow",
        "Flow", "LiveData", "MutableLiveData", "CoroutineScope", "ViewModel", "Activity",
        "Fragment", "Context", "View", "Composable", "Modifier", "Column", "Row", "Box",
        "Text", "Button", "Spacer", "LazyColumn", "LazyRow", "Scaffold", "TopAppBar",
        "MaterialTheme", "Alignment", "Arrangement", "Shape", "Color", "Typography"
      ];

      // Replace patterns
      // String literals
      highlighted = highlighted.replace(
        /(["'`])(?:(?!\1)[^\\]|\\.)*?\1/g,
        '<span class="text-emerald-400">$&</span>'
      );

      // Annotations
      annotations.forEach(ann => {
        highlighted = highlighted.replace(
          new RegExp(`\\${ann.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g'),
          `<span class="text-amber-400">${ann}</span>`
        );
      });

      // Keywords
      keywords.forEach(kw => {
        highlighted = highlighted.replace(
          new RegExp(`\\b${kw}\\b`, 'g'),
          `<span class="text-purple-400">${kw}</span>`
        );
      });

      // Types (capitalized words)
      highlighted = highlighted.replace(
        /\b([A-Z][a-zA-Z0-9_]*)\b/g,
        '<span class="text-sky-400">$1</span>'
      );

      // Function calls
      highlighted = highlighted.replace(
        /\b([a-z][a-zA-Z0-9_]*)\s*\(/g,
        '<span class="text-blue-400">$1</span>('
      );

      // Numbers
      highlighted = highlighted.replace(
        /\b(\d+\.?\d*[fFdDlL]?)\b/g,
        '<span class="text-orange-400">$1</span>'
      );

      // Operators
      highlighted = highlighted.replace(
        /([=+\-*/%<>!&|^~?:])/g,
        '<span class="text-gray-400">$1</span>'
      );

      // Braces and brackets
      highlighted = highlighted.replace(
        /([{}[\]()])/g,
        '<span class="text-gray-300">$1</span>'
      );

      return (
        <span key={lineIndex} className="block">
          <span dangerouslySetInnerHTML={{ __html: highlighted }} />
        </span>
      );
    });
  };

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
          <code className="text-gray-300">
            {highlightKotlin(code)}
          </code>
        </pre>
      </div>

      {/* Line numbers gutter (decorative) */}
      <div className="absolute left-0 top-[42px] bottom-0 w-10 bg-[#1e1e1e] border-r border-[var(--border)] pointer-events-none opacity-50" />
    </div>
  );
}
