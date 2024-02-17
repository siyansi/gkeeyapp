import { Link } from "react-router-dom"
import { MdKeyboardBackspace } from "react-icons/md";

import { FaMinus } from "react-icons/fa";

const Offerdetails = ()=>{

    return(

        <div>
<div className="z-10 fixed top-16 left-0 w-full flex flex-col text-center bg-slate-100">
<Link to='/app/voucher'>
<MdKeyboardBackspace className="h-8  w-8 pl-2" />
<h1 className="text-lg">Offer Details pages</h1>  </Link>  
</div>

<div className="mt-14 pl-6 ">
<div className="card w-96 bg-base-100 shadow-xl  "style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/facebook-template-3d-illustration_665513-4.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais')"}} >

<div className=" border-dashed border-r-2 border-gray-100 w-32 flex ">
    
 
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

<div className="w-80 ml-10 mt-4 ">
    <p className="font-semibold" >42% off only for you. To get this discount collect and apply the voucher.</p>
</div>
<div>
    <ul className="p-4 pb-4 text-gray-500">
<li className="w-80 pb-4"> <button className="h-1.5 w-5 bg-green-500 rounded-sm"></button>   Redeemable At all Sulphurfree Bura And Black Coffee</li>
<li className="w-90  pb-4"> <button className="h-1.5 w-5 bg-green-500 rounded-sm"></button>  Not Valid With Any Others Distcount and Promotion</li>
<li className="w-80 pb-4"> <button className="h-1.5 w-5 bg-green-500 rounded-sm"></button> valid For Sulphurfree ,coffee,And tea only</li>
<li className="w-80 pb-4"> <button className="h-1.5 w-5 bg-green-500 rounded-sm"></button>  No cash Value</li>
    </ul>
</div>


</div>
<div>
    <p className="ml-3 text-lg ">EXP:11/04/2024</p>
</div>


<div className="flex flex-colm place-content-center content-end mt-48 ">
<button className="btn  w-96 rounded-2xl bg-green-500">Redeem Book</button>

</div>
<div >
    <p className="text-center mt-2">Terms And Condition</p>
    </div>
        </div>
    )
}
export default Offerdetails