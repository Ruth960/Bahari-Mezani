import { fishListingsData } from "../../data";

export default function ListCards() {
  return (
    <div className="flex gap-6">
      {fishListingsData.map((fish, index) => (
        <div
          key={index}
          className="border border-gray-200 w-[300px] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col"
        >
          <img
            src={fish.image}
            alt={fish.name}
            className="w-full h-40 object-cover cursor-pointer hover:scale-105 transition-transform duration-200"
          />
          <div className="p-4 flex-grow">
            <h2 className="text-lg font-semibold">{fish.name}</h2>
            <p className="text-sm text-gray-600">By {fish.fisherman}</p>
            <p className="text-sm text-gray-800 mt-1">
              Price: <span className="font-medium">Ksh {fish.price}/kg</span>
            </p>
            <p className="text-sm text-gray-800">Qty: {fish.quantity}kg</p>
          </div>
          <div className="px-4 pb-4">
            <button
              onClick={() => handleAddToCart(fish)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 cursor-pointer"
            >
              <i className="fas fa-cart-plus mr-2"></i> Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
