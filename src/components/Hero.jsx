export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-blue-700 to-blue-500 text-white">
      <div className="max-w-3xl mx-auto animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          JOSON NIGERIA LIMITED
        </h1>
        <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
          A multi-brand company delivering excellence in water production, personal care,
          plastics manufacturing, and energy products across Nigeria.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href="#brands"
            className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
          >
            View Products
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-green-500 text-white font-semibold rounded-xl shadow hover:bg-green-600 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
