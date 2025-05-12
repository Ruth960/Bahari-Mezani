export default function Services() {
  return (
    <div>
      {/* Header Section */}
      <div
        className="bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: "url('/images/servicesBg.PNG')" }}
      >
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg">Innovative Solutions for a Sustainable Future</p>
      </div>

      {/* Aquaculture Services Section */}
      <div className="p-5">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Aquaculture Services</h1>
          <p className="text-gray-600">Sustainable and Innovative Fish Farming Techniques</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/images/hatcheries.PNG"
              alt="Fish Fingerling Hatcheries"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Fish Fingerling Hatcheries</h3>
              <p className="text-gray-600">
                Our hatcheries utilize advanced techniques to produce high-quality fish fingerlings,
                ensuring a sustainable supply for local aquaculture operations.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/images/seaCages.PNG"
              alt="Sea Cage Farming"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Sea Cage Farming</h3>
              <p className="text-gray-600">
                We implement cutting-edge sea cage farming methods that promote optimal growth
                conditions while minimizing environmental impact.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/images/aquacultureIntergratedSystem.PNG"
              alt="Integrated Aquaculture Systems"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Integrated Aquaculture Systems</h3>
              <p className="text-gray-600">
                Our integrated systems combine aquaculture with other agricultural practices to
                enhance productivity and sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Innovative Agriculture Section */}
      <div className="p-5">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Innovative Agriculture</h1>
          <p className="text-gray-600">Transforming Farming For a Sustainable Future</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-col">
            <img
              src="/images/blackSoldier.PNG"
              alt="Black Soldier Fly Farming"
              className="w-full p-1 h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Black Soldier Fly Farming</h3>
              <p className="text-gray-600">
                We utilize BSF farming to convert organic waste into high-quality protein feed,
                promoting a circular economy and reducing waste disposal challenges.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-col">
            <img
              src="/images/composite.PNG"
              alt="Composting Techniques"
              className="w-full p-1 h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Composting Techniques</h3>
              <p className="text-gray-600">
                Our composting services transform organic waste into nutrient-rich compost,
                enhancing soil health and promoting sustainable agricultural practices.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden  flex flex-col md:flex-col">
            <img
              src="/images/wasteToenergy.PNG"
              alt="Waste-to-Energy Solutions"
              className="w-full p-1 h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Waste-to-Energy Solutions</h3>
              <p className="text-gray-600">
                We develop waste-to-energy systems that convert organic waste into renewable energy,
                contributing to energy sustainability and reduced emissions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Services Section */}
      <div className="p-5 m-10 w-3/4 mx-auto">
        <div className="text-center mb-8 ">
          <h1 className="text-3xl font-bold">Consultation Services</h1>
          <p className="text-gray-600">Expert Guidance for Sustainable Practices</p>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
          <img
            src="/Discussion.jpg"
            alt="Consultation Services"
            className="w-100 md:w-1/2 h100 object-cover p-10"
          />
          <div className="p-10">
            <h3 className="text-xl font-bold mb-2">Sustainable Development Consultation</h3>
            <p className="text-gray-600">
              Our team of experts provides insights and strategies for implementing sustainable
              practices in agriculture and aquaculture, tailored to your specific needs.
            </p>
            <input
              type="datetime-local"
              className="w-full p-2 border border-gray-300 rounded-lg mb-2"
            />
            <p className="text-sm text-gray-500">Event time zone: Africa/Nairobi GMT+08:00</p>
            <button className="w-full p-2 bg-blue-500 text-white rounded-lg">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
