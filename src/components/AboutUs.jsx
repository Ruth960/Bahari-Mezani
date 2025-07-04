export default function AboutUs() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div className="text-lg text-xl text-justify  text-black leading-relaxed space-y-5 md:pr-8">
          <h2 className="text-5xl pl-10 text-[#009dc4] font-semibold  tracking-wide">
            Introduction
          </h2>
          <p>
            <strong className="text-4xl">Bahari Mezani Ltd</strong> (formerly MESUCT HUB) is a Kenya-based blue economy enterprise committed to transforming East Africa’s seafood sector through sustainable innovation, circular farming, and community empowerment.
          </p>
          <p>
            We process and market premium-quality fresh and dry fish—sourced from the Indian Ocean and Lake 
            Victoria—while ensuring every product meets high standards of freshness, traceability, and environmental 
            responsibility.
          </p>
          <p>
            Our operations are anchored in a circular economy model that turns organic waste into opportunity. Through 
            Black Soldier Fly (BSF) farming, we convert organic refuse into nutrient-rich animal feed and compost—supporting 
            both aquaculture and agriculture.
          </p>
        </div>

        {/* Right Column */}
        <div className="text-lg  mt-20 text-xl text-justify text-black leading-relaxed space-y-5 md:pr-8">
          
          
          <p>
            Our closed-loop system powers fish hatcheries, sea cage farms, and even poultry production, reducing input costs and 
            ecological pressure.
          </p>
          <p>
            By partnering with local fishers, training youth and women, and restoring critical ecosystems like mangroves, we build 
            climate resilience, regenerate biodiversity, and foster inclusive entrepreneurship.
          </p>
          <p>
            Whether you're sourcing responsibly raised fish, exploring alternative feeds, or investing in green innovation—you’re 
            contributing to a future powered by purpose.
          </p>
        </div>
      </div>
    </section>
  );
}
