import HeaderWhite from "../components/HeaderWhite";
import Footer from "../components/Footer";

export default function Products() {
  const brands = [
    {
      name: "3M",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/f8941146311cd6a4f7183d50aa8367262c300cd3?width=766",
      background: "#FFF",
    },
    {
      name: "Balsac",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6b2995f2243bc8d37baeb17390538bafa7aa00dd?width=722",
      background: "#FFF",
    },
    {
      name: "Diamond",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9b67fa6a9907c16c2d3c081f5699a1e3876b5ec5?width=766",
      background: "#FFF",
    },
    {
      name: "Indasa",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0e97a9bc628547a327af4b03ac0903c97dd2ac01?width=734",
      background: "#FFF",
    },
    {
      name: "Glasurit",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b0644f0e7b1f995af84f732252dc800ce29a3e4d?width=766",
      background: "#FFF",
    },
    {
      name: "Norbin",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/5b278c68acf2d7f9bad52c9c225b447749bfda17?width=720",
      background: "#FFF",
    },
    {
      name: "Wurth",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2d4b837f519bb7ec9002312f35f9130ea30d9ee5?width=698",
      background: "#FFF",
    },
    {
      name: "Roberlo",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/c04fbb18a2b70932fcd0bfc52445f1f70576e3a8?width=728",
      background: "#004175",
    },
    {
      name: "Rupes",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/891f3e47aa468b9b83cbe4bf45b0095d7ec8fba6?width=688",
      background: "#F00",
    },
    {
      name: "Rx",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2a92127ce67837d6764bc2166bc0ae525666131e?width=728",
      background: "#FFF",
    },
    {
      name: "Najem",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/215b6ebeb0e5cf8636d2f1a17fd3ede4f7af4c74?width=766",
      background: "#FFF",
    },
    {
      name: "Deer",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0f33024871a09dac4115e6a4192cb598bd2402b3?width=766",
      background: "#FFF",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Header Overlay */}
      <section className="relative h-screen">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/dd57b1f384570e157e5eeb9f59a1eeeb57f789a3?width=3840"
          alt="Product Banner"
          className="w-full h-full object-cover"
        />
        <HeaderWhite />
      </section>

      {/* Products Section */}
      <main className="flex-grow bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy text-center uppercase font-montserrat mb-16">
            Our top-of-the-line products
          </h1>

          {/* Products Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {brands.map((brand, index) => (
                <div key={index} className="flex justify-center">
                  <div
                    className="w-80 h-80 rounded-3xl border-4 border-brand-navy p-4 flex items-center justify-center"
                    style={{ backgroundColor: brand.background }}
                  >
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
