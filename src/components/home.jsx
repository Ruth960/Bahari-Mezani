import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        {/* Sustainable Aquaculture Solutions */}
        <div
          className="relative bg-cover bg-center h-84 flex items-center justify-center text-white text-center"
          style={{
            backgroundImage: "url('/images/fish-tanks.jpg')",
          }}
        >
          <div>
            <h2 className="text-2xl font-bold">Sustainable Aquaculture Solutions</h2>
            <p className="mt-2">Innovative practices for responsible fish farming.</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => navigate("/services")}
            >
              View Services
            </button>
          </div>
        </div>

        {/* Organic Waste Management */}
        <div
          className="relative bg-cover bg-center h-84 flex items-center justify-center text-white text-center"
          style={{
            backgroundImage: "url('/images/waste-management.webp')",
          }}
        >
          <div>
            <h2 className="text-2xl font-bold">Organic Waste Management</h2>
            <p className="mt-2">Turning waste into resources for a sustainable future.</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => navigate("/learn-more")}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Community Engagement Programs */}
        <div
          className="relative bg-cover bg-center h-84 w1/4 flex items-center justify-center text-white text-center"
          style={{
            backgroundImage: "url('/images/tree.jpg')",
          }}
        >
          <div>
            <h2 className="text-2xl font-bold">Community Engagement Programs</h2>
            <p className="mt-2">
              Empowering local communities through education and resources.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => navigate("/learn-more")}
            >
              Get Involved
            </button>
          </div>
        </div>

        {/* Research and Development */}
        <div
          className="relative bg-cover bg-center h-84 flex items-center justify-center text-white text-center"
          style={{
            backgroundImage: "url('/images/M4.jpg')",
          }}
        >
          <div>
            <h2 className="text-2xl font-bold">Research and Development</h2>
            <p className="mt-2">
              Pioneering innovative solutions through continuous research.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => navigate("/learn-more")}
            >
              Discover More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}