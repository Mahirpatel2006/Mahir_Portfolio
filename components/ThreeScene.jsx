import React from "react";
import "./text.css";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./Navbar";
import ButtonWithHoverEffect from "./ButtonWithHoverEffect";

export default function ThreeScene() {
  const { scrollY } = useScroll();

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
      <div className="keyboard m3">
        <div className="relative text-white font-space-grotesk m1">
          <div className="h-screen flex items-center justify-center px-8 md:px-16">
            <div className="w-full md:w-1/2 space-y-6">
              {/* Main Heading (Name "Mahir") */}
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

              {/* Subheading */}
              <motion.h2
                className="text-3xl md:text-4xl font-light"
                style={{ opacity, x }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Crafting Digital Masterpieces
              </motion.h2>

              {/* Additional Description */}
              <motion.p
                className="text-lg md:text-xl text-gray-300 leading-relaxed"
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
      <img
          src="/earth5.png"
          alt="Decorative Earth"
          className="absolute z-50"
          style={{ top: "49%", left: "68%", width: "60%", height: "70%" }}
        />
         
      </div>
    </div>
    </div>
  );
}
