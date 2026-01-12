import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Mobile from './pages/Mobile'
import Telephone from './pages/Telephone'
import Fax from './pages/Fax'
import Course from './pages/course'
import CourseDetails from './pages/CourseDetails'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/mobile' element={<Mobile />} />
        <Route path='/contact/telephone' element={<Telephone />} />
        <Route path='/contact/fax' element={<Fax />} />

        <Route path='/about' element={<About />} />

        <Route path='/course' element={<Course />} />
        <Route path='/course/:id' element={<CourseDetails />} />

        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
