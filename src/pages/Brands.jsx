const brands = [
  { name: "JOVINA SACHET & BOTTLED WATER", tagline: "Clean, refreshing, and safe drinking water for every occasion." },
  { name: "JOBKLYN MULTIPURPOSE SOAP", tagline: "Your all-in-one solution for everyday cleaning." },
  { name: "JOBKLYN LIQUID SOAP", tagline: "Soft on hands, tough on dirt." },
  { name: "JOBKLYN BLACK HERBAL SOAP", tagline: "Natural care with herbal goodness." },
  { name: "JOZON POLY & PLASTIC", tagline: "Durable, reliable packaging solutions." },
  { name: "JOZON OIL & GAS", tagline: "Fueling your business with quality energy." },
  { name: "LUBRICANT & ENGINE OILS", tagline: "Protect your engines, enhance performance." }
];

export default function Brands() {
  return (
    <section id="brands" className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Our Products & Brands</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {brands.map((brand, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{brand.name}</h3>
            <p className="text-gray-600">{brand.tagline}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
