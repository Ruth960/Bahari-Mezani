import React from 'react';

function HeroSection() {
  const primaryColor = '#E9D8A6'; // Light Yellow
  const textColorDark = '#001219'; // Dark Teal
  const accentColorHover = '#0077BE'; // Darker Blue

  return (
    <div
      className="flex flex-col gap-8 justify-center items-center w-full py-24"
      style={{ backgroundColor: primaryColor }}
    >
      <div className="text-center p-8">
        <video width="940" height="360" style={{padding: 10, margingBottom:10,}} controls>
          <source src="https://youtu.be/jtlDoHnEymo?si=sKELLY7HrGmINf8P" type="video/mp4" />
        
        </video>
        <h1 className="text-5xl md:text-7xl font-black mb-4" style={{ color: textColorDark }}>
          Welcome to Bahari Mezani
        </h1>
        <p className="text-xl md:text-3xl mb-6" style={{ color: textColorDark }}>
          Innovating Sustainable tomorrow for a Greener Tomorrow
        </p>
        <div className="flex gap-4 items-center justify-center">
          <button
            className="bg-white hover:bg-gray-200 text-accentColor py-3 px-6 rounded-full font-semibold transition duration-300 shadow-md"
            style={{ backgroundColor: '#fff', fontWeight:'bold', color: 'black', ':hover': { backgroundColor: accentColorHover } }}
          >
            Book Now
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default HeroSection;