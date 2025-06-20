"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./VideoSection.module.css";
import { motion, AnimatePresence } from "framer-motion";
import cn from "classnames";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleToggle = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <video
        ref={videoRef}
        className={`${styles.backgroundVideo} ${
          isPlaying ? styles.show : styles.hidd
        }`}
        src="/VideoThumbnail.mp4"
        muted
        loop
        playsInline
      />
      <div className={styles.video_container}>
        <div className={styles.video_info}>
          <motion.div
            className={styles.video_text}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <div className={styles.video_title}>A FUTURE-FOCUSED</div>
            <div className={styles.video_desc}>
              balance of advanced technology and distinctive style
            </div>
          </motion.div>

          <div className={styles.imgWrapper} onClick={handleToggle}>
            <div className={styles.mask}>
              {!isPlaying && (
                <video
                  className={`${styles.iphoneVideo} ${
                    isPlaying ? styles.hidd : styles.show
                  }`}
                  src="/VideoThumbnail.mp4"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              )}
            </div>

            <div className={cn(styles.image, { [styles.fadeOut]: isPlaying })}>
              {!isPlaying && (
                <div
                  className={cn(styles.thalassa_block, {
                    [styles.fadeOut]: isPlaying,
                  })}
                >
                  <div className={styles.thalassa_welcome}>WELCOME TO</div>
                  <div className={styles.thalassa_title}>THALASSA</div>
                  <div className={styles.thalassa_actions}>
                    <button className={styles.thalassa_btn}>CHARTER NOW</button>
                    <div className={styles.thalassa_calendar}>
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <rect x="3" y="5" width="18" height="16" rx="4" />
                        <path d="M16 3v4M8 3v4M3 9h18" />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.thalassa_desc}>
                    We strive to design unforgettable experiences on our
                    luxurious yachts, tailored to different budget levels.
                  </div>
                </div>
              )}
              <Image
                src="/VideoSection.png"
                alt="Phone frame"
                width={250}
                height={500}
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
