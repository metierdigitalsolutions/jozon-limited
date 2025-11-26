import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header class='bg-white shadow p-4 flex justify-between'>
      <h1 class='font-bold text-xl'>JOSON LIMITED</h1>
      <nav class='flex gap-4'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/brands'>Brands</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </header>
  )
}
