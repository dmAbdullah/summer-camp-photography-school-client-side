import { Swiper, SwiperSlide } from "swiper/react";
import Typewriter from "typewriter-effect";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/scrollbar";
import "../../../Style/Slider.css";

// import required modules
import { Scrollbar } from "swiper";
("swiper");

const Slider = () => {
  return (
    <div>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider1 hero">
            <div className="hero-content text-center text-white flex-col">
              <div className="text-5xl font-bold">
                <Typewriter
                  options={{
                    strings: ["Learn Photography from Photo Studio"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="mb-5">
                A design and development agency based in Bangladesh. We create
                digital products that make peoples lives easier.
              </p>
              <input
                type="submit"
                className="text-black border-b-2 text-center rounded-lg font-semibold hover:border-slate-800 p-2 hover:bg-slate-800 hover:text-blue-500 duration-500 mx-auto bg-slate-100 border-blue-600"
                value="Enroll Now"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider2 hero">
            <div className="hero-content text-center text-white flex-col">
              <div className="text-5xl font-bold">
                <Typewriter
                  options={{
                    strings: ["Learn Land Scape Photography from Photo Studio"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="mb-5">
                A design and development agency based in Bangladesh. We create
                digital products that make peoples lives easier.
              </p>
              <input
                type="submit"
                className="text-black border-b-2 text-center rounded-lg font-semibold hover:border-slate-800 p-2 hover:bg-slate-800 hover:text-blue-500 duration-500 mx-auto bg-slate-100 border-blue-600"
                value="Enroll Now"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider3 hero">
            <div className="hero-content text-center text-white flex-col">
              <div className="text-5xl font-bold">
                <Typewriter
                  options={{
                    strings: ["Learn Product Photography from Photo Studio"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="mb-5">
                A design and development agency based in Bangladesh. We create
                digital products that make peoples lives easier.
              </p>
              <input
                type="submit"
                className="text-black border-b-2 text-center rounded-lg font-semibold hover:border-slate-800 p-2 hover:bg-slate-800 hover:text-blue-500 duration-500 mx-auto bg-slate-100 border-blue-600"
                value="Enroll Now"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider4 hero">
            <div className="hero-content text-center text-white flex-col">
              <div className="text-5xl font-bold">
                <Typewriter
                  options={{
                    strings: ["Learn Wild Life Photography from Photo Studio"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="mb-5">
                A design and development agency based in Bangladesh. We create
                digital products that make peoples lives easier.
              </p>
              <input
                type="submit"
                className="text-black border-b-2 text-center rounded-lg font-semibold hover:border-slate-800 p-2 hover:bg-slate-800 hover:text-blue-500 duration-500 mx-auto bg-slate-100 border-blue-600"
                value="Enroll Now"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider5 hero">
            <div className="hero-content text-center text-white flex-col">
              <div className="text-5xl font-bold">
                <Typewriter
                  options={{
                    strings: ["Learn  Photography from Photo Studio"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="mb-5">
                A design and development agency based in Bangladesh. We create
                digital products that make peoples lives easier.
              </p>
              <input
                type="submit"
                className="text-black border-b-2 text-center rounded-lg font-semibold hover:border-slate-800 p-2 hover:bg-slate-800 hover:text-blue-500 duration-500 mx-auto bg-slate-100 border-blue-600"
                value="Enroll Now"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider6 hero">
            <div className="hero-content text-center text-white flex-col">
              <div className="text-5xl font-bold">
                <Typewriter
                  options={{
                    strings: ["Learn Videography from Photo Studio"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="mb-5">
                A design and development agency based in Bangladesh. We create
                digital products that make peoples lives easier.
              </p>
              <input
                type="submit"
                className="text-black border-b-2 text-center rounded-lg font-semibold hover:border-slate-800 p-2 hover:bg-slate-800 hover:text-blue-500 duration-500 mx-auto bg-slate-100 border-blue-600"
                value="Enroll Now"
              />
            </div>
          </div>
        </SwiperSlide>
        
   
      </Swiper>
    </div>
  );
};

export default Slider;
