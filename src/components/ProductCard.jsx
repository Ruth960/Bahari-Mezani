import React from 'react';

export default function ProductCard({ product }) {
  const { title, description, features, imageSrc, imageAlt, imageLeft } = product;

  const imageBox = (
    <div className="w-full md:w-3/8">
        <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-auto object-cover rounded-lg" 
        />
    </div>
  );

  const descriptionBox = (
    <div className="w-full md:w-5/8 p-4">
        <h1 className="text-[#009dc4] text-4xl font-bold">{title}</h1>
        <p className="mt-4 text-xl text-gray-700">{description}</p>
        <ul className="list-disc pl-6 mt-4 text-xl mb-6 text-gray-700">
            {features.map((feature, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
            ))}
        </ul>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row items-center mt-10 max-w-6xl mx-auto gap-8">
      {imageLeft ? (
        <>
            {imageBox}
            {descriptionBox}
        </>
      ) : (
        <>
            {descriptionBox}
            {imageBox}
        </>
      )}
    </div>
  );
}