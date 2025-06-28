export default function Products() {
  return (
    <div className="mt-20 ml-10 custom-center">
      {/* Heading centered */}
      <h1 className="text-6xl text-[#009dc4] text-center">
        Our Product Range
      </h1>
     
      <div className="flex flex-col items-center"> 
        <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-center">
          <div className="p-4 rounded-lg shadow">
            <h1 className="text-[#009dc4] text-4xl font-bold">Fresh Fish</h1>
            <p className="mt-4 pl-2 text-xl text-gray-700">Sustainably raised in our ocean-based sea cages and Lake Victoria 
              enclosures, our premium-quality fresh fish meets the growing demand for clean, traceable protein.
              </p>
            <ul className="list-disc pl-8 mt-4 text-xl mb-6 text-gray-700">
              <li><strong>Species:</strong> Tilapia, catfish, sea bass, and select seasonal varieties</li>
              <li><strong>Quality Assurance:</strong> Harvested on demand and cold chain–handled for maximum freshness</li>
              <li><strong>Markets Served: </strong>Restaurants, retailers, institutions, and regional distributors</li>
            </ul>
          </div>
          <div>
           
            <img src="./images/fresh-fish.jpg"
              alt="Fresh Fish"
              className="w-full h-68 object-cover rounded-lg mb-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-center"> 
          <div>
            
            <img src="./images/Dry-Fish.jpg"
              alt="Dry Fish"
              className="w-full h-68 object-cover rounded-lg mb-4" />
          </div>
          <div className="p-4 rounded-lg shadow">
            <h1 className="text-[#009dc4] text-4xl font-bold">Dry Fish</h1>
            <p className="mt-4 pl-2 text-xl text-gray-700">
                Naturally preserved for shelf stability and efficient logistics, our sun-dried 
                fish is a favorite across East and Central Africa.
            </p>
            <ul className="list-disc pl-6 mt-4 text-xl mb-6 text-gray-700">
              <li>Carefully sun-dried for preservation </li>
              <li>Packaged for long-distance distribution, reducing spoilage and transport costs</li>
              <li>Ideal for long-distance distribution and wholesale markets</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-center"> 
          <div className="p-4 rounded-lg shadow">
            <h1 className="text-[#009dc4] text-4xl font-bold">Black Soldier Fly (BSF) Products</h1>
            <p className="mt-4 pl-2 text-xl text-gray-700">
                Through our circular waste-to-protein model, we produce insect-based feed and inputs 
                that strengthen food systems from the ground up.
            </p>
            <ul className="list-disc pl-6 mt-4 text-xl mb-6 text-gray-700">
              <li><strong>BSF Larvae:</strong> High-protein feed for aquaculture and poultry sectors</li>
              <li><strong>BSF Eggs & Starter Kits:</strong> Sold to farmers seeking sustainable input solutions</li>
              <li><strong>Environmental Impact:</strong> Helps reduce landfill pressure while lowering feed costs </li>
            </ul>
          </div>
          <div>
            
            <img src="./images/bsf-process.jpg"
              alt="BSF"
              className="w-full h-68 object-cover rounded-lg mb-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-center"> 
          <div>
            
            <img src="./images/eggs.jpg"
              alt="Poutry Farming"
              className="w-full h-68 object-cover rounded-lg mb-4" />
          </div>
          <div className="p-4 rounded-lg shadow">
            <h1 className="text-[#009dc4] text-4xl font-bold">Poutry Products</h1>
            <p className="mt-4 pl-2 text-xl text-gray-700">
                Our integrated farm demonstrates the power of closed-loop systems—where 
                every output powers another productive input.
            </p>
            <ul className="list-disc pl-6 mt-4 text-xl mb-6 text-gray-700">
              <li><strong>Organic Poultry: </strong>Broiler chickens and free-range layers raised using in-house BSF feed </li>
              <li><strong>Egg Production:</strong> Nutritious eggs with traceable feed origin and natural formulation</li>
              <li><strong>Sustainability Edge:</strong> Poultry raised with a carbon-reduced, circular feed system—achieving 
                up to 80% savings on input costs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}