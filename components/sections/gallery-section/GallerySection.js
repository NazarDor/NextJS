import Image from "next/image";
import styles from "./GallerySection.module.css";
import { motion } from "framer-motion";

export default function GallerySection() {
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    hidden: {},
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <motion.div
      className={styles.gallery_section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className={styles.gallery_container}>
        <motion.div className={styles.imgWrapper_1} variants={itemVariants}>
          <Image
            src="/gallery/Photo1.png"
            alt="Photo 1"
            className={styles.img}
            width={270}
            height={160}
          />
        </motion.div>
        <motion.div className={styles.imgWrapper_2} variants={itemVariants}>
          <Image
            src="/gallery/Photo2.png"
            alt="Photo 2"
            className={styles.img}
            width={364}
            height={612}
          />
        </motion.div>
        <motion.div className={styles.imgWrapper_3} variants={itemVariants}>
          <Image
            src="/gallery/Photo3.png"
            alt="Photo 3"
            className={styles.img}
            width={364}
            height={222}
          />
        </motion.div>
        <motion.div className={styles.imgWrapper_4} variants={itemVariants}>
          <video
            className={styles.video}
            src="/gallery/video4.mp4"
            muted
            loop
            playsInline
            autoPlay
          />
        </motion.div>
        <motion.div className={styles.imgWrapper_5} variants={itemVariants}>
          <Image
            src="/gallery/Photo5.png"
            alt="Photo 5"
            className={styles.img}
            width={200}
            height={160}
          />
        </motion.div>
        <motion.div className={styles.imgWrapper_6} variants={itemVariants}>
          <Image
            src="/gallery/Photo6.png"
            alt="Photo 6"
            className={styles.img}
            width={364}
            height={222}
          />
        </motion.div>
        <motion.div className={styles.imgWrapper_7} variants={itemVariants}>
          <Image
            src="/gallery/Photo7.png"
            alt="Photo 7"
            className={styles.img}
            width={87}
            height={185}
          />
        </motion.div>
        <motion.div className={styles.imgWrapper_8} variants={itemVariants}>
          <Image
            src="/gallery/Photo8.png"
            alt="Photo 8"
            className={styles.img}
            width={205}
            height={306}
          />
        </motion.div>
        <motion.div className={styles.imgWrapper_9} variants={itemVariants}>
          <Image
            src="/gallery/Photo9.png"
            alt="Photo 9"
            className={styles.img}
            width={230}
            height={153}
          />
        </motion.div>
        <motion.div
          className={styles.industries}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={slideInLeft}
        >
          <div className={styles.industries_title}>Industries we work with</div>
          <ul className={styles.industries_list}>
            <li>TRAVEL & HOSPITALITY</li>
            <li>REAL ESTATE</li>
            <li>DESIGN & ARCHITECTURE</li>
          </ul>
        </motion.div>
        <motion.div
          className={styles.quote}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={slideInRight}
        >
          <div>
            ‘The artist’s retreat’ is the best way to describe Vanka’s overall
            aura. The brand is tasteful in a raw, unfiltered way.
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
