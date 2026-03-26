"use client";

import { useEffect, useRef, useState } from "react";

interface MvvmDiagramProps {
  variant?: "full" | "simple";
}

export default function MvvmDiagram({ variant = "full" }: MvvmDiagramProps) {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const layers = [
    {
      id: "view",
      title: "View (UI)",
      subtitle: "Composables / Activity / Fragment",
      responsibilities: [
        "Display state from ViewModel",
        "Capture user interactions",
        "Forward events to ViewModel",
        "Never contain business logic",
      ],
      color: "#646cff",
      bgColor: "rgba(100, 108, 255, 0.1)",
      borderColor: "rgba(100, 108, 255, 0.3)",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "viewmodel",
      title: "ViewModel",
      subtitle: "State Management & Business Logic",
      responsibilities: [
        "Hold UI state (StateFlow)",
        "Process user actions",
        "Call Repository methods",
        "No reference to View",
      ],
      color: "#a78bfa",
      bgColor: "rgba(167, 139, 250, 0.1)",
      borderColor: "rgba(167, 139, 250, 0.3)",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: "repository",
      title: "Repository",
      subtitle: "Single Source of Truth",
      responsibilities: [
        "Coordinate data sources",
        "Handle caching strategy",
        "Return Result types",
        "Independent of UI",
      ],
      color: "#10b981",
      bgColor: "rgba(16, 185, 129, 0.1)",
      borderColor: "rgba(16, 185, 129, 0.3)",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      id: "datasources",
      title: "Data Sources",
      subtitle: "Remote (API) & Local (Database)",
      responsibilities: [
        "Fetch from network (Retrofit)",
        "Persist to local storage (Room)",
        "Handle data serialization",
        "Manage connection state",
      ],
      color: "#f97316",
      bgColor: "rgba(249, 115, 22, 0.1)",
      borderColor: "rgba(249, 115, 22, 0.3)",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
  ];

  return (
    <div ref={ref} className="my-8">
      <div className="relative rounded-xl border border-[var(--border)] bg-[var(--bg-raised)] p-6 md:p-8 overflow-hidden">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Header */}
        <div className="relative mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#646cff] animate-pulse" />
            <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              MVVM Architecture Flow
            </h3>
          </div>
          <p className="text-xs text-[var(--text-tertiary)]">
            Click each layer to see its responsibilities
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="relative space-y-3">
          {layers.map((layer, index) => (
            <div key={layer.id}>
              {/* Connection line between layers */}
              {index > 0 && (
                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`w-0.5 h-4 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
                      style={{
                        background: `linear-gradient(to bottom, ${layers[index - 1].color}, ${layer.color})`,
                        transitionDelay: `${(index - 1) * 150}ms`,
                      }}
                    />
                    <svg
                      className={`w-3 h-3 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                      style={{ transitionDelay: `${index * 150}ms`, color: layer.color }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 4l-8 8h6v8h4v-8h6z" />
                    </svg>
                    <div
                      className={`w-0.5 h-4 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
                      style={{
                        background: `linear-gradient(to bottom, ${layers[index - 1].color}, ${layer.color})`,
                        transitionDelay: `${index * 150}ms`,
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Layer card */}
              <div
                className={`relative rounded-lg border-2 transition-all duration-500 cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                } ${
                  activeLayer === layer.id
                    ? "scale-[1.02]"
                    : "hover:scale-[1.01]"
                }`}
                style={{
                  background: layer.bgColor,
                  borderColor: activeLayer === layer.id ? layer.color : layer.borderColor,
                  transitionDelay: `${index * 150}ms`,
                  boxShadow: activeLayer === layer.id ? `0 0 30px ${layer.bgColor}` : "none",
                }}
                onClick={() =>
                  setActiveLayer(activeLayer === layer.id ? null : layer.id)
                }
              >
                <div className="p-4 md:p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 p-2 rounded-lg"
                      style={{ background: layer.bgColor, color: layer.color }}
                    >
                      {layer.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4
                          className="text-base font-semibold"
                          style={{ color: layer.color }}
                        >
                          {layer.title}
                        </h4>
                        <svg
                          className={`w-4 h-4 transition-transform ${activeLayer === layer.id ? "rotate-180" : ""}`}
                          style={{ color: layer.color }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                      <p className="text-xs text-[var(--text-tertiary)]">
                        {layer.subtitle}
                      </p>

                      {/* Expanded responsibilities */}
                      <div
                        className={`grid transition-all duration-300 ${
                          activeLayer === layer.id
                            ? "grid-rows-[1fr] opacity-100 mt-4"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {layer.responsibilities.map((resp, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-xs"
                              >
                                <div
                                  className="w-1 h-1 rounded-full flex-shrink-0"
                                  style={{ background: layer.color }}
                                />
                                <span className="text-[var(--text-secondary)]">
                                  {resp}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated border glow on hover */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${layer.bgColor}, transparent 40%)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Flow direction indicator */}
        <div className="relative mt-8 pt-6 border-t border-[var(--border)]">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-8 h-0.5 bg-[#646cff]" />
                <svg className="w-3 h-3 text-[#646cff]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4l-8 8h6v8h4v-8h6z" />
                </svg>
              </div>
              <span className="text-xs text-[var(--text-tertiary)]">User Action</span>
            </div>
            <div className="w-px h-4 bg-[var(--border)]" />
            <div className="flex items-center gap-2">
              <span className="text-xs text-[var(--text-tertiary)]">State Update</span>
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3 text-[#a78bfa] rotate-180" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4l-8 8h6v8h4v-8h6z" />
                </svg>
                <div className="w-8 h-0.5 bg-[#a78bfa]" />
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-[var(--text-tertiary)] mt-2">
            Unidirectional data flow — View observes ViewModel, ViewModel never knows about View
          </p>
        </div>

        {/* Decorative corner dots */}
        <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-[var(--border)]" />
        <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[var(--border)]" />
        <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-[var(--border)]" />
        <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-[var(--border)]" />
      </div>
    </div>
  );
}
