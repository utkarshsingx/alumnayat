import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/99530bb3b53e11a3ba6d8efaaa7e02f49de1dc7f?width=3840"
          alt="Car painting service"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Products for Car Body Shop Stages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy text-center uppercase font-montserrat mb-16">
            Products for<br />Car Body Shop Stages
          </h2>

          {/* Product Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Preparation */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-40 h-40 mx-auto bg-white rounded-full border-4 border-brand-navy shadow-lg flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/cad245dee34bd303f6f6ddbf84ab9ecec9ce27d2?width=250"
                    alt="Spray gun for preparation"
                    className="w-24 h-24"
                  />
                </div>
              </div>
              <div className="bg-white rounded-3xl border-4 border-brand-navy p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-brand-navy uppercase font-montserrat mb-6">
                  Preparation
                </h3>
                <ul className="text-lg font-medium text-black space-y-3 font-montserrat">
                  <li>Body Fillers (Putty)</li>
                  <li>Primer & Primer Surfacers</li>
                  <li>Sandpapers & Abrasives</li>
                  <li>Degreasers & Cleaners</li>
                  <li>Masking Tape, Paper & Film</li>
                </ul>
              </div>
            </div>

            {/* Painting */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-40 h-40 mx-auto bg-white rounded-full border-4 border-brand-navy shadow-lg flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/93d675dbeb24a47e50ece9d120e6ad33ff4fdf0c?width=276"
                    alt="Car for painting"
                    className="w-28 h-28"
                  />
                </div>
              </div>
              <div className="bg-white rounded-3xl border-4 border-brand-navy p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-brand-navy uppercase font-montserrat mb-6">
                  Painting
                </h3>
                <ul className="text-lg font-medium text-black space-y-3 font-montserrat">
                  <li>Basecoat Paints</li>
                  <li>Clearcoats (Lacquers)</li>
                  <li>Hardener & Thinners</li>
                  <li>Spray Guns</li>
                  <li>Blending Solvents</li>
                  <li>Protecting Gear</li>
                </ul>
              </div>
            </div>

            {/* Polishing */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-40 h-40 mx-auto bg-white rounded-full border-4 border-brand-navy shadow-lg flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/5f5757ce471e99e494b40699caabbb706eb89d15?width=254"
                    alt="Polish machine"
                    className="w-24 h-24 transform rotate-45"
                  />
                </div>
              </div>
              <div className="bg-white rounded-3xl border-4 border-brand-navy p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-brand-navy uppercase font-montserrat mb-6">
                  Polishing
                </h3>
                <ul className="text-lg font-medium text-black space-y-3 font-montserrat">
                  <li>Rubbing Compounds & Polishes</li>
                  <li>Wax & Sealants</li>
                  <li>Polishing Pads & Machines</li>
                  <li>Microfiber Cloths</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Available Section */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center uppercase font-montserrat mb-16">
            Products available for<br />every stage of car painting
          </h2>

          {/* Brand Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Row 1 */}
            <div className="bg-white rounded-3xl border-4 border-white p-4 flex items-center justify-center h-32">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7469c71226f2154994808aa1b8bb464b27f95010?width=348"
                alt="Balsac"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-white rounded-3xl border-4 border-white p-4 flex items-center justify-center h-32">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/fb0353e32cac7ea3d557d5923e77b9b3443952f7?width=334"
                alt="3M"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-white rounded-3xl border-4 border-white p-4 flex items-center justify-center h-32">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/54e7c496cdb71131a6c82cb685fb241a20023f2e?width=348"
                alt="Indasa"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-white rounded-3xl border-4 border-white p-4 flex items-center justify-center h-32">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0217940ef2537f866900435db4b00de3d5dc9fd3?width=348"
                alt="Najem"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-white rounded-3xl border-4 border-white p-4 flex items-center justify-center h-32">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d55598a16ccf427354ab33cd0e9374edb1b9d3b3?width=348"
                alt="Glasurit"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-white rounded-3xl border-4 border-white p-4 flex items-center justify-center h-32">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6f4a9b306113bfb54de932f3e747422acb41a3d2?width=308"
                alt="Deer"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Row 2 */}
            <div className="bg-white rounded-3xl border-4 border-white p-4 flex items-center justify-center h-32">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/22d7dc96de21a7d5a906779048314f50fd387792?width=348"
                alt="Wurth"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-white rounded-3xl border-4 border-white p-4 flex items-center justify-center h-32">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5557c98907d50345b5f676e98c2749b13db96f7b?width=348"
                alt="RX"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-white rounded-3xl border-4 border-white p-4 flex items-center justify-center h-32">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9d42c70dd7574af9d30361e9db134e868f99895b?width=348"
                alt="Diamond"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-brand-navy rounded-3xl border-4 border-white p-4 flex items-center justify-center h-32">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ac76cf647fab78d2e346febb01eace929a7a3bf4?width=353"
                alt="Roberlo"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-white rounded-3xl border-4 border-white p-4 flex items-center justify-center h-32">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ae087398cea9d689ae6b61e13cffb58d9afb20be?width=350"
                alt="Brand Logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-white rounded-3xl border-4 border-white p-4 flex items-center justify-center h-32">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9502589bf74ae01af7f428a8c949a60e5c61ac8c?width=348"
                alt="Norbin"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy text-center uppercase font-montserrat mb-16">
            For More Details, Enquire Here:
          </h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
