import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineNavigateNext } from "react-icons/md";



const data =[
    {
        imgs:'https://www.dreamstime.com/stock-photos-fruits-vegetables-image15528773',
        sidehead:'Cabbage',
        kg:'2kg'
    }

]
const duplicatedData = Array(6).fill(data[0]);
const Bundledetailes =()=>{

    const [count,setCount]= useState(0)

    const increaseCount=()=>{
        setCount(prevCount => prevCount +1)
    }
    const decreaseCount=()=>{
        if(count > 0){
            setCount(prevCount=>prevCount-1)
        }
    }
    


return(
<div className="px-4">

<div class="flex">
             <div class="justify-items-start static">
           <Link to ='/app/welcome' class="text-xl mt-1 pt-8"> 
           <FaArrowLeftLong /></Link> 
            </div>
            <div><h3 class="pl-12 pt-6 ml-20 md:pl-50 item-center text-xl font-medium">Bundles Details</h3></div>
            </div>
    

            <div className=" pt-4">
            <div className="w-11/12 h-80 carousel rounded-box ml-5 mt-5">
    <div className="carousel-item w-full ">
    <img src="https://img.freepik.com/free-photo/broccoli-background_1268-24720.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=sph"  alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src="https://img.freepik.com/free-photo/broccoli-background_1268-24720.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=sph" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src="https://img.freepik.com/free-photo/broccoli-background_1268-24720.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=sph"  alt="Tailwind CSS Carousel component" />
  </div> 
  
 
   
  
</div>
    </div>
  <div className="  pb-2">
        <h1 className="text-2xl font-semibold  ">Bundle Pack</h1>
        <p className="text-gray-500">Weight:5kg</p>
    </div>
    <div className=" pt-2 flex justify-between">
        <p className="pt-1 line-through">$30 </p> 
    <div className="pr-36 ">   <p className="text-3xl text-green-500 pr-20 font-bold"> $20</p></div> 
<div className="flex  item-end gap-2 pr-10">
    <button className=" " onClick={increaseCount}class="text-2xl border-2 border-slate-400 border h-8 w-8 text-green-700 ">+</button>
        <p class="text-xl">{count}</p>
        <button onClick={decreaseCount} class="text-2xl border h-8 w-8   border-2 border-slate-400 text-center text-green-700">-</button>
        </div>
        </div>

<div className="flex gap-24 pt-4 text-xl  font-bold ">
    <h2 >25 kg</h2><h2>Medium</h2><h2>17</h2>
    
</div>
<div className="flex gap-28 pt-2 text-gray-500"><p>Weight </p><p>size</p><p>items</p></div>

{/* <div >

    <h1>packs Details</h1>
{duplicatedData.map((item, index) => (

    <div key={index}>
        <figure>
            <img src={item.imgs} alt="no"/>
        </figure>
        
        
        <div>
            <h2>{item.sidehead}</h2>
        </div> 
    </div>
    
))}
</div> */}
<h1 className=" pt-4 text-xl">Packs Details</h1>
<div className="flex gap-20 pt-4 text-gray-500">
    
    <img src="https://img.freepik.com/free-psd/mix-fruits-png-isolated-transparent-background_191095-9865.jpg?w=900&t=st=1704782339~exp=1704782939~hmac=52adf568b142775518c342ddf859edd1abea662baa2a64ad69d2aa8ea2ffa28e" className="h-16 " alt="fk"/>
    <h1>Cabbage</h1>
    <p>2kg</p>
</div>
<div className="flex gap-20 text-gray-500">
    
    <img src="https://img.freepik.com/free-psd/mix-fruits-png-isolated-transparent-background_191095-9865.jpg?w=900&t=st=1704782339~exp=1704782939~hmac=52adf568b142775518c342ddf859edd1abea662baa2a64ad69d2aa8ea2ffa28e" className="h-16" alt="fk"/>
    <h1>Cabbage</h1>
    <p>2kg</p>
</div>
<div className="flex gap-20 text-gray-500">
    
    <img src="https://img.freepik.com/free-psd/mix-fruits-png-isolated-transparent-background_191095-9865.jpg?w=900&t=st=1704782339~exp=1704782939~hmac=52adf568b142775518c342ddf859edd1abea662baa2a64ad69d2aa8ea2ffa28e" className="h-16" alt="fk"/>
    <h1>Cabbage</h1>
    <p>2kg</p>
</div>
<div className="flex gap-20 text-gray-500">
    
    <img src="https://img.freepik.com/free-psd/mix-fruits-png-isolated-transparent-background_191095-9865.jpg?w=900&t=st=1704782339~exp=1704782939~hmac=52adf568b142775518c342ddf859edd1abea662baa2a64ad69d2aa8ea2ffa28e" className="h-16" alt="fk"/>
    <h1>Cabbage</h1>
    <p>2kg</p>
</div>
<div className="flex gap-20 text-gray-500">
    
    <img src="https://img.freepik.com/free-psd/mix-fruits-png-isolated-transparent-background_191095-9865.jpg?w=900&t=st=1704782339~exp=1704782939~hmac=52adf568b142775518c342ddf859edd1abea662baa2a64ad69d2aa8ea2ffa28e" className="h-16" alt="fk"/>
    <h1>Cabbage</h1>
    <p>2kg</p>
</div>
<div className=" ">
<div className=" pt-4 flex justify-between">
        <h3 className="text-xl">Review</h3>
        <span className="flex pt-1"><div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <MdOutlineNavigateNext />
</div> </span>
        
        </div>     
    </div > 
    <div className="border-`1 border-solid-black-100 flex pt-8 sticky pt-4 ">
         <AiOutlineShoppingCart   className="border-solid border-2  border h-16 w-16 rounded-xl h-14 w-14"/>
         <button className="btn btn-wide bg-green-500 ml-8 w-3/4 h-14">Buy Now</button>
            </div>


</div>
)
}
export default Bundledetailes