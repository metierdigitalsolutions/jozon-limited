// src/pages/brands/Polybags.jsx
import ImageGallery from '../../components/ImageGallery'
const imgs = [
  { src: '/images/nylon-bags.jpg', alt: 'nylon bags' },
  { src: '/images/nylon-bags-machines.jpg', alt: 'bag machines' },
  { src: '/images/nylon-production-factory.jpg', alt: 'poly factory' }
]

export default function Polybags(){
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#263FAF]">JOZON - Poly & Plastic</h1>
      <p className="text-gray-700 mt-3">High-quality polybags and packaging produced on-site with our extrusion and blowing lines.</p>

      <section className="mt-8">
        <ImageGallery images={imgs} />
      </section>

      <div className="mt-8">
        <a className="inline-block bg-[#19C0F0] text-white px-6 py-3 rounded-lg" href="/contact">Request Quote</a>
      </div>
    </main>
  )
}
