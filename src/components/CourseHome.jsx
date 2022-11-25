import React from "react";
import Slider from "react-slick";
import sd from "../assets/IconSD.png";
import smp from "../assets/IconSMP.png";
import sma from "../assets/IconSMA.png";
import CardCourseHome from "./Card/CardCourseHome";

import Title from "./Title";

const CourseHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="pt-10">
      <Title title={"Course"} />
      <div className="lg:rounded-lg bg-transparent text-white ">
        <Slider {...settings}>
          <div className="lg:px-2">
            <CardCourseHome title={"Sekolah Dasar"} ket={"Pembelajaran Interaktif untuk anak SD"} gambar={sd} />
          </div>
          <div className="lg:px-2">
            <CardCourseHome gambar={smp} title={"SMP"} ket={"Pembelajaran Interaktif untuk anak SMP"} />
          </div>
          <div className="lg:px-2">
            <CardCourseHome gambar={sma} ket={"Pembelajaran Interaktif untuk anak SMA"} title={"SMA"} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CourseHome;
