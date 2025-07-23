import { Link } from "react-router-dom";

export default function HeaderWhite() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      {/* Dark gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-48 opacity-80">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <g opacity="0.8">
            <path
              d="M0 -1H1920V118.676H0V-1Z"
              fill="url(#paint0_linear_115_5)"
            />
            <path
              d="M0 28.1648H1920V147.841H0V28.1648Z"
              fill="url(#paint1_linear_115_5)"
            />
            <path
              d="M0 56.3239H1920V176H0V56.3239Z"
              fill="url(#paint2_linear_115_5)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_115_5"
              x1="960"
              y1="-1"
              x2="960"
              y2="118.676"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.355769" stopColor="#050E16" />
              <stop offset="1" stopColor="#020305" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_115_5"
              x1="960"
              y1="28.1648"
              x2="960"
              y2="147.841"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.235577" stopColor="#050E16" />
              <stop offset="1" stopColor="#020305" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_115_5"
              x1="960"
              y1="56.3239"
              x2="960"
              y2="176"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#050E16" />
              <stop offset="1" stopColor="#020305" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9beeef5bb521d46be816f09b7b337722308d230f?width=802"
                alt="Al Umnayat Auto Paints - White Logo"
                className="h-24 w-auto md:h-32 lg:h-36"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center">
            <Link
              to="/"
              className="text-white font-montserrat font-medium text-lg hover:text-gray-300 transition-colors px-6"
            >
              Home
            </Link>
            <div className="w-px h-6 bg-white"></div>
            <Link
              to="/products"
              className="text-white font-montserrat font-medium text-lg hover:text-gray-300 transition-colors px-6"
            >
              Products
            </Link>
            <div className="w-px h-6 bg-white"></div>
            <Link
              to="/about"
              className="text-white font-montserrat font-medium text-lg hover:text-gray-300 transition-colors px-6"
            >
              About Us
            </Link>
            <div className="w-px h-6 bg-white"></div>
            <Link
              to="/gallery"
              className="text-white font-montserrat font-medium text-lg hover:text-gray-300 transition-colors px-6"
            >
              Gallery
            </Link>
            <div className="w-px h-6 bg-white"></div>
            <Link
              to="/contact"
              className="text-white font-montserrat font-medium text-lg hover:text-gray-300 transition-colors px-6"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white p-2">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
