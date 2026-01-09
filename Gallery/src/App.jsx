import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {
  const [userdata, setUserData] = useState([]);

  const getData = async () => {
    const res = await axios.get('https://picsum.photos/v2/list?page=3&limit=30')
    setUserData(res.data)
    console.log(res.data);

  }

  useEffect(() => {
    getData()
  }, [])
  

  let printUserdata = "No User Data"

  if (userdata.length > 0) {
    printUserdata = userdata.map((elem, idx) => (
      <div key={idx}>
        <a href={elem.url}>
          <div  className="bg-white h-40 flex flex-col rounded-2xl">
            <img src={elem.download_url} alt="Image" className="h-[85%] w-full object-cover rounded-2xl" />
            <h1 className="text-black text-center bold text-lg  ">{elem.author}</h1>
          </div>
        </a>
      </div>
    ));

  }

  return (
    <div className='text-white bg-black h-screen p-4 overflow-auto'>
      <div className="grid grid-cols-5 gap-4 w-full">
        {printUserdata}
      </div>
    </div>

  )
}

export default App
