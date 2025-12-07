// src/pages/brands/Jobklyn.jsx
import ImageGallery from '../../components/ImageGallery'
const imgs = [
  { src: '/images/jobklyn-organic-soaps.jpg', alt: 'jobklyn soap packs' },
  { src: '/images/jobklyn-organic-soaps-2.jpg', alt: 'soap boxes' },
  { src: '/images/jobklyn-soap-packs.jpg', alt: 'boxed jobklyn' }
]

export default function Jobklyn(){
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#263FAF]">JOBKLYN - Soaps</h1>
      <p className="mt-3 text-gray-700">Herbal black soaps and multipurpose options formulated for gentle cleansing and skin nourishment.</p>

      <section className="mt-8">
        <ImageGallery images={imgs} />
      </section>

      <section className="mt-8">
        <h3 className="font-semibold">Packaging & Fulfillment</h3>
        <p className="text-gray-600 mt-2">We provide retail packaging, box-packing, and pallet-ready cartons for fast distribution.</p>
      </section>

      <div className="mt-8">
        <a href="/contact" className="inline-block bg-[#19C0F0] text-white px-6 py-3 rounded-lg">Enquire</a>
      </div>
    </main>
  )
}
