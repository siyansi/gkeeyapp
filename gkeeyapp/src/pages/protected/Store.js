import React from "react";
import CustomCarousel from "../../features/charts/components/Carosal";
import { useNavigate } from "react-router-dom";
import { MdSentimentDissatisfied } from "react-icons/md";
import Newitems from "./Newites";
import Footer from "./VieweAll/Homemenu";
import { BsFillBagHeartFill } from "react-icons/bs";

const CustomCard = ({ item, description, price }) => {
  return (
    <div className="card card-compact   min-[300px]:w-44  xl:w-full  bg-base-100 shadow-xl mx-2 mb-4 ">
      <figure>
        <img
          src="https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?size=626&ext=jpg&ga=GA1.1.1726861027.1704513461&semt=ais"
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-2xl ">{item} Bundle pack</h2>
        <h2 className="text-sm">{description}</h2>
        <h2 className="text-">${price}</h2>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};
const Store = () => {
  const navigate = useNavigate();
  const data = Array.from({ length: 6 }, (_, index) => ({
    title: `Bundle Pack ${index + 1}`,
    description: "Onion, Oil, Salt",
    price: `${(32 + index).toFixed(2)} - ${(50.2 + index).toFixed(2)}`,
  }));

  return (
    <div className="flex flex-col min-h-screen m-0 ">
      
      <main className="flex-1 px-4">
        <div className="p-4">
          <CustomCarousel />
        </div>
        <div className=" ml-4 mr-2 flex items-center justify-between ">
          <h2 className="text-xl font-semibold ">Popular Packs</h2>
          {/* write a onclick navigate functionn below */}
          <button onClick={() => navigate("/app/cart")} className="btn btn-sm text-green-400">
            View All
          </button>
        </div>
        <div
          className="overflow-x-auto grid   lg:grid-cols-4  pt-8"
          onClick={() => navigate("/app/bundledetailes")}
        >
          <div className=" flex   xl:flex w-full ">
            {data.map((item, index) => (
              <CustomCard key={index} {...item} />
            ))}
          </div>
        </div>

        <div className=" ml-4 mr-2 flex items-center justify-between pt-8">
          <h2 className="text-xl font-semibold">Our New Item</h2>
          <button
            className="btn btn-sm text-green-400"
            onClick={() => navigate("/app/newitems")}
          >
            View All{" "}
          </button>
        </div>

        <div className="pt-">
          <Newitems />
        </div>
      </main>


      <div className="  pl-2 rounded-b-lg pt-2 w-full pb-8 fixed bottom-0   bg-green-100">
        <Footer />
      </div>
    </div>
  );
};

export default Store;
