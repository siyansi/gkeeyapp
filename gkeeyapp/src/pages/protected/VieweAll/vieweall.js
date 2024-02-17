import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link,useNavigate } from "react-router-dom";
const data = [
    {
      img: "https://img.freepik.com/premium-vector/fresh-fruits-wicker-basket-isolated-white_43605-2367.jpg?size=626&ext=jpg",
      heading: "Bundle Pack",
      subheading: "Onion, Oil, Salt",
      RS: "$35",
      rs: "$50.32",
    },
  ];
  const duplicatedData = Array(8).fill(data[0]);
const VieweAll =()=>{
const  navigate=useNavigate()
    return(
<div>   
<div class="flex">
             <div class="justify-items-start ">
           <Link to = '/app/welcome'className="text-xl mt-1 pt-10" > < FaArrowLeftLong   />
 </Link> 
            </div>
            <div><h3 class="pl-12 pt-6 ml-20 md:pl-50 item-center text-xl font-medium">Bundle Details</h3></div>
            </div>
<div className="flex flex-col items-center text-xl py-4">
<div>
<div className="grid grid-cols-2 lg:grid-cols-4 pt-8" >
      {duplicatedData.map((item, index) => (
        <div key={index} className="card w-44 h-66 bg-base-100 m-2 shadow-xl pb-4" onClick={()=>navigate('/app/bundledetails')}>
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
              <div className=" pt-2 text-sm  line-through" pl-544>
                {item.rs}{" "}
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
export default VieweAll