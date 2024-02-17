import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaVanShuttle } from "react-icons/fa6";
import { IoIosGift } from "react-icons/io";
import { TiHomeOutline } from "react-icons/ti";
import { IoChevronForward } from "react-icons/io5";
import Footer from "../VieweAll/Homemenu";
const Myprofile =()=> {

    return(
<div className="h-screen ">
<div className="px-4">
<div className="bg-cover bg-center w-full h-80 content-center rounded-b-[80px]" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/abstract-paper-background-concept_23-2148812690.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais')"}}>


<div className="flex flex-col text-center">
    <p className="pl-6 pt-4"> <FaArrowLeftLong /></p>

    <h1 className="text-3xl font-bold  text-white "> Profile</h1>
</div>

<div className="avatar pt-8 pl-8 ">
  <div className="w-24 rounded-full ">
    <img src="https://img.freepik.com/free-photo/portrait-happy-smiley-man_23-2149022624.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais" />
  </div>

  <h1 className=" pl-4 pt-4">
    <span className="text-3xl  text-white">Simon Peter</span><br/>
    <span className="text-sm text-white">ID:048763245732</span>
  </h1>
  
</div>
<div className="px-6 pt-6 ">
<ul className="menu menu-horizontal lg:menu-horizontal bg-white rounded-box place-content-center justify-around w-full h-32">
 <Link to='/app/allorder'> <li ><a><FaVanShuttle className="h-8 w-8" /></a><p className="text-lg ">All Order</p></li></Link>
  <Link to ='/app/Voucher'><li><a><IoIosGift  className="h-8 w-8"/></a> <p className="text-lg ">Voucher</p></li></Link>
  <Link to ='/app/address'><li><a><TiHomeOutline className="h-8 w-8"/></a><p className="text-lg ">Address</p></li></Link>
</ul>
</div>
<div>

</div>
<div className="pt-8 pl-6">
<ul className="menu bg-white w-11/12 h-full rounded-xl  pb-6">

<Link to='/app/proinput'>
 <li><a className="text-xl p-5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg> Profile <IoChevronForward /></a></li></Link>
<Link to='/app/notification'>
  <li><a className="text-xl p-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
</svg>Notification <IoChevronForward /></a></li></Link>

  <li><a className="text-xl p-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>Setting <IoChevronForward /></a></li>

  <li><a className="text-xl p-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
</svg>Payment <IoChevronForward /></a></li>

  <li><a className="text-xl p-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
</svg>Layout <IoChevronForward /></a></li>

</ul>
</div>
</div>
</div>

<div className=" mr-4 rounded-b-lg pt-2 pl-2 mr-18 pb-8 fixed bottom-0  w-full bg-green-100">
   <Footer/>
  
 </div>

</div>
    )
}
export default Myprofile