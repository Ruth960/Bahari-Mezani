import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#29ABE2]  border-t mt-12 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white">
        {/* Logo / About */}
        <div>
          <h2 className="text-xl font-bold text-[#FFC107]">
            🐟 Fish Marketplace
          </h2>
          <p className="text-sm mt-2 text-white">
            Fresh fish from the sea to your table. Connecting fishermen and
            buyers in real time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-white">
            <li>
              <a href="#" className="hover:text-[#FFC107]">
                Marketplace
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFC107]">
                My Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFC107]">
                Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:info@fishmarket.com"
              className="text-[#FFC107] hover:underline"
            >
              info@fishmarket.com
            </a>
          </p>
          <p className="text-sm mt-1">Phone: +254 712 345678</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2 text-blue-600 text-lg">
            <a href="#" className="hover:text-[#FFC107]" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-[#FFC107]" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-[#FFC107]" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-[#FFC107] border-t py-4">
        © {new Date().getFullYear()} Fish Marketplace. All rights reserved.
      </div>
    </footer>
  );
}
