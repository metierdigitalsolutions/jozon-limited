export default function Home() {
  return (
    <div className="font-inter text-gray-800">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#2B2E83] to-[#263FAF] text-white py-32">
        <div className="container mx-auto px-6 text-center">

          <img 
            src="/logo.jpeg" 
            alt="Joson Nigeria Limited Logo" 
            className="w-28 mx-auto mb-6"
          />

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            JOSON NIGERIA LIMITED
          </h1>

          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto text-blue-100">
            A diversified manufacturing and services company delivering 
            quality products across Nigeria and beyond.
          </p>

          <a
            href="#contact"
            className="inline-block mt-10 bg-[#19C0F0] hover:bg-[#16A8D3] text-white font-semibold px-10 py-4 rounded-lg shadow-lg transition-all"
          >
            Contact Us
          </a>

        </div>
      </section>


      {/* ABOUT SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#263FAF] text-center mb-8">
            About JOSON NIGERIA LIMITED
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed text-center">
            JOSON NIGERIA LIMITED is a multi-industry company dedicated to producing 
            essential daily-use products including water, soaps, plastics, and 
            energy solutions. Our mission is to provide high-quality, 
            affordable products that support healthier living and sustainable development.
          </p>
        </div>
      </section>


      {/* BUSINESS DIVISIONS */}
      <section className="py-24 bg-[#F4F6FA]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#263FAF]">
            Our Business Divisions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">

            {[
              "JOVINA Sachet & Bottled Water",
              "JOBKLYN Multipurpose Soap",
              "JOBKLYN Liquid Soap",
              "JOBKLYN Black Herbal Soap",
              "JOZON Poly & Plastic",
              "JOZON Oil & Gas",
              "Lubricant & Engine Oils",
            ].map((title, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all text-center"
              >
                <h3 className="text-xl font-semibold text-[#263FAF] mb-4">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">
                  Delivering top-quality products with consistency and innovation.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#263FAF]">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-14 text-center">

            <div>
              <div className="text-[#19C0F0] text-5xl mb-4">💧</div>
              <h3 className="font-semibold text-xl">Quality Assurance</h3>
              <p className="text-gray-600 mt-2">
                Our production processes meet industry and regulatory standards.
              </p>
            </div>

            <div>
              <div className="text-[#19C0F0] text-5xl mb-4">⚙️</div>
              <h3 className="font-semibold text-xl">Advanced Production</h3>
              <p className="text-gray-600 mt-2">
                Modern machinery ensures consistent, high-volume production.
              </p>
            </div>

            <div>
              <div className="text-[#19C0F0] text-5xl mb-4">🚛</div>
              <h3 className="font-semibold text-xl">Reliable Distribution</h3>
              <p className="text-gray-600 mt-2">
                We supply across regions with strong delivery and logistics.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#263FAF] to-[#2B2E83] text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-blue-100">
            For partnerships, distribution, or product enquiries, our team is ready to assist you.
          </p>

          <a 
            href="mailto:info@josonlimited.com"
            className="inline-block mt-10 bg-[#19C0F0] hover:bg-[#16A8D3] px-10 py-4 rounded-lg text-white font-semibold shadow-lg"
          >
            info@josonlimited.com
          </a>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="py-8 bg-[#1A1A1A] text-center text-white text-sm">
        © {new Date().getFullYear()} JOSON NIGERIA LIMITED. All Rights Reserved.
      </footer>

    </div>
  );
}
