import { Link, useNavigate } from "react-router-dom"
import { MdKeyboardBackspace, } from "react-icons/md";
import { useState } from "react";
const Checkout = ()=>{
const navigate=useNavigate()
    const [activeAddress, setActiveAddress] = useState('home');
    const [activePayment, setActivePayment]=useState(null)



    const handleRadioChange = (address) => {
      setActiveAddress(address);
    };
const handleBoxChange =(paymentId)=>{
    setActivePayment(paymentId)
}
const paymentMethods = [
    { 
         name: 'Master Card',
     imageSrc: 'https://img.freepik.com/premium-vector/luxurious-purple-credit-card_48190-280.jpg?size=626&ext=jpg' 
    },
    {
        name: 'Paypal',
     imageSrc: 'https://img.freepik.com/premium-vector/microphone-with-sound-track-line-icons-sound-recording-music-sound-wave-hertz-frequency-sound-concept-vector-line-icon-white-background_661108-8068.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais' 
    },

    {
        name: 'Cash on Delivery', 
    imageSrc: 'https://img.freepik.com/free-vector/indian-rupee-bills-exchange_23-2147993764.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=sph'
    }
  ];

    return(
        <div>
<div className="z-10 fixed top-16 left-0 w-full flex flex-col text-center bg-slate-100">
<Link to='/app/addcoupon'>
<MdKeyboardBackspace className="h-8  w-8 pl-2" />
<h1 className="text-lg">Checkout</h1>  </Link>  
</div>

<div className="mt-12 px-2">
<div className="flex justify-between px-3">
<p>Select Delivery Address</p>
<button className="btn btn-sm text-green-400">Add New</button>
</div>

<div className="pb-4 pt-2 " >
<div className={`border-2 border-solid bg-gray-200 w-62 h-62  rounded-xl ${ activeAddress === 'home' ? "border-green-500 bg-green-100 cursor-pointer" : "bg-slate-100" }`} >
<div className="flex gap-2 pl-5 pt-3 pb-1"> <input type="radio"   name="address" className="radio radio-success" checked={activeAddress === 'home'}onChange={()=>handleRadioChange('home')} />
  <p className="text-lg font-medium"> Home Address</p></div> 
    <p className="text-gray-500 pl-12 pb-1">(309)071-9396-9339,</p>
    <p className="text-gray-500 pl-12">1749 Custom Road </p>
</div>
</div>
<div className={`border-2 border-solid bg-gray-200 w-62 h-62  rounded-xl ${ activeAddress === 'office' ? "border-green-500 bg-green-100 cursor-pointer" : "bg-slate-100" }`} >
<div className="flex gap-2 pl-5 pt-3 pb-1"> <input type="radio" name="address" className="radio radio-success" checked={activeAddress === 'office'}onChange={()=>handleRadioChange('office')}   />
  <p className="text-lg font-medium"> Office Address</p></div> 
    <p className="text-gray-500 pl-12 pb-1">(309)071-9396-9339,</p>
    <p className="text-gray-500 pl-12">1749 Custom Road </p>
</div>


<div className="pt-6">
<div><p className="pb-6 text-lg">Select Payment Methods</p></div>
<div className="carousel rounded-box w-96 gap-5  ">
      {paymentMethods.map((item, index) => (
        <div
          key={index}
          className={`carousel-item w-36 flex flex-col border-2 bg-white items-center rounded-xl cursor-pointer${
            index === activePayment 
            ? ' bg-green-300 border-green-600' 
            : 'bg-white'
          }`}
          onClick={() => handleBoxChange(index)}
        >
          <div>
            <img className='pl-9 h-10 w-20' src={item.imageSrc} alt={item.name} />
            <p className="pl-3 text-[16px] ">{item.name}</p>
          </div>
        </div>
      ))}
    </div>

</div>


</div>
<div className="pl-3 mt-5">
        <p className="text-gray-400 font-medium">Card Number</p>
        <input type="text" placeholder="" className="input input-bordered w-[600px] h-16 max-w-xs pl-4" />

    </div>
    <div className="pl-3 mt-4">
        <p className="text-gray-400 font-medium">Card Number</p>
        <input type="number" placeholder="" className="input input-bordered w-96  h-16 max-w-xs" />

    </div>
    <div className="flex gap-">
    <div className="pl-3 mt-4">
        <p className="text-gray-400 font-medium">Expiration Date</p>
        <input type="date" placeholder="" className="input input-bordered w-46  h-16 max-w-xs" />

    </div>
    <div className="pl-3 mt-4">
        <p className="text-gray-400 font-medium">cvv</p>
        <input type="number" placeholder="" className="input input-bordered w-46  h-16 max-w-xs" />

    </div>
    </div>

    <div>
    <div className="form-control px-2">
  <label className="label cursor-pointer">
    <span className="label-text">Remember My Card</span> 
    <input type="checkbox" className="toggle toggle-success "  />
  </label>
</div>
    </div>
    <div className="pl-6">
    <button className="btn w-96 bg-green-600 rounded-2xl " onClick={()=>navigate('/app/placeorder')} >Pay Now</button>
    </div>
        </div>
    )
}
export default Checkout