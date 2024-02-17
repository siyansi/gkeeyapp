import { Link } from "react-router-dom"
import { MdKeyboardBackspace } from "react-icons/md";
const Orderdetails = ()=> {

    return(
<div className="">
<div className="z-10 fixed top-16 left-0 w-full flex flex-col text-center bg-slate-100">
<Link to='/app/allorder'>
<MdKeyboardBackspace className="h-8  w-8 pl-2" />
<h1 className="text-xl">  Order Details </h1>  </Link>  
</div>


 <div className="mt-14 h-full  ">

    <h1 className="pl-4 text- font-semibold">Order ID:12344534678</h1>
<div className="pr-72 ">
    <ul className="timeline timeline-vertical    ">
  <li>
    <div className="timeline-start "><img className='h-10 w-10 rounded-full'src="https://img.freepik.com/free-vector/green-double-circle-check-mark_78370-1749.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=sph"/></div>
    <div className="timeline-middle ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

    </div>
    <div className="timeline-end h-20 pt-4"><p>Order Comfrimed</p> <p className="text-sm flex">12/03/2023 <p className="pl-16">07.00.PM</p></p></div>
    <hr className="bg-success"/>
  </li>
  <li>
    <hr  className="bg-success"/>
    <div className="timeline-start"><img  className='h-10 w-10 rounded-full'src="https://img.freepik.com/premium-vector/recycle-sign-green-background-vector-illustration_24908-32319.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais"/></div>
    <div className="timeline-middle">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
    </div>
    <div className="timeline-end h-16 pt-4 "><p>Order Proccessing</p> <p className="text-sm flex">12/03/2023 <p className="pl-16">07.00.PM</p></p></div>
    <hr className="bg-success" />
  </li>
  <li>
    <hr  className="bg-success"/>
    <div className="timeline-start"><img className='h-10 w-10 rounded-full' src="https://img.freepik.com/premium-vector/home-delivey-concept-with-blue-italian-trike-pickup-packages-vector_265571-8.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais"/></div>
    <div className="timeline-middle">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
    </div>
    <div className="timeline-end h-14 pt-3"><p>Order Proccessing</p> <p className="text-sm flex ">12/03/2023 <div className=" pl-16"><p className="">07.00.PM</p></div></p></div>
    <hr  className="bg-success"/>
  </li>
  <li>
    <hr  className="bg-success"/>
    <div className="timeline-start"><img className='h-10 w-10 rounded-full' src="https://img.freepik.com/free-vector/cash-delivery-concept_23-2148768275.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=sph"/></div>
    <div className="timeline-middle">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 bg-slate-200 rounded-badge">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
    </div>
    <div className="timeline-end h-16 pt-3"><p>Order Proccessing</p> <p className="text-sm flex">12/03/2023 <p className="pl-16">07.00.PM</p></p></div>
   
  </li>
  
</ul>
</div>



</div>
<div className="">
<h1 className="text-xl font-bold pl-4">Product Details</h1>

<div className="flex w- bg-white mt-4 rounded-xl">
    <figure className="mt-6">
        <img className="h-24 w-24 pl-2" src="https://img.freepik.com/premium-photo/ice-cream-balls-paper-cup_781871-41.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais"/>
    </figure>
    <div className="flex ">
<div className="pl-4 pt-8">
  <h1 className="text-lg ">Perry's ice cream Banana</h1><p className="text-sm pt-4 text-gray-500">800 gm</p>
</div>

<div className="pl-2 mt-8">
  <p className="text-2xl font-bold pl-4">$13</p><p className="pt-4 pl-4">3x</p> 
</div>
<p className="border-b-4 border-zinc-500"></p>
</div>

</div>

<div  className="flex w- bg-white border-t-2 border-gray-300 rounded-l-lg">
<figure className="mt-6">
        <img className="h-24 w-24 pl-2" src="https://img.freepik.com/free-vector/ice-cream-pack_98292-7078.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais"/>
    </figure>
    <div className="flex ">
<div className="pl-4 pt-8">
  <h1 className="text-lg ">Vennila ice cream Banana</h1><p className="text-sm pt-4 text-gray-500">500 gm</p>
</div>

<div className="pl-2 mt-8">
  <p className="text-2xl font-bold pl-4">$12</p><p className="pt-4 pl-4">3x</p> 
</div>
<p className="border-b-4 border-zinc-500"></p>
</div>
</div>
<div  className="flex w- bg-white border-t-2 border-gray-300 rounded-l-lg">
<figure className="mt-6">
        <img className="h-24 w-24 pl-2" src="https://img.freepik.com/premium-photo/mutton-meat-isolated_181303-255.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=sph"/>
    </figure>
    <div className="flex ">
<div className="pl-4 pt-8">
  <h1 className="text-lg ">Meat </h1><p className="text-sm pt-4 text-gray-500">1 kg</p>
</div>

<div className="pl-2 mt-8">
  <p className="text-2xl font-bold pl-44 ">$15</p><p className="pt-4 pl-44">3x</p> 
</div>
<p className="border-b-4 border-zinc-500"></p>
</div>
</div>

 </div>
</div>
    )
}
export default Orderdetails