"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./PhoneSection.module.css";

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
    const newIndex = swiper.activeIndex;

    videoRefs.current.forEach((vid, i) => {
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
  }, []);

  return (
    <div className={styles.phone_container}>
      <div className={styles.phone_info}>
        <div className={styles.phone_text}>
          <div className={styles.phone_title}>WE HELP CLIENTS</div>
          <div className={styles.phone_desc}>
            live successfully between the real world and online.
          </div>
        </div>

        <div className={styles.phone_animation}>
          <div className={styles.imgWrapper}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
              navigation
              pagination={{ clickable: true }}
              className={styles.swiper}
            >
              {videoSources.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.video_wrapper}>
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={src}
                      loop
                      muted
                      playsInline
                      className={styles.video}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
