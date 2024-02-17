import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

import All from "./All";


const Allorder = ()=> {

    return(
<div>

<div className="z-10 fixed top-16 left-0 w-full flex flex-col text-center bg-slate-100">
<Link to='/app/profile'>
<MdKeyboardBackspace className="h-8  w-8 pl-2" />
<h1 className="text-xl">  Profile</h1>  </Link>  
</div>



<div className="flex justify-center pt-6 mt-10">
<div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab ml-12 hover:text-red-700 text-lg" aria-label="All(58) " />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><All/></div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab text-lg hover:text-red-700" aria-label="Running(13)" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><All/></div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab text-lg hover:text-red-700" aria-label="Previous(8) " />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><All/></div>
</div> 

    </div>



    

    
</div>
    )
}
export default Allorder