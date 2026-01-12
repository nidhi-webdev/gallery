import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate('/')

  const btnClicked = () => {
    navigate('/')

  }

  return (
    <div className="text-white">
      <button onClick={btnClicked} className="bg-emerald-900 px-4 py-2 rounded m-4 font-medium" > Return Back to Home </button>
      <h1> About </h1>
    </div>
  )
}

export default About
