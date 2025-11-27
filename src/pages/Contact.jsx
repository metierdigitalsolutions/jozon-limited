export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
      <p className="text-center text-gray-700 mb-8">
        Have a question or want to place an order? Reach out to us today.
      </p>
      <form className="max-w-2xl mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-3 rounded border border-gray-300" />
        <input type="email" placeholder="Email" className="p-3 rounded border border-gray-300" />
        <input type="tel" placeholder="Phone (optional)" className="p-3 rounded border border-gray-300" />
        <select className="p-3 rounded border border-gray-300">
          <option>Product of Interest</option>
          <option>JOVINA SACHET & BOTTLED WATER</option>
          <option>JOBKLYN MULTIPURPOSE SOAP</option>
          <option>JOBKLYN LIQUID SOAP</option>
          <option>JOBKLYN BLACK HERBAL SOAP</option>
          <option>JOZON POLY & PLASTIC</option>
          <option>JOZON OIL & GAS</option>
          <option>LUBRICANT & ENGINE OILS</option>
        </select>
        <textarea placeholder="Message" className="p-3 rounded border border-gray-300" rows="4"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Submit Inquiry
        </button>
      </form>
      <p className="text-center text-gray-500 mt-6">
        Or reach us directly at: <br/>
        📞 +234 XXX XXX XXXX | 📧 info@josonlimited.com
      </p>
    </section>
  );
}
