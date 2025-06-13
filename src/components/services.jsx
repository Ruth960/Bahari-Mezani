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
              src="/images/blackSoldier.PNG"
              alt="Integrated Aquaculture Systems"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Black Soldier Fly Farming</h3>
              <p className="text-gray-600">
                We utilize BSF farming to convert organic waste into high-quality protein feed,
                promoting a circular economy and reducing waste disposal challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
