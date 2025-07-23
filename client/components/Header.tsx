import { Link } from "react-router-dom";

export default function Header() {
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
                className="h-16 w-auto md:h-20"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-black font-montserrat font-medium text-lg hover:text-brand-navy transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-black font-montserrat font-medium text-lg hover:text-brand-navy transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-black font-montserrat font-medium text-lg hover:text-brand-navy transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/gallery"
              className="text-black font-montserrat font-medium text-lg hover:text-brand-navy transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-black font-montserrat font-medium text-lg hover:text-brand-navy transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-black p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation underlines */}
        <div className="hidden md:flex justify-center space-x-52 pb-2">
          <div className="w-10 h-px bg-black"></div>
          <div className="w-10 h-px bg-black"></div>
          <div className="w-10 h-px bg-black"></div>
          <div className="w-10 h-px bg-black"></div>
        </div>
      </div>
    </header>
  );
}
