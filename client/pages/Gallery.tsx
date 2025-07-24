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
      src: "https://cdn.builder.io/o/assets%2Fb5cbc2cd565549f5b89c85e3e34d9891%2F092df76bf3aa45c4ba5a9f09924c0d4f?alt=media&token=f688c4fd-aa27-4eca-b8cc-fddda2f2490a&apiKey=b5cbc2cd565549f5b89c85e3e34d9891",
      type: "main",
    },
    {
      src: "https://cdn.builder.io/o/assets%2Fb5cbc2cd565549f5b89c85e3e34d9891%2Fc3d8fc4b74fc4d04bfc173cb8295f1bd?alt=media&token=f48a53cb-280c-42d8-b0b1-cc20f8682d30&apiKey=b5cbc2cd565549f5b89c85e3e34d9891",
      type: "side",
    },
    {
      src: "https://cdn.builder.io/o/assets%2Fb5cbc2cd565549f5b89c85e3e34d9891%2Fc4d20c7f04eb4e748f8217df32770612?alt=media&token=4c73a5e9-bf0a-4523-9d0a-b376beafc569&apiKey=b5cbc2cd565549f5b89c85e3e34d9891",
      type: "side",
    },
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
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      onLoadedMetadata={(e) => {
                        e.currentTarget.currentTime = 0;
                      }}
                      onMouseEnter={async (e) => {
                        try {
                          e.currentTarget.currentTime = 0;
                          const playPromise = e.currentTarget.play();
                          if (playPromise !== undefined) {
                            await playPromise;
                          }
                        } catch (error) {
                          console.log('Video play failed:', error);
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                      onClick={async (e) => {
                        try {
                          if (e.currentTarget.paused) {
                            e.currentTarget.currentTime = 0;
                            const playPromise = e.currentTarget.play();
                            if (playPromise !== undefined) {
                              await playPromise;
                            }
                          } else {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }
                        } catch (error) {
                          console.log('Video interaction failed:', error);
                        }
                      }}
                    >
                      <source src={videos[0].src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                      <PlayButton />
                    </div>
                  </div>
                </div>
              </div>

              {/* Two Portrait Videos - Increased Height */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] bg-gray-200 rounded-3xl overflow-hidden relative group cursor-pointer">
                    <video
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      onLoadedMetadata={(e) => {
                        e.currentTarget.currentTime = 0;
                      }}
                      onMouseEnter={async (e) => {
                        try {
                          e.currentTarget.currentTime = 0;
                          const playPromise = e.currentTarget.play();
                          if (playPromise !== undefined) {
                            await playPromise;
                          }
                        } catch (error) {
                          console.log('Video play failed:', error);
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                      onClick={async (e) => {
                        try {
                          if (e.currentTarget.paused) {
                            e.currentTarget.currentTime = 0;
                            const playPromise = e.currentTarget.play();
                            if (playPromise !== undefined) {
                              await playPromise;
                            }
                          } else {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }
                        } catch (error) {
                          console.log('Video interaction failed:', error);
                        }
                      }}
                    >
                      <source src={videos[1].src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                      <PlayButton />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] bg-gray-200 rounded-3xl overflow-hidden relative group cursor-pointer">
                    <video
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      onLoadedMetadata={(e) => {
                        e.currentTarget.currentTime = 0;
                      }}
                      onMouseEnter={async (e) => {
                        try {
                          e.currentTarget.currentTime = 0;
                          const playPromise = e.currentTarget.play();
                          if (playPromise !== undefined) {
                            await playPromise;
                          }
                        } catch (error) {
                          console.log('Video play failed:', error);
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                      onClick={async (e) => {
                        try {
                          if (e.currentTarget.paused) {
                            e.currentTarget.currentTime = 0;
                            const playPromise = e.currentTarget.play();
                            if (playPromise !== undefined) {
                              await playPromise;
                            }
                          } else {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }
                        } catch (error) {
                          console.log('Video interaction failed:', error);
                        }
                      }}
                    >
                      <source src={videos[2].src} type="video/mp4" />
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

      <Footer />
    </div>
  );
}
