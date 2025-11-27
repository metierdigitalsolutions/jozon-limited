import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.target)
    setStatus('sending')

    // Formspree example: replace URL with your form endpoint
    const endpoint = 'https://formspree.io/f/yourFormId' // <-- replace
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: form
      })
      if(res.ok) setStatus('sent')
      else setStatus('error')
    } catch(err){
      setStatus('error')
    }
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-[#263FAF] mb-4">Contact Us</h2>

        <form onSubmit={handleSubmit} className="grid gap-3">
          <input name="name" required className="border p-3 rounded" placeholder="Full name"/>
          <input name="email" type="email" required className="border p-3 rounded" placeholder="Email address"/>
          <input name="phone" className="border p-3 rounded" placeholder="Phone (optional)"/>
          <select name="product" className="border p-3 rounded">
            <option value="">Product of interest</option>
            {BRANDS.map(b=> <option key={b.slug} value={b.title}>{b.title}</option>)}
          </select>
          <textarea name="message" rows="5" className="border p-3 rounded" placeholder="Message"></textarea>

          <button type="submit" className="bg-[#19C0F0] text-white px-5 py-3 rounded-lg">Send Inquiry</button>
        </form>

        {status === 'sending' && <p className="mt-3 text-sm text-gray-500">Sending…</p>}
        {status === 'sent' && <p className="mt-3 text-sm text-green-600">Thanks — we received your message.</p>}
        {status === 'error' && <p className="mt-3 text-sm text-red-600">Something went wrong. Try again later.</p>}
      </div>
    </main>
  )
}
