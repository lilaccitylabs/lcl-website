"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import AuroraScene from "./aurora-scene";

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl2") || canvas.getContext("webgl")
    );
  } catch {
    return false;
  }
}

function CSSFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute h-[500px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.25),rgba(236,72,153,0.1),transparent_70%)] blur-3xl" />
    </div>
  );
}

export default function AuroraBackground() {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasWebGL(detectWebGL());
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      setIsVisible(entries[0].isIntersecting);
    },
    []
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0,
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, [observerCallback]);

  // Wait for client-side detection
  if (hasWebGL === null) return null;

  if (!hasWebGL) return <CSSFallback />;

  const dpr: [number, number] = isMobile ? [1, 1] : [1, 1.5];

  return (
    <div ref={containerRef} className="absolute inset-0">
      <Canvas
        gl={{ alpha: true, powerPreference: "high-performance" }}
        dpr={dpr}
        camera={{ position: [0, 0, 5], fov: 45 }}
        frameloop={isVisible ? "always" : "never"}
        style={{ pointerEvents: "none" }}
      >
        <AuroraScene isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
