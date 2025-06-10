
export default function Footer() {
  return (
    <footer className="bg-none text-emerald-950 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Bahari Mezani. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.facebook.com/share/1H8uiPCWnD/" className="text-gray-900 hover:text-white">
            Facebook
          </a>
          <a href="https://www.linkedin.com/company/mesuct/about/" className="text-gray-900 hover:text-white">
            Linkedln
          </a>
          <a href="#" className="text-gray-900 hover:text-white">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}