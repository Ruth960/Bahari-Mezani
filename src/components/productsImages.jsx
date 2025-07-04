const imageData = [
    { src: "./images/Tilapia.jpeg", alt: "Tilapia", name: "Tilapia" },
    { src: "./images/Catfish.jpeg", alt: "Catfish", name: "Catfish" },
    { src: "./images/Seabass.jpeg", alt: "Seabass", name: "Seabass" },
    { src: "./images/Tuna.jpeg", alt: "Tuna", name: "Tuna" },
    { src: "./images/Salmon.jpeg", alt: "Salmon", name: "Salmon" },
    { src: "./images/Dorado.jpeg", alt: "Dorado", name: "Dorado" },
    { src: "./images/Nileperch.jpeg", alt: "Nile Perch", name: "Nile Perch" },
    
];

export default function ProductsImages() {
  return (
    <div className="mt-20 container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imageData.map((image, index) => (
          <div key={index} className="relative">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-48 object-cover rounded-lg" 
            />
            <p className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-1 text-sm rounded-tl-lg">
              {image.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}