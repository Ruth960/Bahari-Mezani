import React from "react";
import { fishListingsData } from "../../data";

const fishData = [
  {
    name: "Rainbow Trout",
    fisherman: "Mountain Stream Fishery",
  },
  {
    name: "Atlantic Mackerel",
    fisherman: "East Coast Fishers",
  },
  {
    name: "Pacific Halibut",
    fisherman: "Pacific Northwest Catch",
  },
  // Add more fish entries here...
];

export default function FishListings() {
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Fish Listings</h1>
      <p className="text-gray-600 mb-6">
        Browse fresh fish directly from local fishermen
      </p>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by fish name or fisherman…"
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <div className="flex gap-2 items-center">
          <select className="px-3 py-2 border border-gray-300 rounded-md">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
          <button className="border p-2 rounded-md bg-gray-100">📦</button>
          <button className="border p-2 rounded-md bg-gray-100">
            ⚙️ Filters
          </button>
        </div>
      </div>

      <p className="mb-4 text-sm text-gray-500">
        Showing {fishData.length} of {fishData.length} listings
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {fishListingsData.map((fish, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col"
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
    </div>
  );
}
