"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const FluidCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorCirclesRef = useRef<HTMLDivElement[]>([]);
  const pathname = usePathname(); // Track the current route

  useEffect(() => {
    const TAIL_LENGTH = 20;
    let mouseX = 0;
    let mouseY = 0;
    let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const updateCursor = () => {
      cursorHistory.shift();
      cursorHistory.push({ x: mouseX, y: mouseY });

      for (let i = 0; i < TAIL_LENGTH; i++) {
        const current = cursorHistory[i];
        const next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];

        const xDiff = next.x - current.x;
        const yDiff = next.y - current.y;

        current.x += xDiff * 0.35;
        current.y += yDiff * 0.35;

        if (cursorCirclesRef.current[i]) {
          cursorCirclesRef.current[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${(TAIL_LENGTH - i) / TAIL_LENGTH})`;
        }
      }

      requestAnimationFrame(updateCursor);
    };

    // Cleanup and initialize cursor circles
    const initializeCursorCircles = () => {
      if (cursorRef.current) {
        cursorRef.current.innerHTML = ""; // Clear existing circles
        cursorCirclesRef.current = Array.from({ length: TAIL_LENGTH }).map(() => {
          const div = document.createElement("div");
          div.classList.add("cursor-circle");
          cursorRef.current!.appendChild(div);
          return div;
        });
      }
    };

    initializeCursorCircles();

    // Add mouse event listener
    window.addEventListener("mousemove", onMouseMove);

    // Start cursor animation
    updateCursor();

    // Cleanup on unmount or route change
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (cursorRef.current) {
        cursorRef.current.innerHTML = ""; // Clear circles on cleanup
      }
    };
  }, [pathname]); // Reinitialize on route changes

  return (
    <>
      <div ref={cursorRef} id="cursor">
        <svg xmlns="http://www.w3.org/2000/svg" className="goo" version="1.1" width="100%">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
                result="goo"
              ></feColorMatrix>
              <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
            </filter>
          </defs>
        </svg>
      </div>
      <style jsx global>{`
        :root {
          --cursor-size: 28px;
          --bg: #FAF7EE;
        }

        #cursor {
          position: fixed;
          top: calc(var(--cursor-size) * -0.5);
          left: calc(var(--cursor-size) * -0.5);
          pointer-events: none;
          mix-blend-mode: difference;
          filter: url(#goo);
          z-index: 9999;
        }

        .cursor-circle {
          position: absolute;
          top: 0;
          left: 0;
          width: var(--cursor-size);
          height: var(--cursor-size);
          border-radius: 50%;
          background: var(--bg);
          transform-origin: center center;
        }

        .goo {
          display: none;
        }

        body {
          cursor: none; /* Hide default cursor */
        }
      `}</style>
    </>
  );
};

export default FluidCursor;
