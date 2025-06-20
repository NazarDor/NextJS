"use client";

import Image from "next/image";
import styles from "./AboutSection.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.about_container}>
      <motion.div
        className={styles.imgWrapper}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/AboutSection.png"
          alt="AboutSection logo"
          className={styles.img}
          style={{ objectFit: "cover" }}
          fill
        />
      </motion.div>

      <motion.div
        className={styles.about_info}
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: 100, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className={styles.about_title}>WE CRAFT WAYS TO</div>
        <div className={styles.about_desc}>
          deliver a cohesive, powerful brand message online and in real life
        </div>
      </motion.div>
    </div>
  );
}
