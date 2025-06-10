import React from 'react';
import { useNavigate } from 'react-router-dom';
function HeroSection() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col gap-8 justify-center items-center w-full h-200 p-5 bg-cover bg-center ]"
      style={{ backgroundImage: "url('/images/homeBg.png')" }}
    >
      <iframe
        className="w-full p-2 m-5 sm:max-w-[940px] md:max-w-[940px]"
        height="480"
        src="https://www.youtube.com/embed/jtlDoHnEymo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h1 className="text-4xl font-bold mb-2 text-center text-white ">
        Welcome to Bahari Mezani
      </h1>
      <p className="text-lg text-3xl mb-6 text-center text-white ">
        Innovating Sustainable tomorrow for a Greener Tomorrow
      </p>
      <div className="flex gap-4 justify-center items-center">
        <button
          className="bg-white font-bold text-black py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:bg-[#0077BE] hover:text-white"
           onClick={() => navigate("/services")}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default HeroSection;