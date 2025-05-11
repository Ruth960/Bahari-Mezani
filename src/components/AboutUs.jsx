import React from 'react';

export default function AboutUs() {
  return (
    <div>
      {/* Header Section */}
      <div
        className="flex flex-col items-center justify-center h-[400px] bg-cover bg-center text-white text-center"
        style={{ backgroundImage: "url('/images/aboutBg.PNG')" }}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Bahari Mezani</h1>
        <p>Innovative solution for sustainable Development</p>
      </div>

      {/* Meet Our Team Section */}
      <div >
        <h1 className="text-2xl font-bold text-center mb-4">Meet Our Team</h1>
        <p className="text-center text-gray-600 mb-8">Passionate Innovators for a Sustainable Future</p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-md p-5 text-center">
            <img
              src="public/BahariMezaniPhotos/C.E.O.jpg"
              alt="Alphonce Owiti"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold">Alphonce Owiti</h2>
            <p className="text-sm text-gray-600">
              As the founder and CEO, Alphonce Owiti brings over 15 years of experience in sustainable
              development. His expertise in aquaculture and environmental science drives the strategic
              vision of Bahari Mezani.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-md p-5 text-center">
            <img
              src="public/BahariMezaniPhotos/b4.jpg"
              alt="Mr. Juma Karanja"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold">Mr. Juma Karanja</h2>
            <p className="text-sm text-gray-600">
              Mr. Karanja serves as the Operations Manager, overseeing the implementation of our innovative
              practices. His background in fisheries management ensures that our projects align with both
              community needs and environmental goals.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-md p-5 text-center">
            <img
              src="public/BahariMezaniPhotos/m2.jpg"
              alt="Ms. Fatima Ali"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold">Ms. Fatima Ali</h2>
            <p className="text-sm text-gray-600">
              As the Community Engagement Officer, Ms. Ali plays a crucial role in building relationships
              with local stakeholders. Her passion for community development helps Bahari Mezani remain
              responsive to the needs of those we serve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
