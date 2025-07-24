import Header from "../components/Header";
import Footer from "../components/Footer";

// CORRECTED IMPORT PATHS
// From 'client/pages/Gallery.tsx', go up one level (..) to 'client/',
// then into 'assets/videos'.
import mainVideo from '../assets/videos/video1.mp4';
import sideVideo1 from '../assets/videos/video2.mp4';
import sideVideo2 from '../assets/videos/video3.mp4';


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
      src: mainVideo, // Use the imported video variable
      type: "main",
    },
    {
      src: sideVideo1, // Use the imported video variable
      type: "side",
    },
    {
      src: sideVideo2, // Use the imported video variable
      type: "side",
    },
  ];

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
                  <video
                    className="w-full h-96 md:h-[500px] object-cover rounded-3xl shadow-lg"
                    muted        // Mute for autoplay on hover
                    loop         // Loop for continuous preview
                    playsInline  // Important for mobile browsers
                    preload="metadata" // Load metadata to get duration/poster quickly
                    onLoadedMetadata={(e) => {
                      e.currentTarget.currentTime = 0; // Ensure starts from beginning
                    }}
                    onMouseEnter={(e) => {
                      // Play the video when mouse enters
                      e.currentTarget.play().catch(error => console.log("Video play failed on hover:", error));
                    }}
                    onMouseLeave={(e) => {
                      // Pause and reset video when mouse leaves
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                    // 'controls' attribute is removed here for a cleaner look during hover,
                    // but you could add an onClick to toggle controls if desired for full playback.
                  >
                    <source src={videos[0].src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* You might want a play button overlay that appears only when not hovered/playing */}
                  {/* For simplicity here, we rely on hover for preview and no explicit click controls. */}
                  {/* If you need a click-to-play with controls, additional state management would be needed. */}
                </div>
              </div>

              {/* Two Portrait Videos - Increased Height */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <video
                    className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-3xl shadow-lg"
                    muted        // Mute for autoplay on hover
                    loop         // Loop for continuous preview
                    playsInline  // Important for mobile browsers
                    preload="metadata"
                    onLoadedMetadata={(e) => {
                      e.currentTarget.currentTime = 0;
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.play().catch(error => console.log("Video play failed on hover:", error));
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  >
                    <source src={videos[1].src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="relative">
                  <video
                    className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-3xl shadow-lg"
                    muted        // Mute for autoplay on hover
                    loop         // Loop for continuous preview
                    playsInline  // Important for mobile browsers
                    preload="metadata"
                    onLoadedMetadata={(e) => {
                      e.currentTarget.currentTime = 0;
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.play().catch(error => console.log("Video play failed on hover:", error));
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  >
                    <source src={videos[2].src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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