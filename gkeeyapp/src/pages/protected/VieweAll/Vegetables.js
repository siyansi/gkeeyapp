import { FaArrowLeftLong } from "react-icons/fa6";
import { Link,useNavigate } from "react-router-dom";
const data = [
    {
      img: "https://img.freepik.com/premium-psd/3d-packaging-design-mockup-ice-cream-cups_205227-129.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais",
      heading: "Perry ice Cream",
      subheading: "Banana",
      RS: "$35",
      rs: "$50.32",
    },
  ];
  const duplicatedData = Array(8).fill(data[0]);
 const Vegetables =()=>{
const navigate = useNavigate()
    return(


<div>   
<div class="flex">
             <div class="justify-items-start ">
           <Link to = '/app/menu'className="text-xl mt-1 pt-10" > < FaArrowLeftLong   />
 </Link> 
            </div>
            <div><h3 class="pl-12 pt-6 ml-20 md:pl-50 item-center text-xl font-medium">Bundle Details</h3></div>
            </div>
<div className="flex flex-col items-center text-xl py-4">
<div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 pt-8" >
      {duplicatedData.map((item, index) => (
        <div key={index} className="card w-44 h-66 bg-base-100 m-2 shadow-xl pb-4" onClick={()=>navigate('/app/product')} >
          <figure>
            <img className="w-28 h-28" src={item.img} alt="Fruits" />
          </figure>
          <div className="pl-4 ">
            <h2 className="card-title text-xl ">{item.heading}</h2>
            <p className="text-sm">{item.subheading} </p>
            <div className="card-actions justify-start">
              <div className=" ">
                <h2 className="text-xl">{item.RS}</h2>
              </div>
              <div className=" pt-2 text-lg  line-through" >
                {" "}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
</div>

</div>
</div>   

    )
}
export default Vegetables