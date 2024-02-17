import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link , useNavigate} from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
//import { addItem } from "../../features/Slice/cartSlice";

const Productdetails =() =>{

    const [count, setCount] = useState(0);
    const navigate = useNavigate();
   const dispatch = useDispatch()


const increaseCount = () => {
  setCount(prevCount => prevCount + 1);
};

const decreaseCount = () => {
  if (count > 0) {
    setCount(prevCount => prevCount - 1);
  }
};



const productData = {
  Image:'https://img.freepik.com/free-photo/broccoli-background_1268-24720.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=sphs',
  name: 'Cauliflower Bangladeshi',
  weight: '5kg',
  price: '$20',
  quantity: count,
};

// const handleAddToCart = () => {
//   dispatch(addItem(productData))
//   navigate('/app/checkout')

//   // Redirect to the AddCoupon page with product data as state
//   navigate('/app/addcoupon', { state: { productData } });
//   };

    return(
<div className="px-4">
<div class="flex">
             <div class="justify-items-start ">
           <Link to ='/app/welcome' class="text-xl mt-1 pt-8"> 
           <FaArrowLeftLong /></Link> 
            </div>
            <div><h3 class="pl- pt-6 ml-20 md:pl-50 item-center text-xl font-medium">Product Details</h3></div>
            </div>
    

            <div className=" pt-6">
            <div className="w-11/12 h-80 carousel rounded-box ml-5 mt-5">
    <div className="carousel-item w-full ">
    <img src="https://img.freepik.com/free-photo/broccoli-background_1268-24720.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=sphs"  alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src="https://img.freepik.com/free-photo/broccoli-background_1268-24720.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=sph"  alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src="https://img.freepik.com/free-photo/broccoli-background_1268-24720.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=sph"  alt="Tailwind CSS Carousel component" />
  </div> 
  
 
   
  
</div>
    </div>

    <div>
        <h1 className="text-2xl  pt-4 ">Cauliflower Bangladeshi</h1>
        <p className="text-gray-500">Weight:5kg</p>
    </div>
    <div className=" pt-4 flex justify-between">
        <p className="pt-1 line-through">$30 </p> 
    <div className="pr-36 ">   <p className="text-3xl text-green-500 pr-20 font-bold"> $20</p></div> 
<div className="flex  item-end gap-2">
    <button className=" " onClick={increaseCount}class="text-2xl border-2  border-solid h-8 w-8 text-green-700">+</button>
        <p class="text-xl">{count}</p>
        <button onClick={decreaseCount} class="text-2xl border h-8 w-8 text-center text-green-700">-</button>
        </div>
        </div>
    
    <div className="pt-6">
        <h2 className="text-2xl ">Product details</h2>
        <p className="text-gray-500">Duis aute veniam veiam sefrjhbfdvkhfd ewfkjnvfdvn fdh nbwriufbren rih jiunhrfirbfhjbvsduverfoiuew</p>

    <div className=" pt-6 flex justify-between">
        <h3 className="text-xl">Review</h3>
        <span className="flex pt-1"><div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div> </span>
        
        </div>     
    </div > 
    <div className="border-`1 border-solid-black-100 flex pt-12	position-fixed">
         <AiOutlineShoppingCart   className="border-solid border-2 rounded h-14 w-14" />
         <button className="btn btn-wide bg-green-500 ml-8 w-3/4">Buy Now</button>
            </div>
    
</div>
    )
}
export default Productdetails