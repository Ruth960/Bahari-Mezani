import React from "react";

const listings = [
  {
    id: 1,
    name: "Tilapia",
    price: "Ksh 350/kg",
    quantity: "20kg",
    image: "https://via.placeholder.com/150", // Replace with real image later
    seller: "Fisherman A",
  },
];

const recentOrders = [
  {
    id: 1,
    fish: "Nile Perch",
    quantity: "3kg",
    total: "Ksh 1050",
    status: "Pending",
  },
];

export default function BuyerDashboard(){
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-6">Welcome, Buyer Jane 👋</h2>

        {/* Available Listings */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-3">🐟 Available Fish Listings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((fish) => (
              <div
                key={fish.id}
                className="bg-white p-4 rounded-lg shadow border border-gray-200"
              >
                <img
                  src={fish.image}
                  alt={fish.name}
                  className="w-full h-40 object-cover rounded"
                />
                <div className="mt-3">
                  <div className="font-bold text-lg">{fish.name}</div>
                  <p className="text-sm text-gray-700">
                    Price: {fish.price}
                  </p>
                  <p className="text-sm text-gray-700">
                    Qty Available: {fish.quantity}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Seller: {fish.seller}
                  </p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 w-full">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Orders */}
        <section>
          <h3 className="text-xl font-semibold mb-3">📦 My Recent Orders</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className={`p-4 rounded-lg shadow border ${
                  order.status === "Pending"
                    ? "border-yellow-300 bg-yellow-50"
                    : order.status === "Accepted"
                    ? "border-green-300 bg-green-50"
                    : "border-red-300 bg-red-50"
                }`}
              >
                <p className="text-md font-medium">
                  Fish: {order.fish} | {order.quantity}
                </p>
                <p className="text-sm mt-1">Total: {order.total}</p>
                <p className="text-sm font-semibold mt-2">Status: {order.status}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

;
