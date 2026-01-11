import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Mobile from './pages/Mobile'
import Telephone from './pages/Telephone'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/contact' element={<Contact />}>
         <Route path='telephone' element={<Mobile />} />
         <Route path='mobile' element={<Telephone />} />
         </Route>
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Notfound/>} />
        <Route />
        <Route />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
