import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-white shadow p-4 flex justify-between'>
      <h1 className='font-bold text-xl'>JOSON LIMITED</h1>
      <nav className='flex gap-4'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/brands'>Brands</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </header>
  )
}
