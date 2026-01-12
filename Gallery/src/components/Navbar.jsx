import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-4 bg-cyan-700 items-center'>
     <h2 className='text-xl font-bold'> My Page </h2>
     <div className='flex gap-8 text-xl font-bold'>
        <Link to="/"> Home </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/about"> About </Link>
     </div>
    </div>
  )
}

export default Navbar
