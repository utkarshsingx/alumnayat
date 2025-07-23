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
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/447127c82849cb3ff20911b964184896caa2dfba?width=3840"
            alt="Contact Us Banner Overlay"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b9f2750dcf611341f8e4433e4d606ddb73298ae7?width=3840"
            alt="Contact Us Banner Top"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Hero Title Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center uppercase font-montserrat">
              Reach Out To Us
            </h1>
          </div>
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
                      Email
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
                      BMW Road,<br />
                      Near Sedana Trading,<br />
                      Sharjah Industrial 1, UAE
                    </h3>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-8 pt-8">
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/4d7a403fcb0d77250572afcec716644ad1151623?width=162"
                      alt="LinkedIn"
                      className="w-12 h-12"
                    />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/67f1db7319f410808a101c8c08bf736b0506c577?width=162"
                      alt="Instagram"
                      className="w-12 h-12"
                    />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/1268611058cfd93901745c0b505a171c81301bb6?width=162"
                      alt="Facebook"
                      className="w-12 h-12"
                    />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="flex justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f4993b9498bece2fbbe33569e5caaf652071ec8c?width=1420"
                  alt="Location Map"
                  className="w-full max-w-lg h-auto rounded-3xl shadow-lg"
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
      </main>

      <Footer />
    </div>
  );
}
