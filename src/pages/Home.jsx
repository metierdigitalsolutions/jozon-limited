// src/pages/Home.jsx
import ImageGallery from '../components/ImageGallery'
import { Link } from 'react-router-dom'

const HERO_IMAGE = '/images/jovina-bottle-water-packs.jpg'

const GALLERY = [
  { src: '/images/jovina-sachet-water-packs.jpg', alt: 'Jovina sachet packs' },
  { src: '/images/jovina-bottle-water.jpg', alt: 'Jovina bottled water' },
  { src: '/images/jobklyn-organic-soaps.jpg', alt: 'Jobklyn soap packaging' },
  { src: '/images/nylon-factory.jpg', alt: 'Poly bag production' },
  { src: '/images/production-factory.jpg', alt: 'Production line' },
  { src: '/images/factory-equipments.jpg', alt: 'Factory equipment' },
]

export default function Home(){
  return (
    <div className="font-inter text-gray-800">

      {/* HERO */}
      <section
        className="relative bg-gray-900 text-white"
        aria-label="Hero"
      >
        <div
          className="absolute inset-0 bg-black/45"
          style={{
            background:
              'linear-gradient(90deg, rgba(38,63,175,0.72) 0%, rgba(27,28,55,0.35) 60%)'
          }}
        />
        <div className="container mx-auto px-4 py-28 relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src="/logo.jpeg" alt="JOSON logo" className="w-24 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              JOSON LIMITED
            </h1>
            <p className="mt-4 text-lg text-blue-100 max-w-xl">
              Manufacturers of Jovina water, Jobklyn soaps, industrial plastics and lubricant solutions. Real factory, real quality — trusted across Nigeria.
            </p>

            <div className="mt-6 flex gap-4">
              <a className="bg-[#19C0F0] text-white px-6 py-3 rounded-lg shadow hover:bg-[#16A8D3]" href="#brands">Our Products</a>
              <Link to="/contact" className="border border-white/30 text-white px-6 py-3 rounded-lg">Contact</Link>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={HERO_IMAGE} alt="Jovina stacked products" className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS WITH IMAGES */}
      <section id="brands" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#263FAF] text-center">Our Business Divisions</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <img src="/images/jovina-sachet-water.jpg" alt="Jovina Water" className="w-full h-40 object-cover rounded-md mb-4"/>
              <h3 className="text-xl font-semibold text-[#263FAF]">JOVINA Sachet & Bottled Water</h3>
              <p className="text-gray-600 mt-2">Sachet & bottled water for retail and wholesale.</p>
              <Link to="/brands/jovina-water" className="mt-4 inline-block text-[#19C0F0]">View →</Link>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center">
              <img src="/images/jobklyn-organic-soaps-2.jpg" alt="Jobklyn Soaps" className="w-full h-40 object-cover rounded-md mb-4"/>
              <h3 className="text-xl font-semibold text-[#263FAF]">JOBKLYN Soaps</h3>
              <p className="text-gray-600 mt-2">Multipurpose, liquid and herbal soaps.</p>
              <Link to="/brands/jobklyn-multipurpose" className="mt-4 inline-block text-[#19C0F0]">View →</Link>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center">
              <img src="/images/nylon-bags.jpg" alt="Poly & Plastic" className="w-full h-40 object-cover rounded-md mb-4"/>
              <h3 className="text-xl font-semibold text-[#263FAF]">JOZON Poly & Plastic</h3>
              <p className="text-gray-600 mt-2">Custom polybags and packaging solutions.</p>
              <Link to="/brands/jozon-poly" className="mt-4 inline-block text-[#19C0F0]">View →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTION GALLERY */}
      <section className="py-16 bg-[#F4F6FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#263FAF]">Our Production in Pictures</h2>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">Real photos from our manufacturing floors — production, packaging and storage.</p>

          <div className="mt-8">
            <ImageGallery images={GALLERY} />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#263FAF]">Why Choose JOSON</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl mb-3">✔️</div>
              <h4 className="font-semibold">Quality</h4>
              <p className="text-gray-600">Strict quality checks and water purification systems.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🏭</div>
              <h4 className="font-semibold">Local Manufacturing</h4>
              <p className="text-gray-600">Produced locally with modern equipment.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🚚</div>
              <h4 className="font-semibold">Reliable Supply</h4>
              <p className="text-gray-600">Consistent stock for distributors and retailers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-16 bg-gradient-to-br from-[#263FAF] to-[#2B2E83] text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold">Ready to partner with us?</h3>
          <p className="mt-2 text-blue-100">Contact our sales team for pricing, distribution and bulk orders.</p>
          <a href="/contact" className="mt-6 inline-block bg-[#19C0F0] text-white px-6 py-3 rounded-lg">Contact Sales</a>
        </div>
      </section>

    </div>
  )
}
