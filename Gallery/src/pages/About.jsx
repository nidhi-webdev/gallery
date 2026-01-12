import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate('/')



  return (
    <div className="text-white">
      <button
        onClick={() => {
          navigate('/')
        }} className="bg-emerald-900 px-4 py-2 rounded m-4 font-medium" > Return Back to Home </button>

      <button
        onClick={() => {
          navigate(-1)
        }} className="bg-emerald-900 px-4 py-2 rounded m-4 font-medium" >  Back  </button>

      <h1> About Page </h1>
    </div>
  )
}

export default About
