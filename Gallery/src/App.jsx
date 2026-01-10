import axios from "axios"
import { useEffect, useState } from "react"
import Cards from "./components/Cards";

const App = () => {
  const [userdata, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(res.data)
    console.log(res.data);

  }

  useEffect(() => {
    getData()
  }, [index])


  let printUserdata = <h3 className="text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold"> Loading... </h3>

  if (userdata.length > 0) {
    printUserdata = userdata.map((elem, idx) => (
      <div key={idx}>
       <Cards elem={elem}  />
      </div>
    ));

  }

  return (
    <div className='text-white bg-black h-screen p-4 overflow-auto'>
      <div className="grid grid-cols-5 gap-4 w-full">
        {printUserdata}
      </div>
      <div className="flex justify-center gap-6 items-center p-4">
        <button style={{opacity: index == 1 ? 0.5 : 1}}
        onClick={() => {
          if (index > 1) {
            setIndex(index - 1)
            setUserData([])
          }

        }}
          className="bg-yellow-500 text-sm text-black px-4 py-2 font-semibold rounded cursor-pointer active:scale-95"> Prev </button>

          <h4>Page {index}</h4>
        <button onClick={() => {
          setUserData([])
          setIndex(index + 1)
        }}
          className="bg-yellow-500 text-sm text-black px-4 py-2 font-semibold rounded cursor-pointer active:scale-95"> Next </button>

      </div>
    </div>

  )
}

export default App
