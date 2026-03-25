"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "amanavelon@gmail.com";

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <span className="section-label justify-center">Contact</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Let&apos;s <span className="gtext">connect</span>
        </h2>
        <p className="text-slate-500 mb-10 max-w-md mx-auto text-sm leading-relaxed">
          Open to Mobile Engineering roles, collaborations, and technical discussions.
        </p>

        <div className="card p-8 md:p-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a href={`mailto:${email}`} className="btn-p">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(email);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="btn-s"
            >
              {copied ? "Copied!" : email}
            </button>
          </div>

          <div className="flex justify-center gap-6">
            {[
              { href: "https://github.com/avelon1A", label: "GitHub" },
              { href: "https://www.linkedin.com/in/aman-toppo-320917214/", label: "LinkedIn" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ext-link"
              >
                {s.label}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
