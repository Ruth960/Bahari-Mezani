import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image: './images/h1.jpeg',
    title: 'Welcome to Bahari Mezani',
    description:
      "Where innovation meets the ocean to sustainably bring fresh fish to your table and empower Kenya's coastal communities.",
    button: true,
  },
  {
    image: './images/h2.jpeg',
    title: 'Explore Our Services',
    description:
      "Discover a range of services designed to enhance your experience and support sustainable practices.",
    button: false,
  },
];

export default function HeroSection() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={slide.image}
            alt={`Slide ${index + 1}`}
          />
          <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl">
              {slide.description}
            </p>
            {slide.button && (
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
