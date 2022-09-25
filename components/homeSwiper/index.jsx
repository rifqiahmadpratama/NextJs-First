import Head from "next/head";
import React, { useEffect, Fragment } from "react";
import Image from "next/image";
import ImageFooter from "../../assets/images/home_1.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
const HomeSwiper = () => {
  return (
    <div>
      <Swiper
        className="container container_swiper"
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation={true}
      >
        <SwiperSlide className="">
          <div className="Card">
            <div className="bg-img">
              <div className="card-img ">
                <Image src={ImageFooter} className="img7" />
              </div>
            </div>
            <div className="card-text ">
              <h3 className="">Niall Horan</h3>
              <span className="fw-light">Web Developer</span>
              <p className="w-75  ms-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="Card">
            <div className="bg-img">
              <div className="card-img ">
                <Image src={ImageFooter} className="img7" />
              </div>
            </div>
            <div className="card-text ">
              <h3 className="">Niall Horan</h3>
              <span className="fw-light">Web Developer</span>
              <p className="w-75  ms-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="Card">
            <div className="bg-img">
              <div className="card-img ">
                <Image src={ImageFooter} className="img7" />
              </div>
            </div>
            <div className="card-text ">
              <h3 className="">Niall Horan</h3>
              <span className="fw-light">Web Developer</span>
              <p className="w-75  ms-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="Card">
            <div className="bg-img">
              <div className="card-img ">
                <Image src={ImageFooter} className="img7" />
              </div>
            </div>
            <div className="card-text ">
              <h3 className="">Niall Horan</h3>
              <span className="fw-light">Web Developer</span>
              <p className="w-75  ms-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="Card">
            <div className="bg-img">
              <div className="card-img ">
                <Image src={ImageFooter} className="img7" />
              </div>
            </div>
            <div className="card-text ">
              <h3 className="">Niall Horan</h3>
              <span className="fw-light">Web Developer</span>
              <p className="w-75  ms-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
