export default function ProductsImages() {
  return (
    <div className="flex flex-wrap justify-center mt-20 gap-1 p-4">
     
      <div className="relative w-58 h-58">
        <img src="./images/Tilapia.jpeg" alt="Tilapia" className="w-full h-full object-cover" />
        <p className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-1 text-sm">Tilapia</p>
      </div>
      <div className="relative w-58 h-58">
        <img src="./images/Catfish.jpeg" alt="Catfish" className="w-full h-full object-cover" />
        <p className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-1 text-sm">Catfish</p>
      </div>

      <div className="relative w-58 h-58">
        <img src="./images/Seabass.jpeg" alt="Seabass" className="w-full h-full object-cover" />
        <p className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-1 text-sm">Seabass</p>
      </div>
      <div className="relative w-58 h-58">
        <img src="./images/Tuna.jpeg" alt="Tuna" className="w-full h-full object-cover" />
        <p className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-1 text-sm">Tuna</p>
      </div>
      <div className="relative w-58 h-58">
        <img src="./images/Salmon.jpeg" alt="Salmon" className="w-full h-full object-cover" />
        <p className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-1 text-sm">Salmon</p>
      </div>

      <div className="relative w-58 h-58">
        <img src="./images/Dorado.jpeg" alt="Dorado" className="w-full h-full object-cover" />
        <p className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-1 text-sm">Dorado</p>
      </div>
    </div>
  );
}