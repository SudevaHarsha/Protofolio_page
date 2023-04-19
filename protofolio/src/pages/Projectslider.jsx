import React, { useRef} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { EffectCards, Navigation, Pagination } from "swiper";
import slides from "../projects";

const Slider=({Singlecard}) => {

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards,Pagination,Navigation]}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {
          slides.map((slide,index)=>{
            return(
           <SwiperSlide key={index}>
              {/* <img src="https://tse4.mm.bing.net/th?id=OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8&pid=Api&P=0" className="sliders_img"/> */}
              <p className="project_name">{slide.title}</p>
              <button className="project_button" onDoubleClick={()=>Singlecard(index)}>click here</button>
            </SwiperSlide>
      /*       $("swiper-button-next").click(Removecard)    */
            );
          })
        }
      </Swiper>

      </>
  );
}
export default Slider;
