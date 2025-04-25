import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltH, faExchangeAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';

function ImpactDiagram() {
  const primaryColor = '#E9D8A6'; // Light Yellow
  const secondaryColor = '#29ABE2'; // Bright Blue

  const impactDiagramData = [
    {
      title: 'Directly Connects',
      description: 'We create direct pathways for local fisherfolks to sell their fresh catch, increasing their market access and income.',
      icon: faArrowsAltH,
      color: secondaryColor,
    },
    {
      title: 'Facilitates Efficient Trade',
      description: 'Our platform simplifies the buying and selling of seafood, reducing waste and ensuring a faster route to market for fresh produce.',
      icon: faExchangeAlt,
      color: primaryColor,
    },
    {
      title: 'Fosters Sustainable Growth',
      description: 'By promoting transparency and empowering local fisherfolks, we contribute to the sustainable growth of Kenya\'s blue economy and the well-being of coastal communities.',
      icon: faChartLine,
      color: secondaryColor,
    },
  ];

  return (
    <div className="mt-20 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8" style={{ color: secondaryColor }}>
        Our Impact: How We Create Change
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {impactDiagramData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="rounded-full w-24 h-24 flex items-center justify-center text-white text-3xl shadow-md"
              style={{ backgroundColor: item.color }}
            >
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2" style={{ color: secondaryColor }}>
              {item.title}
            </h4>
            <p className="text-gray-700 text-center">{item.description}</p>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default ImpactDiagram;