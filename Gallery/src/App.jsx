import axios from "axios"
import { useState } from "react"

const App = () => {
  const [userdata, setUserData] = useState([]);

  const getData = async () => {
    const res = await axios.get('https://picsum.photos/v2/list?page=3&limit=30')
    setUserData(res.data)
    console.log(res.data);

  }

  let printUserdata = "No User Data"

  if (userdata.length > 0) {
    printUserdata = userdata.map((elem, idx) => {
      return <div key={idx}>
        <div key={idx} className="h-40 w-50 bg-white">
          <img src={elem.download_url} alt="Image" className="h-[90%] w-full object-cover" />
        </div>
        <h1> {elem.author} </h1>
      </div>
    })

  }

  return (
    <div className='text-white bg-black h-screen p-4 overflow-auto'>
      <button onClick={getData}
        className='bg-green-600 text-white px-5 py-2 rounded m-4 active:scale-95'> Get Data </button>
      <div className="flex flex-wrap gap-4">
        {printUserdata}
      </div>
    </div>

  )
}

export default App
