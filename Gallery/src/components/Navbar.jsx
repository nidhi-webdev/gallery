import React from 'react'
import Nav2 from './Nav2'

const Navbar = (props) => {

  return (
    <div className='flex  bg-sky-300 justify-between px-20 py-10 text-xl text-black bold'>
      Navbar
      <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar
