"use client";

import Image from "next/image";
import styles from "./HeroSection.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const fadeIn = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.2, duration: 0.6 },
    }),
  };
  const MotionImage = motion(Image);

  return (
    <div className={styles.hero_container} ref={ref}>
      <div className={styles.imgWrapper}>
        <MotionImage
          src="/HeroSection.jpg"
          alt="HeroSection logo"
          className={styles.img}
          style={{ objectFit: "cover" }}
          fill
          initial={{ opacity: 0, scale: 1.05 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }
          }
          transition={{ duration: 1 }}
        />
        <MotionImage
          className={styles.phoneImgWrapper}
          src="/PhoneInterf.png"
          alt="PhoneInterf logo"
          width={240}
          height={300}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }
          }
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        className={styles.hero_info}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
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
                custom={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={itemVariants}
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
