export default function About(){
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#263FAF] mb-4">About JOSON NIGERIA LIMITED</h1>
        <p className="text-gray-700 leading-relaxed text-lg">
          JOSON NIGERIA LIMITED is a multi-industry company dedicated to producing essential products that support healthier living and stronger businesses.
          We operate across beverages, personal care, packaging, and energy sectors — delivering consistent quality and value to our customers.
        </p>
      </div>

      <section className="mt-12 grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-semibold text-[#263FAF]">Our Vision</h3>
          <p className="text-gray-600 mt-2 text-sm">To be a leading African brand known for quality and innovation.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-semibold text-[#263FAF]">Our Mission</h3>
          <p className="text-gray-600 mt-2 text-sm">Deliver high-quality products that improve everyday life.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-semibold text-[#263FAF]">Values</h3>
          <p className="text-gray-600 mt-2 text-sm">Quality — Reliability — Customer Focus — Innovation</p>
        </div>
      </section>
    </main>
  )
}
