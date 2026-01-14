import React from 'react'

const Button = () => {
 
    const changeTheme = () => {
        console.log("hello from Button");
        
    }


  return (
    <div>
      <button onClick={changeTheme} className='bg-gray-600 m-3 px-4 py-2 rounded'> Change Theme </button>
    </div>
  )
}

export default Button
