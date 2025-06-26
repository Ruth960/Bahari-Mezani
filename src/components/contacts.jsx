export default function Contact() {
  return (
	<div className="bg-[#009dc4] text-[#e2e2e2] py-16 mt-10 px-4">
	  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
		<div className="flex flex-col items-center md:items-start md:w-1/3">
		  <img src="/logo2.png" alt="Bahari Mezani Logo" className="w-40 h-40 mb-6 rounded-full" />
		  <h2 className="p-5 text-base text-bold">We’d Love to Hear From You</h2>
		  <p className="text-base text-[#cfcfcf] text-center md:text-left">
			Whether you’re looking to place an order, collaborate, or learn more about our work — we’re just a message away.
		  </p>
		</div>
		<div className="flex flex-col md:w-1/3">
		  <span className="text-[#ffb14a] mb-2 text-lg font-medium"> Interested to work with us? </span>
		  <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
		  <div>
			<h3 className="font-bold text-white mb-1">Processing Plant &amp; Corporate HQ</h3>
			<div className="mb-2">
			  <span className="block text-xs text-[#a7a7a7] tracking-widest mb-1">LOCATION</span>
			  <span className="block">Kilifi, Coastal Kenya</span>
			</div>
			<div className="mb-2">
			  <span className="block text-xs text-[#a7a7a7] tracking-widest mb-1">PHONE</span>
			  <span className="block font-medium text-white">+254 768 066569</span>
			</div>
			<div>
			  <span className="block text-xs text-[#a7a7a7] tracking-widest mb-1">EMAIL</span>
			  <span className="block text-white">owialphonce2020@gmail.com</span>
			</div>
		  </div>
		</div>
		{/* Right: US Sales Office */}
		
	  </div>
	</div>
  );
}