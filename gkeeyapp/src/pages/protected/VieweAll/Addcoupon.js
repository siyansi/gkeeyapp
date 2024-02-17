import { useEffect, useState } from "react"
import { MdDelete  } from "react-icons/md";
import Footer from "./Homemenu";
import { useLocation, useNavigate } from "react-router-dom";
//import { removeItem } from "../../features/Slice/cartSlice";
import { updateSummary } from "../../../features/Slice/cartSummarySlice";
import { useSelector,useDispatch } from "react-redux";

const Addcoupon = () =>{

    const [count,setCount]= useState(0)
    const [count1,setCount1]=useState(0)

const navigate=useNavigate()




// const  productData= {
//   Image:'https://img.freepik.com/free-photo/broccoli-background_1268-24720.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=sphs',
//   name: 'Cauliflower Bangladeshi',
//   weight: '5kg',
//   price: '$20',
//   quantity: count,
// };

// const cartItems = useSelector((state)=> state.cart)
// const cartSummary =useSelector((state)=>{
//    console.log(state)
//    return state.cartSummary
// })

// const dispatch=useDispatch()

//   useEffect(()=>{
//     let totalItems=0;
//     let totalWeight=0;
//     let totalPrice=0;
  

//   cartItems.forEach((item)=>{
//     totalItems += 1;
//     totalWeight+=parseFloat(item.weight);
//     totalPrice+=parseFloat(item.price);
//   })

//   dispatch(updateSummary({totalItems,totalWeight,totalPrice}))
// }, [cartItems, dispatch])

// const removeFormCart = ()=>{
//   dispatch(removeItem(productData))
// }

    const increaseCount=()=>{
        setCount(prevCount => prevCount +1)
    }
    const decreaseCount=()=>{
        if(count > 0){
            setCount(prevCount=>prevCount-1)
        }
    }

    const increaseCount1=()=>{
        setCount1(prevCount => prevCount +1)
    }
    const decreaseCount1=()=>{
        if(count1 > 0){
            setCount1(prevCount=>prevCount-1)
        }
    }


    return(
        <div>

          {/* {cartItems.map((productData)=>(
            <div className="flex justify-between  px-4">
<div key={productData.id}>
<img className="h-24 w-24" src={productData.Image}/>

</div>
<div>
    <h1>{productData.name}</h1>
    <p> {productData.weight}</p>
    <div className="flex  item-end gap-2 pr-10 pt-1 ">
    <button className=" " onClick={increaseCount}class="text-3xl border-2 border-slate-400 border h-9 w-9 text-green-500 rounded-lg  "><p className="pb-2">+</p></button>
        <p class="text-xl">{count}</p>
        <button onClick={decreaseCount} class="text-3xl border-2 border-slate-400 h-9 w-9 text-green-500 rounded-lg ">-</button>
        </div>

</div>
<div>
<MdDelete className="w-6 h-6" />

<p className="pt-8">{productData.price} </p>
</div>
</div>
))} */}
 <div className="flex justify-between  px-4 pt-4">
<div>
<img className="h-24 w-24" src="https://img.freepik.com/premium-vector/rice-package-mockup-thailand-food-products_249011-1337.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais"/>

</div>
<div>
    <h1>Sulphurfree Bura</h1>
    <p>530 Ml</p>
    <div className="flex  item-end gap-2 pr-10 pt-1 ">
    <button className=" " onClick={increaseCount1}class="text-3xl border-2 border-slate-400 border h-9 w-9 text-green-500 rounded-lg  "><p className="pb-2">+</p></button>
        <p class="text-xl">{count1}</p>
        <button onClick={decreaseCount1} class="text-3xl border-2 border-slate-400 h-9 w-9 text-green-500 rounded-lg ">-</button>
        </div>

</div>
<div>
<MdDelete className="w-6 h-6" />

<p className="pt-8">$20</p>
</div>
</div>
<div className="flex justify-between  px-4 pt-4">
<div>
<img className="h-24 w-24" src="https://img.freepik.com/premium-vector/rice-package-mockup-thailand-food-products_249011-1337.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais"/>

</div>
<div>
    <h1>Sulphurfree Bura</h1>
    <p>530 Ml</p>
    <div className="flex  item-end gap-2 pr-10 pt-1 ">
    <button className=" " onClick={increaseCount1}class="text-3xl border-2 border-slate-400 border h-9 w-9 text-green-500 rounded-lg  "><p className="pb-2">+</p></button>
        <p class="text-xl">{count1}</p>
        <button onClick={decreaseCount1} class="text-3xl border-2 border-slate-400 h-9 w-9 text-green-500 rounded-lg ">-</button>
        </div>

</div>
<div>
<MdDelete className="w-6 h-6" />

<p className="pt-8">$20</p>
</div>
</div> 


<div className="p-2">
<p className="pb-4 font-semibold">Add Coupon</p>
<div className="pl-3  flex gap-8">

<input type="text" placeholder="Entry Voucher Code" className="input input-bordered max-w-xs" />
<div>
<button className="btn bg-zinc-200 w-32">Apply</button></div>
</div>

</div>
<div className="pt-8">
<div className="flex justify-between px-2  pb-3">
    <p className="text-lg font-medium text-zinc-500">Total Item</p>
    <p className="font-medium   text-zinc-700 text-xl" >6</p>
</div>
<div className="flex justify-between px-2  pb-3">
    <p className="text-lg font-medium text-zinc-500">Weight</p>
    <p className="font-medium  text-zinc-700 text-xl" >33 kg</p>
</div>
<div className="flex justify-between px-2  pb-3">
    <p className="text-lg font-medium text-zinc-500">Price</p>
    <p className="font-medium   text-zinc-700 text-xl" >$ 82.25</p>
</div>
<div className="flex justify-between px-2  pb-4 border-b-2 border-dashed border-zinc-400">
    <p className="text-lg font-medium text-zinc-500">Price</p>
    <p className="font-medium  text-zinc-700 text-xl" >$ 12.25</p>
</div>

<div className="flex justify-between px-2  pt-2">
    <p className="text-lg font-medium text-zinc-500">Total Price</p>
    <p className="font-medium  text-zinc-700 text-xl" >$ 70.25</p>
</div>

</div>

<div className="flex flex-colm place-content-center mt-10">
<button className="btn w-96 bg-green-500 " onClick={()=>navigate('/app/checkout')}>Checkout</button>
</div>
<div className=" mr-4 rounded-b-lg pt-2 pl-2 mr-18 pb-8 fixed bottom-0  w-full bg-green-100">
   <Footer/>
  
 </div>

        </div>
    )
}
export default Addcoupon 