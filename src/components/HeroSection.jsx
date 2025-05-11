import React from 'react';

function HeroSection() {

  return (
    <div
      className="flex flex-col gap-8 justify-center items-center w-full h-[600px] p-5 bg-cover bg-center sm:h-[500px] md:h-[400px] lg:h-[600px]"
      style={{ backgroundImage: "url('/images/homeBg.png')" }}
    >
      <video
        className="w-full max-w-[940px] p-2 mb-2 sm:max-w-[720px] md:max-w-[540px]"
        controls
      >
        <source
          src="https://youtu.be/jtlDoHnEymo?si=TX81Y82-YgD4pXUB"
          type="video/mp4"
        />
      </video>
      <h1 className="text-3xl font-bold mb-4 text-center text-[#e8f0f3] sm:text-2xl md:text-xl">
        Welcome to Bahari Mezani
      </h1>
      <p className="text-lg mb-6 text-center text-[#eef6f9] sm:text-base md:text-sm">
        Innovating Sustainable tomorrow for a Greener Tomorrow
      </p>
      <div className="flex gap-4 justify-center items-center">
        <button
          className="bg-white font-bold text-black py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:bg-[#0077BE] hover:text-white"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default HeroSection;