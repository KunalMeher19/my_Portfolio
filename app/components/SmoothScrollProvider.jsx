"use client";
import React, { useEffect, useRef, createContext, useContext } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisContext = createContext(null);

export const useLenis = () => {
  const context = useContext(LenisContext);
  return context;
};

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    lenisRef.current = new Lenis({
      lerp: 0.05,
      duration: 1.5,
      easing: 'easeOutExpo',
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
      wheelMultiplier: 0.95,
      normalizeWheel: true,
      infinite: false,
    });

    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
}