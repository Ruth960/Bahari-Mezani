export default function Recent() {
  return (
    <div className="m-5 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* Project 1 */}
      <div className="flex flex-col items-center gap-4 p-5 bg-white rounded-lg shadow-md">
        <img
          src="/images/aquaculture.webp"
          alt="Aquaculture"
          className="w-full h-auto rounded-lg"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Aquaculture Development Program</h3>
          <p className="text-sm text-gray-600">
            This program focuses on enhancing fish fingerling hatcheries and sea cage farming
            techniques, ensuring increased fish production while minimizing environmental impact.
          </p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex flex-col items-center gap-4 p-5 bg-white rounded-lg shadow-md">
        <img
          src="/images/aquaponics.webp"
          alt="Community Aquaponics Project"
          className="w-full h-auto rounded-lg"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Community Aquaponics Project</h3>
          <p className="text-sm text-gray-600">
            A transformative initiative that integrates fish farming with hydroponics, providing
            fresh produce and fish to local communities while promoting sustainable practices.
          </p>
        </div>
      </div>

      {/* Project 3 */}
      <div className="flex flex-col items-center gap-4 p-5 bg-white rounded-lg shadow-md">
        <img
          src="/images/waste-management.webp"
          alt="BSF Waste Management"
          className="w-full h-auto rounded-lg"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">BSF Waste Management System</h3>
          <p className="text-sm text-gray-600">
            Our Black Soldier Fly (BSF) farming initiative transforms organic waste into
            high-quality feed, promoting sustainable waste management while providing nutritional
            solutions for aquaculture.
          </p>
        </div>
      </div>

      {/* Project 4 */}
      <div className="flex flex-col items-center gap-4 p-5 bg-white rounded-lg shadow-md">
        <img
          src="/images/waste-to-value.webp"
          alt="Waste-to-Value Program"
          className="w-full h-auto rounded-lg"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Waste-to-Value Program</h3>
          <p className="text-sm text-gray-600">
            This project successfully converted organic waste into valuable compost and BSF larvae,
            enhancing soil health and providing a sustainable protein source for aquaculture.
          </p>
        </div>
      </div>

      {/* Project 5 */}
      <div className="flex flex-col items-center gap-4 p-5 bg-white rounded-lg shadow-md">
        <img
          src="/BahariMezaniPhotos/TRAINING .jpg"
          alt="Community Training Workshops"
          className="w-full h-auto rounded-lg"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Community Training Workshops</h3>
          <p className="text-sm text-gray-600">
            We conduct workshops aimed at educating local fishermen and farmers about sustainable
            practices, helping them adopt innovative techniques for better yield and environmental
            conservation.
          </p>
        </div>
      </div>

      {/* Project 6 */}
      <div className="flex flex-col items-center gap-4 p-5 bg-white rounded-lg shadow-md">
        <img
          src="/images/fish-fingerling.webp"
          alt="Fish Fingerling Hatchery"
          className="w-full h-auto rounded-lg"
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Fish Fingerling Hatchery</h3>
          <p className="text-sm text-gray-600">
            Our state-of-the-art hatchery project has significantly increased local fish fingerling
            availability, supporting sustainable fishing practices and community livelihoods.
          </p>
        </div>
      </div>
    </div>
  );
}