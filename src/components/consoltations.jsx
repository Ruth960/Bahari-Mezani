export default function Consoltations(){

    return(
        <div>
            {/* Consoltation Services */}
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

            {/* Packeage subscriptions */}
         <div className="p-5">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Service Packages</h1>
              <p className="text-gray-600">Flexible Solutions for Every Need</p>
            </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Basic Package */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-5">
            <img
              src="/images/starter-1.png"
              alt="Basic Package"
              className="w-46 h-auto mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Basic Package</h3>
            <p className="text-gray-600 mb-4">Ksh.1500</p>
            <ul className="text-gray-600 text-sm mb-4">
              <li>• Initial consultation</li>
              <li>• Basic aquaculture advice</li>
              <li>• Introductory waste management strategies</li>
            </ul>
            <button className="w-full p-2 bg-blue-500 text-white rounded-lg">SELECT</button>
          </div>

          {/* Standard Package */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-5">
            <img
              src="/images/starter-2.png"
              alt="Standard Package"
              className="w-46 h-auto mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Standard Package</h3>
            <p className="text-gray-600 mb-4">Ksh.3000</p>
            <ul className="text-gray-600 text-sm mb-4">
              <li>• Comprehensive consultation</li>
              <li>• Detailed aquaculture planning</li>
              <li>• Advanced waste management solutions</li>
              <li>• Monthly follow-up sessions</li>
            </ul>
            <button className="w-full p-2 bg-blue-500 text-white rounded-lg">SELECT</button>
          </div>

 
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-5">
            <img
              src="/images/starter-3.png"
              alt="Premium Package"
              className="w-46 h-auto mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Premium Package</h3>
            <p className="text-gray-600 mb-4">Ksh5000</p>
            <ul className="text-gray-600 text-sm mb-4">
              <li>• Full-scale consultation services</li>
              <li>• Custom aquaculture and agricultural solutions</li>
              <li>• Ongoing support and monitoring</li>
              <li>• Access to exclusive workshops</li>
            </ul>
            <button className="w-full p-2 bg-blue-500 text-white rounded-lg">SELECT</button>
          </div>
        </div>
      </div>
      </div>
    )

}