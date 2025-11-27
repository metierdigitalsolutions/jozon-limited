export default function Footer(){
  return (
    <footer className="bg-[#0f1724] text-white py-8 mt-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div>
          <img src="/logo.jpeg" alt="JOSON" className="w-12 h-12 mb-3"/>
          <p className="text-gray-300 text-sm">JOSON LIMITED — delivering quality products across beverages, personal care, packaging and energy.</p>
        </div>

        <div className="text-sm text-gray-300">
          <h4 className="font-semibold text-white mb-2">Quick links</h4>
          <ul className="space-y-2">
            <li><a className="hover:underline" href="/">Home</a></li>
            <li><a className="hover:underline" href="/about">About</a></li>
            <li><a className="hover:underline" href="/brands">Products</a></li>
            <li><a className="hover:underline" href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="text-sm text-gray-300">
          <h4 className="font-semibold text-white mb-2">Contact</h4>
          <p>📞 +234 806 649 3451</p>
          <p>✉️ info@josonlimited.com</p>
          <p className="mt-3 text-xs text-gray-400">© {new Date().getFullYear()} JOSON LIMITED. All rights reserved.</p>
          <p className="mt-3 text-xs text-gray-400"> Designed by <a href="https://metierdigitals.com" target="_blank" className="text-blue-500">Metier Digital Solutions</a></p>
        </div>
      </div>
    </footer>
  )
}
