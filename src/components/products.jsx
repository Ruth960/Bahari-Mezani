import ProductCard from './ProductCard';

const productsData = [
    {
        title: "Fresh Fish",
        description: "Sustainably raised in our ocean-based sea cages and Lake Victoria enclosures, our premium-quality fresh fish meets the growing demand for clean, traceable protein.",
        features: [
            "<strong>Species:</strong> Tilapia, catfish, sea bass, and select seasonal varieties",
            "<strong>Quality Assurance:</strong> Harvested on demand and cold chain–handled for maximum freshness",
            "<strong>Markets Served:</strong> Restaurants, retailers, institutions, and regional distributors"
        ],
        imageSrc: "./images/fresh-fish.jpg",
        imageAlt: "Fresh Fish",
        imageLeft: false
    },
    {
        title: "Dry Fish",
        description: "Naturally preserved for shelf stability and efficient logistics, our sun-dried fish is a favorite across East and Central Africa.",
        features: [
            "Carefully sun-dried for preservation",
            "Packaged for long-distance distribution, reducing spoilage and transport costs",
            "Ideal for long-distance distribution and wholesale markets"
        ],
        imageSrc: "./images/Dry-Fish.jpg",
        imageAlt: "Dry Fish",
        imageLeft: true
    },
    {
        title: "Black Soldier Fly (BSF) Products",
        description: "Through our circular waste-to-protein model, we produce insect-based feed and inputs that strengthen food systems from the ground up.",
        features: [
            "<strong>BSF Larvae:</strong> High-protein feed for aquaculture and poultry sectors",
            "<strong>BSF Eggs & Starter Kits:</strong> Sold to farmers seeking sustainable input solutions",
            "<strong>Environmental Impact:</strong> Helps reduce landfill pressure while lowering feed costs"
        ],
        imageSrc: "./images/bsf-process.jpg",
        imageAlt: "BSF",
        imageLeft: false
    },
    {
        title: "Poutry Products",
        description: "Our integrated farm demonstrates the power of closed-loop systems—where every output powers another productive input.",
        features: [
            "<strong>Organic Poultry:</strong> Broiler chickens and free-range layers raised using in-house BSF feed",
            "<strong>Egg Production:</strong> Nutritious eggs with traceable feed origin and natural formulation",
            "<strong>Sustainability Edge:</strong> Poultry raised with a carbon-reduced, circular feed system—achieving up to 80% savings on input costs"
        ],
        imageSrc: "./images/eggs.jpg",
        imageAlt: "Poutry Farming",
        imageLeft: true
    }
];

export default function Products() {
  return (
    <div className="mt-20 ml-10 custom-center">
      <h1 className="text-6xl text-[#009dc4] text-center">
        Our Product Range
      </h1>
      <div className="flex flex-col items-center"> 
        {productsData.map((product, index) => (
            <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  )
}