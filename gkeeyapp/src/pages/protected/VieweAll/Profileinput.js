import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

const Profileinput = ()=> {

    return(
<div className="h-screen">

<div className="z-10 fixed top-16 left-0 w-full flex flex-col text-center bg-slate-100">
<Link to='/app/profile'>
<MdKeyboardBackspace className="h-8  w-8 pl-2" />
<h1 className="text-xl">  Profile</h1>  </Link>  
</div>
<div className="  p-10 pb-2 mt-6">


<p className="text-gray-400 font-bold pb-2">First Name</p><input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs h-16" />
<p className="text-gray-400 font-bold pb-2">Last Name</p><input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs h-16" />
<p className="text-gray-400 font-bold pb-2">Phone Number</p><input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs h-16" />
<p className="text-gray-400 font-bold pb-2">Gender</p><input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs h-16"/>
<p className="text-gray-400 font-bold pb-2">Birthday</p><input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs h-16" />
<p className="text-gray-400 font-bold pb-2">Password</p><input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs h-16" />

</div>
<div className="flex flex-colm place-content-center pt-6">
<button className="btn bg-green-400 btn-wide">Save</button>
</div>


</div>
    )
}
export default Profileinput