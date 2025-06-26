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
            <ul className="list-disc pl-6 mt-4 text-xl mb-6 text-gray-700">
              <li>Sourced from ocean cages and Lake Victoria</li>
              <li>Includes tilapia, catfish, sea bass, and other species</li>
              <li>Available for local and regional markets</li>
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
            <ul className="list-disc pl-6 mt-4 text-xl mb-6 text-gray-700">
              <li>Carefully sun-dried for preservation </li>
              <li>Ideal for long-distance distribution and wholesale markets</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-center"> 
          <div className="p-4 rounded-lg shadow">
            <h1 className="text-[#009dc4] text-4xl font-bold">Black Soldier Fly (BSF) Products</h1>
            <ul className="list-disc pl-6 mt-4 text-xl mb-6 text-gray-700">
              <li>Larvae used as high-protein fish and poultry feed</li>
              <li>BSF eggs sold to fish and poultry farmers</li>
              <li>Contributes to waste reduction and sustainable feeding systems </li>
            </ul>
          </div>
          <div>
            
            <img src="./images/BSF.jpg"
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
            <ul className="list-disc pl-6 mt-4 text-xl mb-6 text-gray-700">
              <li>Organic eggs and broiler chickens </li>
              <li>Poultry is raised using in-house BSF feed for maximum sustainability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}