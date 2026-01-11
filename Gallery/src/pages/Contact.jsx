import { Link, Outlet } from "react-router-dom"

const Contact = () => {
  return (
    <div className="text-white">
     <h1> Contact </h1> 
     <Link to="/contact/mobile"> Mobile </Link>
     <Link to="/contact/telephone"> Telephone </Link>
     <Link to="/contact/fax"> Fax </Link>
     <Outlet />
    </div>
    
  )
}

export default Contact
