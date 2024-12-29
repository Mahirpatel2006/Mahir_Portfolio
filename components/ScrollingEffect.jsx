"use client";
import ThreeScene from "../components/ThreeScene";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./ScrollingEffect.module.css";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollingEffect() {
  useEffect(() => {
    const zoomScale = 6.5; // Adjust zoom amount (e.g., 1.5 for less zoom, 3 for more zoom)
    const scrollDuration = "200%"; // Adjust scroll duration (e.g., "100%", "300%")

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.wrapper}`,
        start: "top top", // Start animation when the top of the wrapper reaches the viewport's top
        end: `+=${scrollDuration}`, // Control the scrollable range for zoom effect
        pin: true, // Pin the container during the animation
        scrub: 1, // Smooth scrubbing
      },
    });

    // Zoom effect on the image container
    timeline.to(`.${styles.imageContainer} img`, {
      scale: zoomScale, // Control zoom level
      ease: "power1.inOut", // Smooth ease effect
    });

    // Fade in the ThreeScene component as the user scrolls
    timeline.to(
      `.${styles.threeSceneContainer}`,
      {
        opacity: 1, // Fade in ThreeScene
        duration: 1,
        ease: "power1.inOut",
      },
      "<" // Start this animation at the same time as the zoom
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



  

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <section className={`${styles.section} ${styles.hero}`}></section>

        {/* ThreeScene component */}
        <div className={styles.threeSceneContainer}>
        
          <ThreeScene />
        </div>
        
        {/* <section className={`${styles.section} ${styles.gradientPurple}`}></section> */}
      </div>
       <div className={styles.imageContainer}>
        <img src="/hero-image.webp" alt="mainimage" />
      </div> 
      
    </div>
  );
}
