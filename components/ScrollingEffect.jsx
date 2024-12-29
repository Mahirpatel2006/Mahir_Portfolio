"use client";

import ThreeScene from "../components/ThreeScene";
import { useEffect, useCallback } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./ScrollingEffect.module.css";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollingEffect() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const setupAnimation = useCallback(() => {
    const zoomScale = isMobile ? 4 : isTablet ? 5 : 6.5;
    const scrollDuration = isMobile ? "150%" : "200%";

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.wrapper}`,
        start: "top top",
        end: `+=${scrollDuration}`,
        pin: true,
        scrub: isMobile ? 0.5 : 1,
      },
    });

    timeline.to(`.${styles.imageContainer} img`, {
      scale: zoomScale,
      ease: "power1.inOut",
    });

    timeline.to(
      `.${styles.threeSceneContainer}`,
      {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile, isTablet]);

  useEffect(() => {
    const cleanup = setupAnimation();
    return cleanup;
  }, [setupAnimation]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <section className={`${styles.section} ${styles.hero}`}></section>
        <div className={styles.threeSceneContainer}>
          <ThreeScene />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="/hero-image.webp" alt="Hero" />
      </div>
    </div>
  );
}

