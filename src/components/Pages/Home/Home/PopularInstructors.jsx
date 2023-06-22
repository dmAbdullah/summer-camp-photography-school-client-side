import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../../Style/Slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const PopularInstructors = () => {
  return (
    <>
      <hr className="mt-10" />
      <h1 className=" text-4xl font-bold text-center italic underline underline-offset-8 mb-10">
        Popular Instructors
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 70,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
         
          <h2 className="text-center">John Doe</h2>
              <img className="rounded-2xl mx-auto h-72"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
        </SwiperSlide>
        <SwiperSlide>
          
          <h2 className="text-center">John Doe</h2>
              <img className="rounded-2xl mx-auto h-72"
                src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
           
        </SwiperSlide>
        <SwiperSlide>
          
          <h2 className="text-center">John Doe</h2>
              <img className="rounded-2xl mx-auto h-72"
                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=344&q=80"
                alt=""
              />
            
            
        </SwiperSlide>
        <SwiperSlide>
         
          <h2 className="text-center">John Doe</h2>
              <img className="rounded-2xl mx-auto h-72"
                src="https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"/>
          
        </SwiperSlide>
        <SwiperSlide>
          
          <h2 className="text-center">John Doe</h2>
              <img className="rounded-2xl mx-auto h-72"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            
        </SwiperSlide>
        <SwiperSlide>
         
          <h2 className="text-center">John Doe</h2>
              <img className="rounded-2xl mx-auto h-72"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
                alt=""
              />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PopularInstructors;
