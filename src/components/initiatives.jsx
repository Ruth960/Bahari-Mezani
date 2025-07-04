import InitiativeCard from './InitiativeCard';

const initiatives = [
     {
        image: "/images/cages-farming.jpg",
        title: "Integrated Aquaculture Ecosystem",
        description: "From fish to poultry to insect farming, we operate a closed-loop system that promotes sustainability, reduces waste, and increases food security. Together, we’re building an inclusive future where people, planet, and prosperity thrive in harmony."
    },
    {
        image: "/images/bsf-process.jpg",
        title: "Circular Farming Model",
        description: "We recycle organic waste using black soldier fly (BSF) farming, converting it into high quality protein feed. This model supports fish cages, poultry units, and local farms while reducing environmental impact."
    },
    {
        image: "/images/cold-chain.jpeg",
        title: "Cold Chain Supply of Fish",
        description: "Our state-of-the-art cold chain ensures fish from the Indian Ocean and Lake Victoria remain fresh from harvest to market. Using refrigerated storage and transport with real-time temperature monitoring, we minimize spoilage, support 60 fishermen, and enhance food security, aligning with Blue economy goals."
    },
    {
        image: "/images/agroecology.jpeg",
        title: "Smart Climate Agroecology",
        description: "We promote smart climate agroecology by using BSF frass as a natural fertilizer to enhance soil health and crop resilience without synthetic chemicals. IoT sensors monitor soil and water conditions, optimizing sustainable farming practices. This approach supports biodiversity, reduces waste, and empowers local farmers to combat climate change effectively."
    },
   
    {
        image: "/images/mangrove-restoration.jpg",
        title: "Mangrove Restoration",
        description: "We actively support and participate in mangrove restoration efforts across Kenya’s coastal region. Mangroves are critical for protecting marine biodiversity and coastal communities."
    },
    
    {
        image: "/images/community-empower.jpg",
        title: "Youth & Community Empowerment",
        description: "We engage small-scale fishers, young women, and coastal entrepreneurs, providing them with market access, technical training, and alternative income streams."
    },
   
];

export default function Projects(){

    return(
        <div className="custom-center" >
            <div>
                <h1 className="text-6xl text-[#009dc4] text-center text-bold p-5">Our Sustainable Initiatives</h1>
                <h2 className="text-3xl text-[#48bf91] mt-5  text-center">Our Commitment to the Blue and Green Economy </h2>
                <p className=" leading-relaxed text-center p-10 text-xl"> At Bahari Mezani, sustainability is at the heart of everything we do. We understand that a 
                        thriving blue economy depends on a healthy green environment. That’s why we’ve 
                        adopted several eco-conscious initiatives: 
                </p>
            </div>
            <div className="m-5 grid gap-8 sm:grid-cols-1 text-justify text-l md:grid-cols-2 lg:grid-cols-3">
                {initiatives.map((initiative, index) => (
                    <InitiativeCard key={index} initiative={initiative} />
                ))}
            </div>
        </div>
    )
}