import React from "react";

const listings = [
  {
    id: 1,
    name: "Tilapia",
    quantity: "10kg",
    price: "Ksh 350/kg",
    status: "Available",
  },
];

const orders = [
  {
    id: 1,
    buyer: "John Doe",
    quantity: "5kg",
    total: "Ksh 1750",
    status: "Pending",
  },
];

const FishermanDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome, Fisherman Mike 👋</h2>

        {/* Fish Listings */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-3">Your Current Listings:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {listings.map((fish) => (
              <div
                key={fish.id}
                className="bg-white p-4 rounded-lg shadow border border-gray-200"
              >
                <div className="text-lg font-bold">🐟 {fish.name}</div>
                <p className="text-sm mt-1">Qty: {fish.quantity}</p>
                <p className="text-sm">Price: {fish.price}</p>
                <p className="text-sm text-green-600 font-medium mt-1">
                  Status: {fish.status}
                </p>
                <div className="flex gap-3 mt-4">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Orders */}
        <section>
          <h3 className="text-xl font-semibold mb-3">🧾 Recent Orders:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {orders.map((order) => (
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
                  Buyer: {order.buyer} | {order.quantity} Ordered
                </p>
                <p className="text-sm mt-1">Total: {order.total}</p>
                <div className="flex gap-3 mt-4">
                  <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm">
                    Accept
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm">
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FishermanDashboard;
