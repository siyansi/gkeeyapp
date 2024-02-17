import { Link } from "react-router-dom"
import { MdKeyboardBackspace,MdDelete  } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const Address = ()=>{

    return(
        <div>
<div className="z-10 fixed top-16 left-0 w-full flex flex-col text-center bg-slate-100">
<Link to='/app/profile'>
<MdKeyboardBackspace className="h-8  w-8 pl-2" />
<h1 className="text-lg">Delivery Address</h1>  </Link>  
</div>

<div className="mt-14">
    <div className="flex justify-between px-3 border-b-2 border-zinc-300">
<div className="pb-2">
    <p className="pb-1 "> <input type="radio" name="radio-4" className="radio radio-accent " checked /> Puraton Custom , Chhatak</p>
    <p className="pb-1 pl-6 text-gray-500">216/c East Road</p>
    <p className=" pl-5">+8809482729000001</p>

</div>

<div className="mt-2">
<p><FiEdit className="h-4 w-4" /></p>
<p className="pt-6"><MdDelete  className="w-6 h-[20px] pr-1"/></p>
    </div>
</div>
<div>
<div className="flex justify-between px-3 border-b-2 border-zinc-300">
<div className="pb-2">
    <p className="pb-1 "> <input type="radio" name="radio-4" className="radio radio-accent "  /> Puraton Custom , Chhatak</p>
    <p className="pb-1 pl-6 text-gray-500">216/c East Road</p>
    <p className=" pl-5">+8809482729000001</p>

</div>

<div className="mt-2">
<p><FiEdit className="h-4 w-4" /></p>
<p className="pt-6"><MdDelete  className="w-6 h-[20px] pr-1"/></p>
    </div>
</div>
</div>
<div>
<div className="flex justify-between px-3 border-b-2 border-zinc-300">
<div className="pb-2">
    <p className="pb-1 "> <input type="radio" name="radio-4" className="radio radio-accent "  /> Puraton Custom , Chhatak</p>
    <p className="pb-1 pl-6 text-gray-500">216/c East Road</p>
    <p className=" pl-5">+8809482729000001</p>

</div>

<div className="mt-2">
<p><FiEdit className="h-4 w-4" /></p>
<p className="pt-6"><MdDelete  className="w-6 h-[20px] pr-1"/></p>
    </div>
</div> 
</div>
<div>
<div className="flex justify-between px-3 border-b-2 border-zinc-300">
<div className="pb-2">
    <p className="pb-1 "> <input type="radio" name="radio-4" className="radio radio-accent "  /> Puraton Custom , Chhatak</p>
    <p className="pb-1 pl-6 text-gray-500">216/c East Road</p>
    <p className=" pl-5">+8809482729000001</p>

</div>

<div className="mt-2">
<p><FiEdit className="h-4 w-4" /></p>
<p className="pt-6"><MdDelete  className="w-6 h-[20px] pr-1"/></p>
    </div>
</div>
</div>
<div>
<div className="flex justify-between px-3 border-b-2 border-zinc-300">
<div className="pb-2">
    <p className="pb-1 "> <input type="radio" name="radio-4" className="radio radio-accent "  /> Puraton Custom , Chhatak</p>
    <p className="pb-1 pl-6 text-gray-500">216/c East Road</p>
    <p className=" pl-5">+8809482729000001</p>

</div>

<div className="mt-2">
<p><FiEdit className="h-4 w-4" /></p>
<p className="pt-6"><MdDelete  className="w-6 h-[20px] pr-1"/></p>
    </div>
</div>

</div>
<div>
    
</div>
</div>
        </div>
    )
}
export default Address