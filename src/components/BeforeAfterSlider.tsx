"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  label: string;
}

export default function BeforeAfterSlider({ beforeSrc, afterSrc, label }: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setPosition(percent);
  }, []);

  // Block page scroll while dragging on mobile
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const preventScroll = (e: TouchEvent) => {
      if (isDragging.current) {
        e.preventDefault();
      }
    };

    el.addEventListener("touchmove", preventScroll, { passive: false });
    return () => el.removeEventListener("touchmove", preventScroll);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  }, [handleMove]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  }, [handleMove]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl">
      <div
        ref={containerRef}
        className="relative cursor-col-resize select-none touch-none"
        style={{ aspectRatio: "3 / 4" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* After image (base layer) */}
        <Image
          src={afterSrc}
          alt={`${label} — Nachher`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={`${label} — Vorher`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 z-20 w-[2px] bg-white/90"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          {/* Drag handle */}
          <div className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/90 shadow-xl backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2c5a5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l-4 6 4 6" />
              <path d="M15 6l4 6-4 6" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="pointer-events-none absolute top-4 left-4 z-10 rounded-full bg-black/40 px-3 py-1.5 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
          Vorher
        </div>
        <div className="pointer-events-none absolute top-4 right-4 z-10 rounded-full bg-teal-dark/70 px-3 py-1.5 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
          Nachher
        </div>

        {/* Bottom gradient + label */}
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-5 pt-16">
          <p className="text-base font-semibold text-white">{label}</p>
        </div>
      </div>
    </div>
  );
}
