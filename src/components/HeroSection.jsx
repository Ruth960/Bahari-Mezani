import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      video: '/videos/hereorsection vid1.mp4',
      title: 'Welcome to Bahari Mezani',
      description: "Where innovation meets the ocean to sustainably bring fresh fish to your table and empower Kenya's coastal communities."
    },
    {
      video: '/videos/hereorsection vid2.mp4',
      title: 'Welcome to Bahari Mezani',
      description: "Where we use practical, locally adaptable solutions from mobile hatchery kits to Black Soldier Fly (BSF) feed systems to make sustainable aquaculture accessible to coastal farmers, youth, and women across Kenya."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl">
              {slide.description}
            </p>
            {index === 0 && (
              <button
                className="bg-white font-bold text-black py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:bg-[#0077BE] hover:text-white"
                onClick={() => navigate("/services")}
              >
                Book Now
              </button>
            )}
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default HeroSection