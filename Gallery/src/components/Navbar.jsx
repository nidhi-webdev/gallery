import  { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {

  const dataFromContext = useContext(ThemeDataContext)
  console.log(dataFromContext);
  

  return (
    <div className='flex  bg-sky-300 justify-between px-20 py-10 text-xl text-black bold'>
      Navbar

      <h2>  {dataFromContext} </h2>
      <Nav2 />
    </div>
  )
}

export default Navbar
