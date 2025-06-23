"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Parallax, Navigation } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/parallax";
import styles from "./PhoneSection.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const videoSources = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
  ];

  const handleSlideChange = (swiper) => {
    const newIndex =
      swiper.realIndex ?? swiper.activeIndex % videoSources.length;

    videoRefs.current.forEach((vid) => {
      if (vid) {
        vid.pause();
        vid.currentTime = 0;
      }
    });

    const currentVid = videoRefs.current[newIndex];
    if (currentVid) currentVid.play();

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const firstVideo = videoRefs.current[0];
    if (firstVideo) firstVideo.play();

    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.slideNext) {
        swiperRef.current.slideNext();
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };

  const textData = [
    {
      title: "WE HELP CLIENTS",
      desc: "live successfully between the real world and online.",
    },
    {
      title: "UNLOCK DIGITAL VALUE",
      desc: "We connect brands and people through design.",
    },
    {
      title: "FUTURE-READY STRATEGY",
      desc: "Transforming visions into smart experiences.",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className={styles.phone_container}>
      <motion.div
        ref={ref}
        className={styles.phone_info}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, x: 100, y: -100 },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
      >
        <div className={styles.phone_text}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.phone_title}>
                {textData[activeIndex].title}
              </div>
              <div className={styles.phone_desc}>
                {textData[activeIndex].desc}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.phone_animation}>
          <div className={styles.imgWrapper}>
            <Swiper
              modules={[EffectCoverflow, Parallax, Navigation]}
              effect="coverflow"
              grabCursor={false}
              centeredSlides={true}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              loopedSlides={videoSources.length}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 1,
                slideShadows: false,
              }}
              parallax={true}
              speed={1000}
              watchSlidesProgress={true}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
              watchSlidesVisibility={true}
              allowTouchMove={false}
            >
              {videoSources.map((src, index) => (
                <SwiperSlide className={styles.slide} key={`slide-${index}`}>
                  {({ isVisible, isActive }) => (
                    <div
                      className={`${styles.video_wrapper} ${
                        isActive ? styles.active : styles.dimmed
                      }`}
                      data-swiper-parallax="-10"
                    >
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={src}
                        muted
                        loop
                        playsInline
                        className={styles.video}
                      />
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={styles.controls}>
              <div className={styles.dots}>
                {videoSources.map((_, index) => (
                  <span
                    key={index}
                    className={`${styles.dot} ${
                      index === activeIndex ? styles.active : ""
                    }`}
                    onClick={() => swiperRef.current.slideToLoop(index)}
                  />
                ))}
              </div>
              <div className={styles.nav_buttons}>
                <button onClick={() => slideNext()}>→</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
