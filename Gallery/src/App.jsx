import axios from "axios"

const App = () => {
  const getData = async () => {
   const res = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
   console.log(res);
   

  }



  return (
    <div className='text-white bg-black h-screen p-4'>
      <button onClick={getData}
        className='bg-green-600 text-white px-5 py-2 rounded m-4 active:scale-95'> Get Data </button>
    </div>
  )
}

export default App
