import { Link } from "react-router-dom";
import img1 from "../../assets/image/AdobeStock_263695712_Preview.jpeg";
import img2 from "../../assets/image/AdobeStock_314554997_Preview.jpeg";
import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        navigation={true}
        pagination={true}
        loop={true}
        // autoplay={
        //   {
        //       delay: 2000,
        //   }
        // }
      >
        <SwiperSlide>
          <div className="hero min-h-screen">
            <img className="w-full h-full" src={img2} alt="" />
            <Link to="/manager">
              <button className=" border-b-4 rounded-xl border-2 py-2 px-2  mt-44 text-white bg-opacity-70 bg-black hover:bg-orange-400">
                Join as an HR Manager
              </button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-screen">
            <img className="w-full h-full" src={img1} alt="" />
            <Link to="/joinEmployee">
              <button className=" border-b-4 rounded-xl border-2 py-2 px-2  mt-32 text-white bg-opacity-70 bg-black hover:bg-orange-400">
                Join as an Employee
              </button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
