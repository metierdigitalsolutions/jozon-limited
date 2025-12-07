import { useState } from 'react'
import { BRANDS } from '../data/brands'

export default function Contact(){
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.target)
    setStatus('sending')

    // TODO: Replace with your real Formspree endpoint
    const endpoint = 'https://formspree.io/f/yourFormId'

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: form
      })

      if (res.ok) {
        setStatus('sent')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch (err){
      setStatus('error')
    }
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
        
        <h2 className="text-3xl font-bold text-[#263FAF] mb-2">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-6">
          Reach out to JOSON LIMITED for product inquiries, distribution, or partnership opportunities.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input 
            name="name" 
            required 
            className="border p-3 rounded-lg focus:ring focus:ring-[#19C0F0]/40 outline-none"
            placeholder="Full name"
          />

          <input 
            name="email" 
            type="email" 
            required 
            className="border p-3 rounded-lg focus:ring focus:ring-[#19C0F0]/40 outline-none"
            placeholder="Email address"
          />

          <input 
            name="phone"
            className="border p-3 rounded-lg focus:ring focus:ring-[#19C0F0]/40 outline-none"
            placeholder="Phone (optional)"
          />

          <select 
            name="product"
            className="border p-3 rounded-lg bg-white focus:ring focus:ring-[#19C0F0]/40 outline-none"
          >
            <option value="">Product of interest</option>
            {BRANDS.map(b => (
              <option key={b.slug} value={b.title}>{b.title}</option>
            ))}
          </select>

          <textarea 
            name="message" 
            rows="5" 
            required
            className="border p-3 rounded-lg focus:ring focus:ring-[#19C0F0]/40 outline-none"
            placeholder="Message"
          ></textarea>

          <button 
            type="submit" 
            className="bg-[#19C0F0] hover:bg-[#0EA5D3] transition text-white px-5 py-3 rounded-lg font-semibold"
          >
            {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
          </button>
        </form>

        {status === 'sending' && (
          <p className="mt-4 text-sm text-gray-500 animate-pulse">
            Sending your message…
          </p>
        )}

        {status === 'sent' && (
          <p className="mt-4 text-sm text-green-600 font-medium">
            Thank you — your inquiry has been received!
          </p>
        )}

        {status === 'error' && (
          <p className="mt-4 text-sm text-red-600 font-medium">
            Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </main>
  )
}
