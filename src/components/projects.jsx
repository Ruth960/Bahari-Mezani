import React from 'react';
import RecentProjects from '../components/recentProjects';

export default function Projects() {
  return (
    <div>
      {/* Header Section */}
      <div
        className="bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-white text-center p-5"
        style={{ backgroundImage: "url('/images/projectsBg.PNG')" }}
      >
        <h1 className="text-4xl font-bold mb-4">Innovative Projects for Sustainable Growth</h1>
        <p className="text-lg">Transforming Communities Through Sustainable Practices</p>
      </div>

      {/* Content Section */}
      <div className="text-center p-5">
        <h2 className="text-2xl font-bold mb-4">Current Sustainable Initiatives</h2>
        <p className="text-lg mb-6">
          Empowering local communities through innovative agricultural and aquaculture projects.
        </p>

        {/* Projects Section */}
        <RecentProjects />
      </div>
    </div>
  );
}