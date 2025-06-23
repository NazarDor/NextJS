"use client";

import Image from "next/image";
import styles from "./HeroSection.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const MotionImage = motion.create(Image);

  return (
    <div className={styles.hero_container} ref={ref}>
      <div className={styles.imgWrapper}>
        <MotionImage
          src="/HeroSection.svg"
          alt="HeroSection logo"
          className={styles.img}
          style={{ objectFit: "cover" }}
          width={1920}
          height={880}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }
          }
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        className={styles.hero_info}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.hero_text}>
          <b>branding, design, dev</b> for luxury brands
        </div>

        <div className={styles.hero_items}>
          {["WELCOME", "SERVICES", "PROJECTS", "INDUSTRIES"].map(
            (text, index) => (
              <motion.div
                key={index}
                className={styles.hero_item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
              >
                {text}
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
}
