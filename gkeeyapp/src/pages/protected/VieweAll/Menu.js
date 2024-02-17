import { CiApple } from "react-icons/ci";
import { IoFishOutline } from "react-icons/io5";
import { FaHandHoldingMedical } from "react-icons/fa";
import { LiaBabyCarriageSolid } from "react-icons/lia";
import { LuPencilRuler } from "react-icons/lu";
import { GiLipstick } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { PiPlantLight } from "react-icons/pi";
import { FaCat } from "react-icons/fa";
import { IoGlassesOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import Footer from "./Homemenu";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <div className="flex fex-col justify-center pt-6 text-xl font-bold">
        <h1 className="text-center">Choose Categery</h1>
      </div>

      <div className=" pt-10 px-6 pb-24  p">
        <div className="flex justify-between pb-20 gap-10 ">
         <div>
         <Link to ="/app/vege"><CiApple className=" w-14 h-14   rounded-xl bg-gray-200 hover:bg-slate-300 cursor-pointer " /></Link>
              <p>vegetables</p>
          </div>
          <div>
          <Link to ="/app/vege"> <IoFishOutline className="h-12 w-12 rounded-xl bg-gray-200 hover:bg-slate-300 cursor-pointer" /></Link>
            <p>Meat And Fish</p>
          </div>
          <div>
          <Link to ="/app/vege"> <FaHandHoldingMedical className="h-12 w-12 rounded-xl bg-gray-200 hover:bg-slate-300 cursor-pointer" /></Link>
            <p>Medicine</p>
          </div>
        </div>
        <div></div>
        <div className="flex  justify-between pb-20 gap-10">
          <div>
          <Link to ="/app/vege"> <LiaBabyCarriageSolid className="h-12 w-12 rounded-xl bg-gray-200 hover:bg-slate-300 cursor-pointer" /></Link>
            <p>Baby Care</p>
          </div>
          <div>
          <Link to ="/app/vege">  <LuPencilRuler className="h-12 w-12 rounded-xl bg-gray-200 hover:bg-slate-300 cursor-pointer" /></Link>
            <p>Office Suppiles</p>
          </div>
          <div>
          <Link to ="/app/vege"> <GiLipstick className="h-12 w-12 rounded-xl bg-gray-200 hover:bg-slate-300 cursor-pointer" /></Link>
            <p>Beauty</p>
          </div>
        </div>

        <div className="flex justify-between  pb-20 gap-10">
          <div>
          <Link to ="/app/vege"> <CgGym className="h-12 w-12 rounded-xl bg-gray-200 hover:bg-slate-300 cursor-pointer" /></Link>
            <p>Gym Equipments </p>
          </div>
          <div>
          <Link to ="/app/vege"> <PiPlantLight className="h-12 w-12 rounded-xl bg-gray-200 hover:bg-slate-300 cursor-pointer" /></Link>
            <p>Gardening</p>
          </div>
          <div>
          <Link to ="/app/vege"> <FaCat className="h-12 w-12 rounded-xl bg-gray-200 hover:bg-slate-300 cursor-pointer" /></Link>
            <p>Pet Care</p>
          </div>
        </div>
        <div className="flex justify-between  pb-20 gap-10">
          <div>
          <Link to ="/app/vege"> <IoGlassesOutline className="h-12 w-12 rounded-xl bg-gray-200 hover:bg-slate-300 cursor-pointer" /></Link>{" "}
            <p>Eye Wears</p>
          </div>
          <div>
          <Link to ="/app/vege">  <IoBagOutline className="h-12 w-12 rounded-xl bg-gray-200 hover:bg-slate-300 cursor-pointer" /></Link>
            <p>Packs</p>
          </div>
          <div>
            {" "}
            <Link to ="/app/vege"> <SlOptionsVertical className="h-12 w-12 rounded-xl bg-gray-200 hover:bg-slate-300 cursor-pointer" /></Link>
            <p>Others</p>
          </div>
        </div>
      </div>
      <div></div>
      <div className=" mr-4 rounded-b-lg pt-2 pl-2 mr-18 pb-8 fixed bottom-0  w-full bg-green-100">
        <Footer />
      </div>
    </div>
  );
};
export default Menu;
