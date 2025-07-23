import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo and Company Name */}
          <div className="space-y-6 flex flex-col items-start">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0f66891ae7c1a7c47fd5c4e81e0fe13e988485d4?width=666"
              alt="Al Umnayat Auto Paints - White Logo"
              className="h-24 w-auto md:h-28 lg:h-32"
            />
            <div className="font-montserrat font-bold text-xl leading-relaxed">
              Al Umnayat - Al Jadeeda
              <br />
              Auto Paints TR L.L.C.SP
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-start space-x-3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/44d719fd06460e79a9867429244a22db31efd0a9?width=70"
                alt="Phone"
                className="w-6 h-6 mt-1"
              />
              <div className="font-montserrat font-bold text-lg">
                058-807-2882, 052-789-2715
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1774089ea680aaebc0520e1566effa4476594adc?width=72"
                alt="Location"
                className="w-6 h-6 mt-1"
              />
              <div className="font-montserrat font-bold text-lg leading-relaxed">
                BMW Road, Near Sedana Trading,
                <br />
                Sharjah Industrial 1, UAE
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <Link
              to="/products"
              className="block font-montserrat font-bold text-lg hover:text-gray-300 transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="block font-montserrat font-bold text-lg hover:text-gray-300 transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
