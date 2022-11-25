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

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <div className="pt-10">
      <Title title={"Course"} />
      <div className="lg:rounded-lg bg-transparent text-white ">
        <Slider {...settings}>
          <div className="px-2">
            <CardCourseHome title={"Sekolah Dasar"} ket={"Pembelajaran Interaktif untuk anak Sekolah Dasar"} gambar={sd} />
          </div>
          <div className="px-2">
            <CardCourseHome gambar={smp} title={"SMP"} ket={"Memakai 2 metode pembelajaran yaitu via remote dan tatap muka."} />
          </div>
          <div className="px-2">
            <CardCourseHome gambar={sma} ket={"Hampir 85% warga NTB menggunakan aplikasi KSB SMart"} title={"SMA"} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CourseHome;
