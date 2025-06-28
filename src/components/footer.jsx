import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm text-black">
          &copy; {new Date().getFullYear()} Bahari Mezani. All rights reserved.
        </p>

        <div className="flex justify-center space-x-6 mt-2">
          <a
            href="https://www.facebook.com/share/1H8uiPCWnD/"
            aria-label="Facebook"
            className="text-[#009dc4] hover:text-[#48bf91] transition-colors"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="https://www.linkedin.com/company/mesuct/about/"
            aria-label="LinkedIn"
            className="text-[#009dc4] hover:text-[#48bf91] transition-colors"
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="text-[#009dc4] hover:text-[#48bf91] transition-colors"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
