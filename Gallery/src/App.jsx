import axios from "axios"
import { useState } from "react"

const App = () => {
  const [userdata, setUserData] = useState([]);

  const getData = async () => {
    const res = await axios.get('https://picsum.photos/v2/list?page=2&limit=15')
    setUserData(res.data)
    console.log(res.data);

  }

  let printUserdata = "No User Data"

  if (userdata.length > 0) {
    printUserdata = userdata.map((elem, idx) => {
      return <div key={idx}>
        <img src={elem.download_url} />
      </div>
    })

  }

  return (
    <div className='text-white bg-black h-screen p-4 overflow-auto'>
      <button onClick={getData}
        className='bg-green-600 text-white px-5 py-2 rounded m-4 active:scale-95'> Get Data </button>
      <div>
        {printUserdata}
      </div>
    </div>

  )
}

export default App
