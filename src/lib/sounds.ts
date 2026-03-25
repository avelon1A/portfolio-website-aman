"use client";

import { useRef, useCallback } from "react";

let audioContext: AudioContext | null = null;
let soundEnabled = true;

const getAudioContext = () => {
  if (typeof window === "undefined") return null;
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  }
  return audioContext;
};

export function setSoundEnabled(enabled: boolean) {
  soundEnabled = enabled;
  if (typeof window !== "undefined") {
    localStorage.setItem("soundEnabled", String(enabled));
  }
}

export function getSoundEnabled(): boolean {
  if (typeof window === "undefined") return true;
  const saved = localStorage.getItem("soundEnabled");
  return saved !== "false";
}

type SoundType = "click" | "hover";

const soundPresets: Record<SoundType, { startFreq: number; endFreq: number; duration: number; volume: number }> = {
  click: { startFreq: 600, endFreq: 300, duration: 0.08, volume: 0.1 },
  hover: { startFreq: 400, endFreq: 500, duration: 0.04, volume: 0.03 },
};

export function playSound(type: SoundType = "click") {
  if (!soundEnabled) return;

  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === "suspended") {
    ctx.resume();
  }

  const preset = soundPresets[type];
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.frequency.setValueAtTime(preset.startFreq, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(preset.endFreq, ctx.currentTime + preset.duration);

  gainNode.gain.setValueAtTime(preset.volume, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + preset.duration);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + preset.duration);
}

export const playClickSound = () => playSound("click");
export const playHoverSound = () => playSound("hover");

export function useSoundPlayer() {
  const isEnabled = useRef(getSoundEnabled());

  const playClick = useCallback(() => {
    if (!isEnabled.current) return;
    playSound("click");
  }, []);

  const playHover = useCallback(() => {
    if (!isEnabled.current) return;
    playSound("hover");
  }, []);

  return { playClick, playHover };
}
