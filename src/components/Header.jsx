import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="JOSON" className="w-10 h-10 object-contain" />
          <div>
            <div className="font-bold text-lg text-[#263FAF]">JOSON LIMITED</div>
            <div className="text-xs text-gray-500 -mt-0.5">Quality You Can Trust</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive})=> isActive? 'text-[#19C0F0] font-medium' : 'text-gray-700'}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive? 'text-[#19C0F0] font-medium' : 'text-gray-700'}>About</NavLink>
          <NavLink to="/brands" className={({isActive})=> isActive? 'text-[#19C0F0] font-medium' : 'text-gray-700'}>Products</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive? 'text-[#19C0F0] font-medium' : 'text-gray-700'}>Contact</NavLink>
        </nav>

        <div className="md:hidden">
          <button onClick={()=> setOpen(v=>!v)} aria-label="menu" className="p-2 rounded border">
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-3 gap-2">
            <Link to="/" onClick={()=>setOpen(false)} className="py-2">Home</Link>
            <Link to="/about" onClick={()=>setOpen(false)} className="py-2">About</Link>
            <Link to="/brands" onClick={()=>setOpen(false)} className="py-2">Products</Link>
            <Link to="/contact" onClick={()=>setOpen(false)} className="py-2">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
