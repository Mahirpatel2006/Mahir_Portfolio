import React from "react";
import "./text.css";
import { motion, useScroll, useTransform } from "framer-motion";

import { useMediaQuery } from 'react-responsive';

export default function ThreeScene() {
  const { scrollY } = useScroll();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Set appropriate scroll ranges
  const opacity = useTransform(scrollY, [0, 2900], [0, 8]);
  const x = useTransform(scrollY, [0, 800], [-100, 0]);

  return (
    <div>
      <div className="page-container">
        {/* 3D background */}
        <div className="background-container">
          <iframe
            src="/index.html"
            width="100%"
            height="100%"
            className="background-iframe"
            title="3D Background"
          />
        </div>

        {/* Animated text */}
        <div className={`keyboard ${isMobile ? '' : 'm3'}`}>
          <div className={`relative text-white font-space-grotesk ${isMobile ? '' : 'm1'}`}>
            <div className="min-h-screen flex items-center justify-center px-4 md:px-16">
              <div className="w-full md:w-1/2 space-y-6">
                {/* Main Heading (Name "MAHIR") */}
                <div className="flex flex-wrap justify-center md:justify-start">
                  {["M", "A", "H", "I", "R"].map((letter, index) => (
                    <motion.h1
                      key={index}
                      className="text-6xl md:text-8xl font-extrabold tracking-wide key"
                      style={{ opacity, x }}
                      transition={{ duration: 0.8 }}
                    >
                      {letter}
                    </motion.h1>
                  ))}
                </div>

                {/* Subheading */}
                <motion.h2
                  className="text-2xl md:text-4xl font-light text-center md:text-left"
                  style={{ opacity, x }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Crafting Digital Masterpieces
                </motion.h2>

                {/* Additional Description */}
                <motion.p
                  className="text-base md:text-xl text-gray-300 leading-relaxed text-center md:text-left"
                  style={{ opacity, x }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Where <span className="text-indigo-400 font-semibold">Boundless Creativity</span> Meets{" "}
                  <span className="text-indigo-400 font-semibold">Unmatched Functionality</span>. Crafting
                  and delivering exceptional web solutions that inspire, engage, and exceed expectations.
                </motion.p>
              </div>
            </div>
          </div>

          {/* Decorative Image */}
          {!isMobile && (
            <img
              src="/earth5.png"
              alt="Decorative Earth"
              className="absolute z-50 md:block"
              style={{ top: "49%", left: "68%", width: "60%", height: "70%" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

