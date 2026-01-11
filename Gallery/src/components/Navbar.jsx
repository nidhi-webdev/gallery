import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-4 bg-cyan-700'>
     <h2 className='text-xl font-bold'> My Page </h2>
     <div className='flex gap-8 text-xl font-bold'>
        <a href='/'>Home </a>
        <a href='/'> Contact </a>
        <a href='/'>About</a>
     </div>
    </div>
  )
}

export default Navbar
