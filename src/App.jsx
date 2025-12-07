// App.jsx (excerpt)
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Brands from './pages/Brands'
import Contact from './pages/Contact'
import Jovina from './pages/brands/Jovina'
import Jobklyn from './pages/brands/Jobklyn'
import Polybags from './pages/brands/Polybags'

import Header from './components/Header'
import Footer from './components/Footer'
import Brand from './pages/Brand'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/brands' element={<Brands />} />
        <Route path="/brands/:slug" element={<Brand/>}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/brands/jovina-water' element={<Jovina />} />
        <Route path='/brands/jobklyn-multipurpose' element={<Jobklyn />} />
        <Route path='/brands/jozon-poly' element={<Polybags />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

{/* <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/brands" element={<Brands />} />
  <Route path="/brands/jovina-water" element={<Jovina />} />
  <Route path="/brands/jobklyn-multipurpose" element={<Jobklyn />} />
  <Route path="/brands/jozon-poly" element={<Polybags />} />
  <Route path="/contact" element={<Contact />} />
</Routes> */}
