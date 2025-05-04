import React from 'react';

export default function AboutUs() {
  return (
    <div>
      {/* Header Section */}
      <div
        style={{
          color: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '400px',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZpc2glMjBpbWFnZXxlbnwwfHx8fDE2OTI3NTY1NzE&ixlib=rb-4.0.3&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', padding: 10 }}>
          Welcome to Bahari Mezani
        </h1>
        <p>Innovative solution for sustainable Development</p>
      </div>

      {/* Meet Our Team Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: 20,
          margin: 10,
          backgroundColor: '#F9F9F9',
        }}
      >
        <h1 style={{ fontSize: 28, textAlign: 'center', fontWeight: 'bold' }}>
          Meet Our Team
        </h1>
        <p style={{ textAlign: 'center', color: 'grey' }}>
          Passionate Innovators for a Sustainable Future
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 20,
          }}
        >
          {/* Team Member 1 */}
          <div
            style={{
              width: '300px',
              textAlign: 'center',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              
              padding: '20px',
            }}
          >
            <img
              src="public/BahariMezaniPhotos/C.E.O.jpg"
              alt="Alphonce Owiti"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '10px',
              }}
            />
            <h2 style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
              Alphonce Owiti
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'grey' }}>
              As the founder and CEO, Alphonce Owiti brings over 15 years of
              experience in sustainable development. His expertise in
              aquaculture and environmental science drives the strategic vision
              of Bahari Mezani.
            </p>
          </div>

          {/* Team Member 2 */}
          <div
            style={{
              width: '300px',
              textAlign: 'center',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '20px',
            }}
          >
            <img
              src="public/BahariMezaniPhotos/b4.jpg"
              alt="Mr. Juma Karanja"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '10px',
              }}
            />
            <h2 style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
              Mr. Juma Karanja
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'grey' }}>
              Mr. Karanja serves as the Operations Manager, overseeing the
              implementation of our innovative practices. His background in
              fisheries management ensures that our projects align with both
              community needs and environmental goals.
            </p>
          </div>

          {/* Team Member 3 */}
          <div
            style={{
              width: '300px',
              textAlign: 'center',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '20px',
            }}
          >
            <img
              src="public/BahariMezaniPhotos/m2.jpg"
              alt="Ms. Fatima Ali"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '10px',
              }}
            />
            <h2 style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
              Ms. Fatima Ali
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'grey' }}>
              As the Community Engagement Officer, Ms. Ali plays a crucial role
              in building relationships with local stakeholders. Her passion
              for community development helps Bahari Mezani remain responsive
              to the needs of those we serve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
