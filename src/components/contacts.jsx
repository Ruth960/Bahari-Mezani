export default function ContactsUs() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-green-300"> 
      {/* Header Section */}
      <div
        className="bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-white text-center p-5"
        style={{ backgroundImage: "url('/images/ContactBg.PNG')", opacity: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">Stay Informed</h1>
        <p className="text-lg mb-6">
          Subscribe to our newsletter for updates on sustainable solutions and community initiatives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 p-3 rounded-lg border border-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-2 p-3 rounded-lg border border-gray-300"
          />
          <button className="p-3 bg-blue-500 text-white rounded-lg">
            Submit
          </button>
        </div>
      </div>

      {/* Connect Section */}
      <div className="bg-gray-100 text-center p-5">
        <h1 className="text-3xl font-bold mb-4">Connect with Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Join our community on social media to stay updated on our projects and initiatives aimed at sustainable development.
        </p>
        <a
          href="https://www.linkedin.com/company/mesuct/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg">
            Follow Us
          </button>
        </a>
      </div>

      {/* Visit Us Section */}
      <div className="bg-teal-100 p-5">
        <h1 className="text-3xl font-bold text-center mb-4">Visit Us</h1>
        <p className="text-lg text-gray-600 text-center mb-6">
          Discover where Bahari Mezani operates and learn how you can engage with our sustainable development efforts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Form */}
          <div className="p-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 rounded-lg border border-gray-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 rounded-lg border border-gray-300"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 mb-4 rounded-lg border border-gray-300 resize-none h-24"
            ></textarea>
            <button className="w-full p-3 bg-blue-500 text-white rounded-lg">
              Submit
            </button>
          </div>

          {/* Map */}
          <div className="p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31818.123456789!2d39.8499!3d-3.6104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840123456789abc%3A0x123456789abcdef!2sKilifi!5e0!3m2!1sen!2ske!4v1681234567890!5m2!1sen!2ske"
              width="100%"
              height="200"
              className="rounded-lg"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="p-4">
            <p className="text-lg text-gray-600">
              📍 KILIFI<br />
              🕒 Mon-Fri 10am-5pm, Sat 1pm-5pm<br />
              📞 +254 768 066569<br />
              📧 owialphonse2020@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}