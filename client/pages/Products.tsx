import HeaderWhite from "../components/HeaderWhite";
import Footer from "../components/Footer";

export default function Products() {
  const brands = [
    {
      name: "3M",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/f8941146311cd6a4f7183d50aa8367262c300cd3?width=766",
      background: "#FFF",
      link: "https://www.3mae.ae/3M/en_AE/company-mea/",
    },
    {
      name: "Balsac",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6b2995f2243bc8d37baeb17390538bafa7aa00dd?width=722",
      background: "#FFF",
      link: "https://www.baslac.com/en-emea",
    },
    {
      name: "Diamond",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9b67fa6a9907c16c2d3c081f5699a1e3876b5ec5?width=766",
      background: "#FFF",
      link: "https://diamondprofilms.com/",
    },
    {
      name: "Indasa",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/0e97a9bc628547a327af4b03ac0903c97dd2ac01?width=734",
      background: "#FFF",
      link: "https://www.indasa-abrasives.com/global/en",
    },
    {
      name: "Glasurit",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b0644f0e7b1f995af84f732252dc800ce29a3e4d?width=766",
      background: "#FFF",
      link: "https://www.glasurit.com/en-int",
    },
    {
      name: "Norbin",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/5b278c68acf2d7f9bad52c9c225b447749bfda17?width=720",
      background: "#FFF",
      link: "https://www.norbin-paint.com/",
    },
    {
      name: "Wurth",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2d4b837f519bb7ec9002312f35f9130ea30d9ee5?width=698",
      background: "#FFF",
      link: "https://eshop.wurth.ae/",
    },
    {
      name: "Roberlo",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/c04fbb18a2b70932fcd0bfc52445f1f70576e3a8?width=728",
      background: "#004175",
      link: "https://www.roberlo.com/en/",
    },
    {
      name: "Rupes",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/891f3e47aa468b9b83cbe4bf45b0095d7ec8fba6?width=688",
      background: "#F00",
      link: "https://www.rupes.com/",
    },
    {
      name: "Blowtherm",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fb5cbc2cd565549f5b89c85e3e34d9891%2F29627b8dabbf4e7f9207c2cb50b1fad7?format=webp&width=800",
      background: "#FFF",
      link: "https://share.google/1fPdT9XIRo64Mw5xx",
    },
    {
      name: "Najem",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/215b6ebeb0e5cf8636d2f1a17fd3ede4f7af4c74?width=766",
      background: "#FFF",
      link: "https://www.najemalkawkab.com/",
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
        {/* Desktop Banner */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fb5cbc2cd565549f5b89c85e3e34d9891%2F93a91b246a064b6e9fdfa2d29b08df38?format=webp&width=800"
          alt="Product Banner Desktop"
          className="hidden lg:block w-full h-full object-cover object-center"
        />
        {/* Tablet Banner */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fb5cbc2cd565549f5b89c85e3e34d9891%2F3a6f0751b17a49469d2b2140e3cf1bea?format=webp&width=800"
          alt="Product Banner Tablet"
          className="hidden md:block lg:hidden w-full h-full object-cover object-center"
        />
        {/* Mobile Banner */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fb5cbc2cd565549f5b89c85e3e34d9891%2Fd1471fd59f8e4f0283cd269ad58f67b6?format=webp&width=800"
          alt="Product Banner Mobile"
          className="block md:hidden w-full h-full object-cover object-center"
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
                  {brand.link ? (
                    <a
                      href={brand.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-105"
                    >
                      <div
                        className="w-80 h-80 rounded-3xl border-4 border-brand-navy p-4 flex items-center justify-center cursor-pointer"
                        style={{ backgroundColor: brand.background }}
                      >
                        <img
                          src={brand.image}
                          alt={brand.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </a>
                  ) : (
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
                  )}
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
