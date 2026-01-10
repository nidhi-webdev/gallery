const Cards = (props) => { 
  return (
    <div>
       <a href={props.elem.url}>
          <div className="bg-white h-40 flex flex-col rounded-2xl">
            <img src={props.elem.download_url} alt="Image" className="h-[85%] w-full object-cover rounded-2xl" />
            <h1 className="text-black text-center bold text-lg  ">{props.elem.author}</h1>
          </div>
        </a>
    </div>
  )
}

export default Cards
