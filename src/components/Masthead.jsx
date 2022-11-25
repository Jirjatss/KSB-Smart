import React from "react";
import Slider from "react-slick";
import mh1 from "../assets/foto1.png";
import mh2 from "../assets/Lo.png";
import mh3 from "../assets/ME.png";
import CardMasthead from "./Card/CardMasthead";

const Masthead = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <>
      <div className="px-10 w-full m-auto py-10">
        <Slider {...settings}>
          <div>
            <CardMasthead gambar={mh1} />
          </div>
          <div>
            <CardMasthead gambar={mh2} />
          </div>
          <div>
            <CardMasthead gambar={mh3} />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Masthead;
