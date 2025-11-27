import { Link } from 'react-router-dom'
import { BRANDS } from '../data/brands'

export default function Brands(){
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#263FAF] mb-6">Products</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {BRANDS.map(b => (
          <Link key={b.slug} to={`/brands/${b.slug}`} className="block bg-white rounded-xl shadow p-6 hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-[#263FAF]">{b.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{b.short}</p>
            <div className="mt-4 text-sm text-[#19C0F0] font-medium">View product →</div>
          </Link>
        ))}
      </div>
    </main>
  )
}
