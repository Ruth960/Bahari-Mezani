import React from 'react';

function HeroSection() {
   
  const textColorDark = '#001219'; 
  const accentColorHover = '#0077BE'; 

  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '600px', 
      padding: '20',
      backgroundImage: "url('/images/homeBg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <video
          width="940"
          height="360"
          style={{
            padding: 10,
            marginBottom: 10,
          }}
          controls
        >
          <source src="https://youtu.be/jtlDoHnEymo?si=TX81Y82-YgD4pXUB" type="video/mp4" />
        </video>
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: '900',
            marginBottom: '1rem',
            color: textColorDark,
          }}
        >
          Welcome to Bahari Mezani
        </h1>
        <p
          style={{
            fontSize: '1.25rem',
            marginBottom: '1.5rem',
            color: textColorDark,
          }}
        >
          Innovating Sustainable tomorrow for a Greener Tomorrow
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            style={{
              backgroundColor: '#fff',
              fontWeight: 'bold',
              color: 'black',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = accentColorHover)}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#fff')}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;