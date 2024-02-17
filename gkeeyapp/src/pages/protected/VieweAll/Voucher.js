import { Link, useNavigate } from "react-router-dom"
import { MdKeyboardBackspace } from "react-icons/md";

const Voucher = ()=>{
const navigate = useNavigate()
    return(
<div>

<div className="z-10 fixed top-16 left-0 w-full flex flex-col text-center bg-slate-100">
<Link to='/app/profile'>
<MdKeyboardBackspace className="h-8  w-8 pl-2" />
<h1 className="text-lg">Offer and Promo</h1>  </Link>  
</div>

    

<div className="mt-14 p-4  pb-16" > 
<p className="text-lg pb-2 font-medium">You have 5 Coupons to use</p>
  <div className="pb-6">
 <div className="card w-96 bg-base-100 shadow-xl cursor-pointer "style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/facebook-template-3d-illustration_665513-4.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais')"}} >

<div className=" border-dashed border-r-2 border-gray-100 w-32 flex" onClick={()=>navigate('/app/offerdetails')}>
    
 
  <div className="card-body ">
  
    <h2 className="card-title text-4xl text-white font-semibold "> 41% </h2><h3 className="text-white pl-4">Off</h3>
    </div>
    <div className="content-end pt-5 pl-4 h-24 w-40 ">
   <h1 className="text-2xl text-white font-semibold">Black Coffee</h1>
  </div>
  <div className=" w-52 text-green-300">
 
      <button className= " border-l- h-8 w-24 bg-white rounded-full mt-2 ml-12  text-green-600">Collect</button>
 {/* <div className="justify-end  ml-[153px]">    
<button className="  h-8 w-8 rounded-full bg-gray-200"></button></div> */}
   <p className="text-sm text-white font-medium w-40 mt-14  text-end">EXP-12/04/2024</p>
   </div>
 
    

  </div>
 
</div>
</div>


<div className="pb-6">
<div className="card w-96 bg-base-100 shadow-xl  "style={{ backgroundImage: "url('https://img.freepik.com/premium-psd/abstract-background-with-pretty-wave-line-decoration_180944-187.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais')"}} >

<div className=" border-dashed border-r-2 border-gray-100 w-32 flex cursor-pointer" onClick={()=>navigate('/app/offerdetails')} >
    
 
  <div className="card-body ">
  
    <h2 className="card-title text-4xl text-white font-semibold "> 23% </h2><h3 className="text-white pl-4">Off</h3>
    </div>
    <div className="content-end pt-5 pl-4 h-24 w-40 ">
   <h1 className="text-2xl text-white font-semibold">Lifeboye gauard</h1>
  </div>
  <div className=" w-36  text-green-300">
 
      <button className= " border-l- h-8 w-24 bg-white rounded-full mt-2 ml-6  text-green-600">Collect</button>
 {/* <div className="justify-end  ml-[153px]">    
<button className="  h-8 w-8 rounded-full bg-gray-200"></button></div> */}
   <p className="text-sm text-white font-medium w-[134px] mt-14  text-end ">EXP-12/04/2024</p>
   </div>
 
    

  </div>
 
</div>
</div>


<div className="pb-6">
<div className="card w-96 bg-base-100 shadow-xl  "style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/designer-vertical-background-template-gentle-classic-texture-your-graphic-design-works_7954-10255.jpg')"}} >

<div className=" border-dashed border-r-2 border-gray-100 w-32 flex cursor-pointer" onClick={()=>navigate('/app/offerdetails')}>
    
 
  <div className="card-body ">
  
    <h2 className="card-title text-4xl text-white font-semibold "> 50% </h2><h3 className="text-white pl-4">Off</h3>
    </div>
    <div className="content-end pt-5 pl-4 h-24 w-40 ">
   <h1 className="text-2xl text-white font-semibold">Oreo Buscuit</h1>
  </div>
  <div className=" w-52 text-green-300">
 
      <button className= " border-l- h-8 w-24 bg-white rounded-full mt-2 ml-9  text-green-600">Collect</button>
 {/* <div className="justify-end  ml-[153px]">    
<button className="  h-8 w-8 rounded-full bg-gray-200"></button></div> */}
   <p className="text-sm text-white font-medium w-36 mt-14  text-end">EXP-12/04/2024</p>
   </div>
 
    

  </div>
 
</div>

</div>
<div>
<div className="card w-96 bg-base-100 shadow-xl  "style={{ backgroundImage: "url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-54041.jpg?size=626&ext=jpg')"}} >

<div className=" border-dashed border-r-2 border-gray-100 w-32 flex cursor-pointer " onClick={()=>navigate('/app/offerdetails')}>
    
 
  <div className="card-body ">
  
    <h2 className="card-title text-4xl text-white font-semibold "> 50% </h2><h3 className="text-white pl-4">Off</h3>
    </div>
    <div className="content-end pt-5 pl-4 h-24 w-40 ">
   <h1 className="text-2xl text-white font-semibold">Oreo Buscuit</h1>
  </div>
  <div className=" w-52 text-green-300">
 
      <button className= " border-l- h-8 w-24 bg-white rounded-full mt-2 ml-9  text-green-600">Collect</button>
 {/* <div className="justify-end  ml-[153px]">    
<button className="  h-8 w-8 rounded-full bg-gray-200"></button></div> */}
   <p className="text-sm text-white font-medium w-36 mt-14  text-end ">EXP-12/04/2024</p>
   </div>
 
    

  </div>
 
</div>
</div>
</div>

</div>

    )
}
export default Voucher