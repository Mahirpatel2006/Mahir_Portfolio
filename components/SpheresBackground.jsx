import React, { useEffect, useRef } from 'react';
// import Spheres2Background from 'threejs-components/build/backgrounds/spheres2'; // Import the background
import Spheres2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.8/build/backgrounds/spheres2.cdn.min.js';
const SpheresBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Initialize the Three.js background
    const bg = Spheres2Background(canvas, {
      count: 200,
      colors: [0xff0000, 0x0, 0xffffff],
      minSize: 0.5,
      maxSize: 1,
    });

    // Function to change colors, exposed globally
    window.changeColors = () => {
      bg.spheres.setColors([
        0xffffff * Math.random(),
        0xffffff * Math.random(),
        0xffffff * Math.random(),
      ]);
      bg.spheres.light1.color.set(0xffffff * Math.random());
    };

    // Handle click to pause or resume the background animation
    const handleClick = (ev) => {
      if (ev.target.id !== 'colors-btn') bg.togglePause();
    };

    document.body.addEventListener('click', handleClick);

    return () => {
      // Cleanup: remove event listener and destroy the background
      document.body.removeEventListener('click', handleClick);
      bg.destroy();
    };
  }, []);

  return <canvas id="webgl-canvas" ref={canvasRef}></canvas>;
};

export default SpheresBackground;
