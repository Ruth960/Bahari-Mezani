
export default function AboutUs(){

  return(
    <div className="mt-20 custom-center"> 
      
      <h1 className="text-6xl text-[#009dc4] text-center">Who We Are</h1>

      <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto items-center">
          <div className="p-4 rounded-lg  shadow text-xl">
            <p className="p-2  leading-relaxed ">
              Bahari Mezani Ltd (formerly MESUCT HUB) is a Kenya-based fish processing and 
              marketing company committed to delivering high-quality seafood and Fresh fish products 
              while transforming lives across fishing communities. We specialize in both fresh and dry 
              fish, mainly sourced from ocean and Lake Victoria , ensuring freshness, safety, and 
              sustainability.
            </p>
            <p className="p-2 leading-relaxed ">
              With a business model that integrates circular economy principles, we are more than just a 
                fish supplier — we are a driver of economic empowerment and environmental stewardship. 
            </p>
          </div>
          <div>
           
            <img src="./logo2.png"
              alt="Group Photo"
              className="w-full h-auto object-cover rounded-lg mb-4" />
          </div>
        </div>

        {/* Vission and Mission */}
        <div className=" py-16 mt-20 text-center"> 
      <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-6xl px-4"> 
        {/* Our Vision Section */}
        <div className="w-full  md:w-1/2 text-left">
          <h2 className="text-5xl font-extrabold text-[#009dc4] mb-6">Our Vision</h2> 
          <p className="text-xl text-black leading-relaxed"> 
            To be a leading supplier of sustainable seafood and fresh fish
            in East Africa while building thriving coastal economies through
            innovation and inclusivity.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="w-full md:w-1/2 text-left"> 
          <h2 className="text-5xl font-extrabold text-[#009dc4] mb-6">Our Mission</h2> 
          <p className="text-xl text-black leading-relaxed"> 
            To provide high-quality fish and seafood products through
            sustainable aquaculture, while supporting small-scale fishers and
            protecting marine ecosystems.
          </p>
        </div>
      </div>
    </div>

    </div>
  )

}
