import { Link } from "react-router-dom"

const All = ()=> {
    return(

<div>
<div className="px-3 ">

<div className="flex flex-col w-full lg:flex-row">

  <div className="grid flex-grow h-32 card bg-neutral-100 rounded-box  text-left hover:bg-zinc-300 cursor-pointer  ">
  <div className="flex flex-colm pt-2 pl-3"> <p className="  text-gray-500 text-start ">Order ID: </p><p> 235e5t546eg</p> <p className="text-gray-500 pl-44 ">25 NOV</p></div>
  <div ><p className="p-none absolute pt-4 pl-3 ">Status </p></div>
   <Link to = '/app/orderdetails'><ul className="steps steps-horizontal lg:steps-horizontal ml-8 list-none">
  <li className="step step-primary text-violet-900" >Confrimed</li>
  <li className="step list-none"></li>
  <li className="step list-none"></li>
  <li className="step list-none"></li>
 
</ul></Link>
</div> 
  
  
  </div>

  <div className="flex flex-col w-full lg:flex-row pt-3">

  <div className="grid flex-grow h-32 card bg-neutral-100 rounded-box  text-left hover:bg-zinc-300 cursor-pointer ">
  <div className="flex flex-colm pt-2 pl-3"> <p className="  text-gray-500 text-start ">Order ID: </p><p> 235e5t546eg</p> <p className="text-gray-500 pl-44 ">25 NOV</p></div>
  <div ><p className="p-none absolute pt-4 pl-3 ">Status </p></div>
   <ul className="steps steps-horizontal lg:steps-horizontal ml-8 list-none">
 <li className="step step-success"></li>
    <li className="step step-success text-green-700">Processing</li>
  <li className="step list-none"></li>
  <li className="step list-none"></li>
  
</ul>
</div> 
  
  
  </div>
  <div className="flex flex-col w-full lg:flex-row pt-3">

  <div className="grid flex-grow h-32 card bg-neutral-100 rounded-box  text-left hover:bg-zinc-300 cursor-pointer ">
  <div className="flex flex-colm pt-2 pl-3"> <p className="  text-gray-500 text-start ">Order ID: </p><p> 235e5t546eg</p> <p className="text-gray-500 pl-44 ">25 NOV</p></div>
  <div ><p className="p-none absolute pt-4 pl-3 ">Status </p></div>
   <ul className="steps steps-horizontal lg:steps-horizontal ml-8 list-none">
  <li className="step step-warning"></li>
    <li className="step step-warning"></li>
    <li className="step step-warning text-yellow-500">Shipping</li>
  <li className="step list-none"></li>
 
</ul>
</div> 
  
  
  </div>
  <div className="flex flex-col w-full lg:flex-row pt-3">

  <div className="grid flex-grow h-32 card bg-neutral-100 rounded-box  text-left hover:bg-zinc-300 cursor-pointer">
  <div className="flex flex-colm pt-2 pl-3"> <p className="  text-gray-500 text-start ">Order ID: </p><p> 235e5t546eg</p> <p className="text-gray-500 pl-44 ">25 NOV</p></div>
  <div ><p className=" absolute pt-4 pl-3 ">Status </p></div>
   <ul className="steps steps-horizontal lg:steps-horizontal ml-8 ">

 <li className="step step-success"></li>
    <li className="step step-success"></li>
    <li className="step step-success"></li>
    <li className="step step-success text-green-700">Delivery</li>
  
</ul>
</div> 
  
  
  </div>
  <div className="flex flex-col w-full lg:flex-row pt-3">

  <div className="grid flex-grow h-32 card bg-neutral-100 rounded-box  text-left hover:bg-zinc-300 cursor-pointer">
  <div className="flex flex-colm pt-2 pl-3"> <p className="  text-gray-500 text-start ">Order ID: </p><p> 235e5t546eg</p> <p className="text-gray-500 pl-44 ">25 NOV</p></div>
  <div ><p className="p-none absolute pt-4 pl-3 ">Status </p></div>
   <ul className="steps steps-horizontal lg:steps-horizontal ml-8 list-none">
   <li className="step step-error"></li>
    <li className="step step-error"></li>
    <li className="step step-error"></li>
    <li className="step step-error text-red-500">Cancelled</li>
  
</ul>
</div> 
  
  
  </div>



</div>

</div>
    )
}

export default All