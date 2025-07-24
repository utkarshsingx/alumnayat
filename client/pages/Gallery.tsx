import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Gallery() {
  const photos = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/90e58dc05c76fd065605fc92ca0226f3a159e554?width=2860",
      alt: "Company Event Photo 1",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/d496d446a0d3ff6d83ecc821331f81de753de084?width=2860",
      alt: "Company Event Photo 2",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/0c9218cec8de15c8abe2bde05552ccfaf1b23f85?width=2860",
      alt: "Company Event Photo 3",
    },
  ];

  const videos = [
    {
      src: "https://cdn.builder.io/o/assets%2Fb5cbc2cd565549f5b89c85e3e34d9891%2F40fe2dfc2bcf45c4adfe6842ef6ad07a?alt=media&token=e2d0d1f3-7684-4776-8f46-b3bb38a0d666&apiKey=b5cbc2cd565549f5b89c85e3e34d9891",
      type: "main"
    },
    {
      src: "https://cdn.builder.io/o/assets%2Fb5cbc2cd565549f5b89c85e3e34d9891%2F2776c706b5d44fab9b83cb64fa4e8963?alt=media&token=5fc156ae-2962-4f85-a310-fd369338bd65&apiKey=b5cbc2cd565549f5b89c85e3e34d9891",
      type: "side"
    },
    {
      src: "https://cdn.builder.io/o/assets%2Fb5cbc2cd565549f5b89c85e3e34d9891%2F4224a000d2644e5695b52753ba61243c?alt=media&token=f162f5fa-1e8f-48c8-84cd-5994b80c42f4&apiKey=b5cbc2cd565549f5b89c85e3e34d9891",
      type: "side"
    }
  ];

  const PlayButton = () => (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-18 h-18 md:w-24 md:h-24 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-12 md:h-12"
        >
          <path
            d="M38 22.268C39.3333 23.0378 39.3333 24.9622 38 25.732L18 37.1769C16.6667 37.9467 15 36.9845 15 35.445L15 12.555C15 11.0155 16.6667 10.0533 18 10.8231L38 22.268Z"
            fill="#666"
          />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Photos Section */}
          <section className="mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy text-center uppercase font-montserrat mb-16">
              Photos
            </h1>

            <div className="space-y-8">
              {photos.map((photo, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full max-w-6xl h-auto rounded-3xl shadow-lg"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Videos Section */}
          <section>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy text-center uppercase font-montserrat mb-16">
              Videos
            </h2>

            <div className="space-y-8">
              {/* Main Video - Full Width */}
              <div className="flex justify-center mb-12">
                <div className="relative w-full max-w-6xl">
                  <div className="w-full h-96 md:h-[500px] bg-gray-200 rounded-3xl overflow-hidden relative group cursor-pointer">
                    <video
                      ref={(video) => {
                        if (video) {
                          video.load();
                        }
                      }}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => {
                        e.currentTarget.currentTime = 0;
                        e.currentTarget.play();
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    >
                      <source
                        src={videos[0].src}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                      <PlayButton />
                    </div>
                  </div>
                </div>
              </div>

              {/* Two Smaller Videos - More Height */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <div className="w-full h-80 md:h-96 lg:h-[450px] bg-gray-200 rounded-3xl overflow-hidden relative group cursor-pointer">
                    <video
                      ref={(video) => {
                        if (video) {
                          video.load();
                        }
                      }}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => {
                        e.currentTarget.currentTime = 0;
                        e.currentTarget.play();
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    >
                      <source
                        src={videos[1].src}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                      <PlayButton />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-80 md:h-96 lg:h-[450px] bg-gray-200 rounded-3xl overflow-hidden relative group cursor-pointer">
                    <video
                      ref={(video) => {
                        if (video) {
                          video.load();
                        }
                      }}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => {
                        e.currentTarget.currentTime = 0;
                        e.currentTarget.play();
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    >
                      <source
                        src={videos[2].src}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                      <PlayButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer with Social Media */}
      <footer className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Logo and Company Name */}
            <div className="space-y-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0f66891ae7c1a7c47fd5c4e81e0fe13e988485d4?width=666"
                alt="Al Umnayat Auto Paints - White Logo"
                className="h-20 w-auto"
              />
              <div className="font-montserrat font-bold text-lg leading-relaxed">
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

            {/* Quick Links and Social Media */}
            <div className="space-y-6">
              <div className="space-y-4">
                <a
                  href="/products"
                  className="block font-montserrat font-bold text-lg hover:text-gray-300 transition-colors"
                >
                  Products
                </a>
                <a
                  href="/about"
                  className="block font-montserrat font-bold text-lg hover:text-gray-300 transition-colors"
                >
                  Who We Are
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/5cc147989bd0e88301ba3e44b32fc6daab3a626b?width=110"
                    alt="LinkedIn"
                    className="w-8 h-8"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/17004d2acd7425ca0ca8fe671b4ab6ce0930b2f8?width=110"
                    alt="Instagram"
                    className="w-8 h-8"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/2c2632ff708ff87d3f4dd452eff4278806ff686f?width=110"
                    alt="Facebook"
                    className="w-8 h-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
