import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/bf9abc96589e9a98e5118c04b53b54392afbec67?width=1376"
              alt="About Us Hero"
              className="w-full max-w-2xl h-auto rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* CEO Quote Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-4xl mx-auto">
            {/* Quote Border */}
            <div className="border-4 border-black rounded-3xl p-8 md:p-12 relative">
              {/* Opening Quote */}
              <div className="absolute -top-6 -left-6 bg-white px-4">
                <span className="text-8xl font-extrabold text-black font-montserrat">
                  "
                </span>
              </div>

              {/* Quote Content */}
              <div className="text-center space-y-6">
                <p className="text-xl md:text-2xl font-medium text-black font-montserrat leading-relaxed">
                  We are proud to play an active role in advancing the UAE's
                  automotive collision and refinish sector. Our commitment goes
                  beyond supply—we strive to deliver world-class brands backed
                  by exceptional service, technical expertise, and long-term
                  partnerships.
                </p>
                <p className="text-xl md:text-2xl font-medium text-black font-montserrat leading-relaxed">
                  By aligning with global standards and local market needs, we
                  aim to be a trusted contributor to the industry's growth and
                  innovation
                </p>

                {/* Attribution */}
                <div className="pt-4">
                  <p className="text-lg font-bold text-brand-navy font-montserrat uppercase">
                    SYED AKBAR MEHDI
                  </p>
                  <p className="text-lg font-medium text-brand-navy font-montserrat uppercase">
                    CEO
                  </p>
                </div>
              </div>

              {/* Closing Quote */}
              <div className="absolute -bottom-6 -right-6 bg-white px-4">
                <span className="text-8xl font-extrabold text-black font-montserrat">
                  "
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy text-center uppercase font-montserrat mb-16">
            Leadership
          </h2>

          {/* Leadership Profiles */}
          <div className="space-y-16">
            {/* Mohammad Ikram - CFO */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-brand-navy font-montserrat uppercase mb-2">
                  Mohammad Ikram
                </h3>
                <p className="text-lg font-medium text-brand-navy font-montserrat uppercase mb-6">
                  CFO
                </p>
                <p className="text-lg font-medium text-black font-montserrat leading-relaxed">
                  Mr. Ikram is a highly esteemed finance professional and a
                  qualified Chartered Accountant, boasting over 20 years of
                  exemplary experience in the Middle East. His profound
                  financial acumen and unwavering discipline have become the
                  cornerstone of our company's success.
                </p>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9d04d0f445316926c6ca66ed2012dbc7f3b32c40?width=940"
                  alt="Mohammad Ikram - CFO"
                  className="w-full max-w-md h-auto rounded-3xl"
                />
              </div>
            </div>

            {/* Ranga Sampath - Sr. Manager */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2bd175316035653db8bba45fa010e39b31198f44?width=940"
                  alt="Ranga Sampath - Sr. Manager"
                  className="w-full max-w-md h-auto rounded-3xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-navy font-montserrat uppercase mb-2">
                  Ranga Sampath
                </h3>
                <p className="text-lg font-medium text-brand-navy font-montserrat uppercase mb-6">
                  Sr. Manager Sales and Operations
                </p>
                <p className="text-lg font-medium text-black font-montserrat leading-relaxed">
                  Ranga as our Senior Manager, bringing extensive experience in
                  automotive refinish technologies and a fresh strategic
                  outlook. Having worked with leading BASF distributors across
                  the Middle East—Al Fardan Group in Qatar and Al Nizamia in
                  Kuwait—Ranga has quickly made his mark in the UAE market,
                  achieving key milestones in record time. His deep industry
                  knowledge and drive for innovation strengthen our technical
                  edge and reinforce our commitment to excellence in service and
                  product delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy text-center uppercase font-montserrat mb-16">
            Who We Are
          </h2>

          {/* Company Description */}
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-medium text-black font-montserrat leading-relaxed">
              We are a leading car paint and paint ancillaries products Import,
              retail, wholesale, and distribution company based in the UAE,
              strategically located on BMW Road in the heart of the automotive
              spare parts market in Sharjah.
            </p>
            <br />
            <p className="text-xl md:text-2xl font-medium text-black font-montserrat leading-relaxed">
              Our operations are supported by a dedicated team of trained sales
              professionals, skilled colour mixers, and an efficient delivery
              fleet — all committed to providing exceptional products and
              reliable service to our valued clients across the region.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
