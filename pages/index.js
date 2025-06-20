import "../src/app/globals.css";
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/hero-section/HeroSection";
import PhoneSection from "../components/sections/phone-section/PhoneSection";
import AboutSection from "../components/sections/about-section/AboutSection";
import VideoSection from "../components/sections/video-section/VideoSection";
import GallerySection from "../components/sections/gallery-section/GallerySection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <PhoneSection />
      <AboutSection />
      <PhoneSection />
      <VideoSection />
      <GallerySection />
    </div>
  );
}
