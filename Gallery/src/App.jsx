import axios from "axios"
import { useEffect, useState } from "react"

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


  let printUserdata = <h3 className="text-gray-400"> Loading... </h3>

  if (userdata.length > 0) {
    printUserdata = userdata.map((elem, idx) => (
      <div key={idx}>
        <a href={elem.url}>
          <div className="bg-white h-40 flex flex-col rounded-2xl">
            <img src={elem.download_url} alt="Image" className="h-[85%] w-full object-cover rounded-2xl" />
            <h1 className="text-black text-center bold text-lg  ">{elem.author}</h1>
          </div>
        </a>
      </div>
    ));

  }

  return (
    <div className='text-white bg-black h-screen p-4 overflow-auto'>
      <div className="text-6xl bg-amber-700 fixed"> {index}</div>
      <div className="grid grid-cols-5 gap-4 w-full">
        {printUserdata}
      </div>
      <div className="flex justify-center gap-6 items-center p-4">
        <button onClick={() => {
          if (index > 1) {
            setIndex(index - 1)
            setUserData([])
          }

        }}
          className="bg-yellow-500 text-sm text-black px-4 py-2 font-semibold rounded cursor-pointer active:scale-95"> Prev </button>
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
