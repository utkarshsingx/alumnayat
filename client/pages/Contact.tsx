import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative">
        <div className="relative">
          {/* Banner Images Stacked */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b696774eb0162f65fe25a3490d33b64482a49a6a?width=3840"
            alt="Contact Us Banner"
            className="w-full h-96 md:h-[500px] object-cover object-center"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/447127c82849cb3ff20911b964184896caa2dfba?width=3840"
            alt="Contact Us Banner Overlay"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b9f2750dcf611341f8e4433e4d606ddb73298ae7?width=3840"
            alt="Contact Us Banner Top"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>

      <main className="flex-grow bg-white">
        {/* Contact Us Section Title */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy text-center uppercase font-montserrat mb-16">
              Contact Us
            </h2>

            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Details */}
              <div className="space-y-12">
                {/* Phone */}
                <div className="flex items-start space-x-6">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/6afca2ba1b21d40ebbb9c22c5726c70e6d47dea6?width=150"
                    alt="Phone"
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-brand-navy font-montserrat uppercase">
                      058-807-2882, 052-789-2715
                    </h3>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-6">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/3d3a8183d237eaa18616df91d3e2e5b3b81b176e?width=170"
                    alt="Email"
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-brand-navy font-montserrat uppercase">
                      samsan.dxb@gmail.com
                    </h3>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-6">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/d8f15a8e098c97041b4477019cfbe23aef5dd86d?width=170"
                    alt="Location"
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-brand-navy font-montserrat uppercase leading-tight">
                      BMW Road,
                      <br />
                      Near Sedana Trading,
                      <br />
                      Sharjah Industrial 1, UAE
                    </h3>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="flex justify-center">
                <a
                  href="https://maps.app.goo.gl/nd96LCHjNQeyj1b86?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105 cursor-pointer"
                >
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f4993b9498bece2fbbe33569e5caaf652071ec8c?width=1420"
                    alt="Location Map - Click to open in Google Maps"
                    className="w-full max-w-lg h-auto rounded-3xl shadow-lg"
                  />
                </a>
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
      </main>

      <Footer />
    </div>
  );
}
