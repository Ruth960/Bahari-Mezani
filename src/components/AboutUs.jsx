import React from 'react';

export default function AboutUs() {
  return (
    <div>
      {/* Header Section */}
      <div
        className="flex flex-col items-center justify-center h-[400px] bg-cover  backdrop-opacity-30  tex-grey text-center"
        style={{ backgroundImage: "url('/images/aboutBg.PNG')" }}
      >
        <h1 className="text-4xl font-bold  mb-4">Welcome to Bahari Mezani</h1>
        <p>Innovative solution for sustainable Development</p>
      </div>

      <div className="bg-none rounded-lg flex flex-row p-5  mb-10 text-center">
            <div className='flex flex-col items-start w-3/5 h-auto mr-10'>
              <img
                src="/images/Team Members for BM.jpg"
                alt="Team Members"
                className="w-full  h-100  object-fill rounded-lg"
              />
            </div>
            <div className='flex flex-col items-center mt-15 w-1/3'>
              <h2 className="text-2xl font-bold">Empowerment Through Sustainability</h2>
              <p className="text-sm text-left mt-5 text-gray-600">
                At Bahari Mezani, we believe in empowering communities by integrating sustainable 
                practices in agriculture and aquaculture. Our mission is to create innovative solutions that
                 not only support economic growth but also protect the environment..
              </p>
            </div>
            
          </div>

      {/* Meet Our Team Section */}
      <div  >
        <h1 className="text-2xl font-bold text-center mb-4">Meet Our Team</h1>
        <p className="text-center text-gray-600 mb-8">Passionate Innovators for a Sustainable Future</p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-md p-5 text-center">
            <img
              src="public/BahariMezaniPhotos/C.E.O.jpg"
              alt="Alphonce Owiti"
              className="w-full  h-48 object-contain rounded-lg mb-4"
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
                  src="/images/ruth.jpeg"
                  alt="Ruth Wanjiru Mwaniki"
                  className="w-full  h-48 object-contain rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold">Ruth Wanjiru Mwaniki</h2>
                <p className="text-sm text-gray-600">
                  Ruth Wanjiru serves as the CTO, overseeing the online activities to strengthen Bahari Mezani's
                  digital presence. With a background in Computer Science and a passion for technology, she ensures the company's digital platforms are innovative and user-friendly.
                </p>
                </div>

                {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-md p-5 text-center">
            <img
              src="public/BahariMezaniPhotos/m2.jpg"
              alt="Ms. Fatima Ali"
              className="w-full h-48 object-contain rounded-lg mb-4"
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
      
      {/* Our Sustainability Practices Section */}
      <div className=" p-10 rounded-lg mt-10">
        <h1 className="text-2xl font-bold text-center mb-4">Our Sustainability Practices</h1>
        <p className="text-center text-gray-600 mb-8">Innovative and Responsible Approaches</p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">BSF Farming</h2>
            <p className="text-sm text-gray-600">
              Black Soldier Fly (BSF) farming is a cornerstone of our waste management strategy. By converting organic waste into high-quality protein feed, we not only reduce waste but also contribute to sustainable aquaculture.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Advanced Aquaculture Techniques</h2>
            <p className="text-sm text-gray-600">
              We utilize cutting-edge aquaculture practices to enhance fish production. Our fish fingerling hatcheries and sea cage farming operations are designed to maximize yield while minimizing environmental impact.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Circular Economy Models</h2>
            <p className="text-sm text-gray-600">
              Our commitment to a circular economy drives every initiative at Bahari Mezani. We aim to create a closed-loop system that maximizes resource use and minimizes waste in agricultural practices.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Community-Centric Approaches</h2>
            <p className="text-sm text-gray-600">
              We prioritize community involvement in our sustainability practices. By engaging local populations, we ensure our initiatives are relevant and beneficial, fostering a sense of ownership and responsibility towards environmental conservation.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
