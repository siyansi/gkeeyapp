import { useNavigate } from "react-router-dom";

const data = [
    {
      img: "https://img.freepik.com/free-vector/ice-cream-pack_98292-7078.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais",
      heading: "Bundle Pack",
      subheading: "Onion, Oil, Salt",
      RS: "$35",
      rs: "$50.32",
    },
  ];
  const duplicatedData = Array(8).fill(0).map((_,index)=>({
    ...data[0],
    id: index + 1,
  }))
const Newitems =()=>{
const navigate=useNavigate()

    return(
<div className=" overflow-x-auto grid " >
<div className=" flex  md:flex-wrap lg:flex" >
      {duplicatedData.map((item, index) => (
        <div key={item.id} className="card w-44 h-66 bg-base-100 m-2 shadow-xl pb-10"  onClick={()=>navigate(`/app/Product/${item.id}`)} >
          <figure>
            <img className="w-28 h-28" src={item.img} alt="Fruits" />
          </figure>
          <div className="pl-4 ">
            <h2 className="card-title text-2xl ">{item.heading}</h2>
            <p className="text-sm">{item.subheading} </p>
            <div className="card-actions justify-start">
              <div className=" ">
                <h2 className="text-xl">{item.RS}</h2>
              </div>
              <div className=" pt-2 text-lg text-xs line-through" pl-544>
                {" "}
                {item.rs}{" "}
              </div>
            </div>
          </div>
        </div>
        
      ))}



      
    </div>
    </div>
    )
}
export default Newitems