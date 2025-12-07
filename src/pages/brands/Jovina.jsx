// src/pages/brands/Jovina.jsx
import ImageGallery from '../../components/ImageGallery'
const imgs = [
  { src: '/images/jovina-bottle-water-packs.jpg', alt: 'stacked bottles'},
  { src: '/images/jovina-sachet-water-packs.jpg', alt: 'sachet water packs'},
  { src: '/images/jovina-sachet-water-production.jpg', alt: 'sachet production' },
  { src: '/images/jovina-sachet-water-drums.jpg', alt: 'tanks & drums' }
]

export default function Jovina(){
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#263FAF]">JOVINA - Sachet & Bottled Water</h1>
        <p className="text-gray-700 mt-3">Clean, purified water packaged in sachets and bottled formats for retail and corporate supply. Our RO + UV purification system ensures consistent quality.</p>

        <section className="mt-8">
          <h3 className="font-semibold mb-3">Production Gallery</h3>
          <ImageGallery images={imgs} />
        </section>

        <section className="mt-8">
          <h3 className="font-semibold">Quality & Process</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Multi-stage filtration (sand/carbon)</li>
            <li>Reverse osmosis and UV sterilization</li>
            <li>Automated filling and sealing</li>
            <li>Batch testing and pH checks</li>
          </ul>
        </section>

        <div className="mt-8">
          <a href="/contact" className="inline-block bg-[#19C0F0] text-white px-6 py-3 rounded-lg">Request Pricing</a>
        </div>
      </div>
    </main>
  )
}
