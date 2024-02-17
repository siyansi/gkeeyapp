import React from "react";



const CustomCarousel = () => {

return(
    <div>
        <div className="carousel  rounded-lg w-dvm">
  <div id="slide1" className="carousel-item relative  ">
    <img src="https://t3.ftcdn.net/jpg/02/14/59/76/240_F_214597619_GgPZ3cQAasuYwMTeEqopTKfjMo2cOF8U.jpg" className="w-full h-48" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIJ2-bjnlKo5GC2oHx9pG9o3XgsBIcsDaILiJAsWMsLI8caIWeAGzA54kEV03FDe09RI&usqp=CAU" className="w-full h-48" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1554998171-89445e31c52b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" className="w-full h-48" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
     
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://thumbs.dreamstime.com/b/friends-party-buffet-enjoying-food-concept-69198694.jpg?w=1400" className="w-full h-48" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
     
    </div>
  </div>
</div>
    </div>
)
}
export default CustomCarousel;