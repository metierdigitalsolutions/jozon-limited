import { useParams } from 'react-router-dom'
import { BRANDS } from '../data/brands'

export default function Brand(){
  const { slug } = useParams()
  const brand = BRANDS.find(b => b.slug === slug)

  if(!brand){
    return (
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold">Brand not found</h2>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#263FAF]">{brand.title}</h1>
        <p className="text-gray-700 mt-3">{brand.description}</p>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {brand.images?.map((src,i) => (
            <img key={i} src={src} alt={`${brand.title} ${i+1}`} className="w-full rounded-lg shadow"/>
          ))}
        </div>

        {/* Optional: product variants or CTA */}
        <div className="mt-8">
          <a href="/contact" className="inline-block bg-[#19C0F0] text-white px-6 py-3 rounded-lg">Enquire / Order</a>
        </div>
      </div>
    </main>
  )
}
