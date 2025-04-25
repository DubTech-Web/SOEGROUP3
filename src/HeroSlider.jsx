import React, { useState, useEffect } from "react";

const images = [
  "src/assets/IMG_5881.jpg",
  "src/assets/IMG_5883.jpg",
  "src/assets/IMG_5886.jpg",
  "src/assets/IMG_5889.jpg",
  "src/assets/IMG_5903.jpg",
  "src/assets/IMG_5905.jpg",
  "src/assets/IMG_5911.jpg",
  "src/assets/IMG_5918.jpg",
  "src/assets/IMG_5924.jpg",
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[100vh] relative overflow-hidden">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0  opacity-60 bg-black"></div>

      {/* Optional Text on top */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-4xl font-bold text-blue-600">
        <h1 className="text-white text-xl sm:text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-lg text-center px-4">
          Cisco Impact Summit 2025 <br />
          <span className="text-sm font-medium">
            Parallel & Distributed Computing Workshop
          </span>
        </h1>
      </div>
    </div>
  );
}
