import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      
    </BrowserRouter>
  )
}

export default App
