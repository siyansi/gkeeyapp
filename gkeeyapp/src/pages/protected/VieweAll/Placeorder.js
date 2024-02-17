const Placeorder =()=>{

    return(
        <div>
<div className="text-center text-xl ml-16 mt-24 h-2/3 w-2/3 px-4  ">
    <img  className="rounded-full" src="https://iconscout.com/lottie-animation/shopping-cart-4896108"/>
    <p >Order placed Successfuly</p>
   
    </div>
    <div className="text-center text-sm text-gray-400">
        <p>Thanks for your orders.Yours order will be placed continue your Orders ...</p>
    </div>
    <div className="grid place-content-center mt-32">
    <button className="btn w-80 bg-green-500 rounded-full mb-4 ">Continue</button>
    
    </div>
    <p className="text-center text-xl font-medium text-green-400 mb-16">Track Order</p>
        </div>
    )
}
export default Placeorder