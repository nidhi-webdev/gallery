import { useContext } from "react"
import { ThemeDataContext } from "../context/ThemeContext"



const Nav2 = () => {
  const dataFromContext = useContext(ThemeDataContext)
  console.log("From Nav2", dataFromContext );
  

  return (
    <div className='flex gap-32'>
      <h4>Home </h4>
      <h4> Contact </h4>
      <h4> About </h4>
      <h4> Services </h4>
      <h4> {dataFromContext} </h4>
    </div>
  )
}

export default Nav2
