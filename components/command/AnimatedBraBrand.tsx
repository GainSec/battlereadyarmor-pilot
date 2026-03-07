"use client";

import { useEffect, useRef, useState } from "react";

const TEXT = "BATTLE READY ARMOR";
const BRA_INDICES = new Set([0, 7, 13]);
const TYPE_SPEED = 80;
const HOLD_FULL = 1200;
const DIM_DURATION = 600;
const HOLD_BRA = 2000;
const FADE_DURATION = 400;
const PAUSE = 500;
const DEFAULT_WIDTH = 155;

type Phase = {
  count: number;
  dimProgress: number;
  opacity: number;
};

type AnimatedBraBrandProps = {
  accentColor?: string;
  glowColor?: string;
  mutedColor?: string;
};

export function AnimatedBraBrand({
  accentColor = "var(--accent)",
  glowColor = "var(--accent)",
  mutedColor = "#9ca3af",
}: AnimatedBraBrandProps = {}) {
  const measureRef = useRef<HTMLSpanElement>(null);
  const timeoutIds = useRef<number[]>([]);
  const animationFrameIds = useRef<number[]>([]);
  const intervalIds = useRef<number[]>([]);
  const [phase, setPhase] = useState<Phase>({ count: 0, dimProgress: 0, opacity: 1 });
  const [width, setWidth] = useState(DEFAULT_WIDTH);

  useEffect(() => {
    let cancelled = false;

    function clearTimers() {
      intervalIds.current.forEach((id) => window.clearInterval(id));
      timeoutIds.current.forEach((id) => window.clearTimeout(id));
      animationFrameIds.current.forEach((id) => window.cancelAnimationFrame(id));
      intervalIds.current = [];
      timeoutIds.current = [];
      animationFrameIds.current = [];
    }

    function scheduleTimeout(callback: () => void, delay: number) {
      const id = window.setTimeout(callback, delay);
      timeoutIds.current.push(id);
      return id;
    }

    function scheduleFrame(callback: FrameRequestCallback) {
      const id = window.requestAnimationFrame(callback);
      animationFrameIds.current.push(id);
      return id;
    }

    function render(count: number, dimProgress: number) {
      setPhase({ count, dimProgress, opacity: 1 });
    }

    function animate() {
      let count = 0;
      const typeInterval = window.setInterval(() => {
        count += 1;
        render(count, 0);
        if (count >= TEXT.length) {
          window.clearInterval(typeInterval);
          intervalIds.current = intervalIds.current.filter((id) => id !== typeInterval);
          scheduleTimeout(() => {
            const start = performance.now();
            function dimStep(now: number) {
              const progress = Math.min(1, (now - start) / DIM_DURATION);
              render(TEXT.length, progress);
              if (progress < 1) {
                scheduleFrame(dimStep);
                return;
              }
              scheduleTimeout(() => {
                setPhase({ count: TEXT.length, dimProgress: 1, opacity: 0 });
                scheduleTimeout(() => {
                  setPhase({ count: 0, dimProgress: 0, opacity: 1 });
                  scheduleTimeout(() => {
                    if (!cancelled) {
                      animate();
                    }
                  }, PAUSE);
                }, FADE_DURATION);
              }, HOLD_BRA);
            }
            scheduleFrame(dimStep);
          }, HOLD_FULL);
        }
      }, TYPE_SPEED);
      intervalIds.current.push(typeInterval);
    }

    function lockWidth() {
      const nextWidth = Math.ceil(measureRef.current?.getBoundingClientRect().width ?? DEFAULT_WIDTH);
      if (!cancelled && nextWidth > 0) {
        setWidth(nextWidth);
      }
    }

    const fontsReady = document.fonts?.ready;
    if (fontsReady) {
      fontsReady.then(() => {
        lockWidth();
        if (!cancelled) {
          animate();
        }
      });
    } else {
      lockWidth();
      animate();
    }

    return () => {
      cancelled = true;
      clearTimers();
    };
  }, []);

  return (
    <span
      aria-label="Battle Ready Armor"
      className="relative inline-block min-w-[3ch] align-middle"
      style={{
        width: `${width}px`,
        fontFamily: "var(--font-orbitron), monospace",
        letterSpacing: "2px",
        textTransform: "uppercase",
        fontSize: "0.75rem",
        opacity: phase.opacity,
        transition: `opacity ${FADE_DURATION}ms`,
      }}
    >
      <span ref={measureRef} className="pointer-events-none absolute left-0 top-0 whitespace-pre opacity-0">
        {TEXT}
      </span>
      <span aria-hidden="true" className="block whitespace-pre">
        {TEXT.slice(0, phase.count).split("").map((char, index) => {
          const isBra = BRA_INDICES.has(index);
          const tone = isBra
            ? { color: accentColor, textShadow: `0 0 8px ${glowColor}` }
            : {
                color: mutedColor,
                opacity: phase.dimProgress > 0 ? 0.9 - phase.dimProgress * 0.55 : 1,
              };

          return (
            <span key={`${char}-${index}`} style={tone}>
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </span>
    </span>
  );
}
