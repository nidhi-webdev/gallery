import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = (props) => {

  const data = useContext(ThemeDataContext)
  console.log(data);
  

  return (
    <div className='flex  bg-sky-300 justify-between px-20 py-10 text-xl text-black bold'>
      Navbar

      <h2>  {data} </h2>
      <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar
