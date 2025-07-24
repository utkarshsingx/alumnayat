import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/69e2ec3f0099466be6fed5005d631f518ae9f1f6?width=803"
                alt="Al Umnayat Auto Paints"
                className="h-24 w-auto md:h-32 lg:h-36"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center">
            <Link
              to="/"
              className="text-black font-montserrat font-medium text-lg hover:text-brand-navy transition-colors px-6"
            >
              Home
            </Link>
            <div className="w-px h-6 bg-black"></div>
            <Link
              to="/products"
              className="text-black font-montserrat font-medium text-lg hover:text-brand-navy transition-colors px-6"
            >
              Products
            </Link>
            <div className="w-px h-6 bg-black"></div>
            <Link
              to="/about"
              className="text-black font-montserrat font-medium text-lg hover:text-brand-navy transition-colors px-6"
            >
              About Us
            </Link>
            <div className="w-px h-6 bg-black"></div>
            <Link
              to="/gallery"
              className="text-black font-montserrat font-medium text-lg hover:text-brand-navy transition-colors px-6"
            >
              Gallery
            </Link>
            <div className="w-px h-6 bg-black"></div>
            <Link
              to="/contact"
              className="text-black font-montserrat font-medium text-lg hover:text-brand-navy transition-colors px-6"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-black p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40 border-t">
            <nav className="flex flex-col py-4">
              <Link
                to="/"
                className="text-black font-montserrat font-medium text-lg hover:text-brand-navy transition-colors px-6 py-3 border-b border-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-black font-montserrat font-medium text-lg hover:text-brand-navy transition-colors px-6 py-3 border-b border-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className="text-black font-montserrat font-medium text-lg hover:text-brand-navy transition-colors px-6 py-3 border-b border-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/gallery"
                className="text-black font-montserrat font-medium text-lg hover:text-brand-navy transition-colors px-6 py-3 border-b border-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="text-black font-montserrat font-medium text-lg hover:text-brand-navy transition-colors px-6 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
