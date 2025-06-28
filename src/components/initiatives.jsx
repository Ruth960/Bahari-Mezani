
export default function Projects(){

    return(
        <div className="custom-center" >
            <div>
                <h1 className="text-6xl text-[#009dc4] text-center text-bold p5">Our Sustainable Innitiatives</h1>
                <h2 className="text-3xl text-[#48bf91] mt-5  text-center">Our Commitment to the Blue and Green Economy </h2>
                <p className=" leading-relaxed text-center p-10 text-xl"> At Bahari Mezani, sustainability is at the heart of everything we do. We understand that a 
                        thriving blue economy depends on a healthy green environment. That’s why we’ve 
                        adopted several eco-conscious initiatives: 
                </p>
            </div>
            <div className="m-5 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                
                <div className="flex flex-col items-center gap-4 p-5 bg-white rounded-lg shadow-md">
                    <img
                        src="/images/mangrove-restoration.jpg"
                        alt="Mangrove Restoration"
                        className="w-full h-auto rounded-lg"
                    />
                    <div>
                            <h3 className="text-xl font-bold mb-2 text-[#009dc4]">Mangrove Restoration</h3>
                            <p className=" text-black">
                                We actively support and participate in mangrove restoration efforts across Kenya’s coastal 
                                region. Mangroves are critical for protecting marine biodiversity and coastal communities. 
                            </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 p-5 bg-white rounded-lg shadow-md">
                    <img
                        src="/images/bsf-process.jpg"
                        alt="Circular Economy"
                        className="w-full h-auto rounded-lg"
                    />
                    <div>
                            <h3 className="text-xl font-bold text-[#009dc4] mb-2">Circular Farming Model </h3>
                            <p className=" text-black">
                               We recycle organic waste using black soldier fly (BSF) farming, converting it into high
                                quality protein feed. This model supports fish cages, poultry units, and local farms while 
                                reducing environmental impact. 

                            </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 p-5 bg-white rounded-lg shadow-md">
                    <img
                        src="/images/community-empower.jpg"
                        alt="Youth Empowerement"
                        className="w-full h-auto rounded-lg"
                    />
                    <div>
                            <h3 className="text-xl font-bold text-[#009dc4] mb-2">Youth & Community Empowerment  </h3>
                            <p className=" text-black">
                               We engage small-scale fishers, young women, and coastal entrepreneurs, providing them 
                                with market access, technical training, and alternative income streams.
                            </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 p-5 bg-white rounded-lg shadow-md">
                    <img
                        src="/images/cages-farmimg.jpg"
                        alt="Aquaculture Ecosystem"
                        className="w-full h-auto rounded-lg"
                    />
                    <div>
                            <h3 className="text-xl font-bold text-[#009dc4] mb-2">Integrated Aquaculture Ecosystem  </h3>
                            <p className="text-black">
                               From fish to poultry to insect farming, we operate a closed-loop system that promotes 
                                sustainability, reduces waste, and increases food security. 
                                Together, we’re building an inclusive future where people, planet, and prosperity thrive in 
                                harmony. 

                            </p>
                    </div>
                </div>

            </div>
        </div>
    )
}