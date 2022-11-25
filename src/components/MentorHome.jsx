import React from "react";
import CardMentorHome from "./Card/CardMentorHome";
import mentor1 from "../assets/Mentor1.PNG";
import mentor2 from "../assets/Mentor2.png";
import mentor3 from "../assets/Mentor3.png";
import mentor4 from "../assets/Mentor4.png";
import mentor5 from "../assets/Mentor5.png";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="rounded-full py-1 px-3  flex absolute  bottom-1/2 -right-10 xl:-bottom-16 xl:right-[36.5rem] bg-[#ffb701] text-black font-bold" onClick={onClick}>
      ❯
    </button>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="rounded-full py-1 px-3  flex absolute   bottom-1/2 -left-10 xl:-bottom-16 xl:left-[36.5rem] bg-[#ffb701] text-black font-bold" onClick={onClick}>
      ❮
    </button>
  );
}
const MentorHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

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
    <div className="pb-20">
      <div className="mx-auto text-center ">
        <span className="text-4xl text-black  border-b-4 border-[#002e74] mb-5 font-bold">Mentor Terfavorit</span>
      </div>
      <div className="mt-5 px-5 lg:px-0">
        <Slider {...settings}>
          <div className="px-2">
            <CardMentorHome
              gambar={mentor1}
              nama={"Sajad"}
              study={"Matematika SD"}
              prestasi1={"Best Participant of AMMAN Cooding Bootcamp Batch 3"}
              prestasi2={"Tutor of the Month KSB Smart (April 2022)"}
              prestasi3={"Co-founder dan Content Manager Lagu Sejarah Indonesia (@lagusejarah.id)"}
            />
          </div>
          <div className="px-2">
            <CardMentorHome
              gambar={mentor2}
              nama={"Yudi"}
              study={"Fisika SMP"}
              prestasi1={"Delegasi Indonesia di Changshu Folklore Festival 2015, Tiongkok"}
              prestasi2={"Tutor of the Month KSB Smart (Mei 2022) "}
              prestasi3={"Professional Talk Construction Management In Civil Engineering 2016"}
            />
          </div>
          <div className="px-2">
            <CardMentorHome
              gambar={mentor4}
              nama={"Gina"}
              study={"Fisika SMA"}
              prestasi1={"Master Teacher of The Month (April) - Brain Academy Online 2022"}
              prestasi2={"Tutor of the Month KSB Smart (Juli 2022) "}
              prestasi3={"Master Sains di University College London dengan Beasiswa Chevening"}
            />
          </div>
          <div className="px-2">
            <CardMentorHome
              gambar={mentor3}
              nama={"Riska"}
              study={"Fisika SMP"}
              prestasi1={"Juara 1 Lomba Karya Tulis Ilmiah (LKTI) Budaya Sumbawa"}
              prestasi2={"Tutor of the Month KSB Smart (Juni 2022) "}
              prestasi3={"Juara 3 Lomba Karya Tulis Imiah (LKTI) Ekonomi Syariah Sumbawa"}
            />
          </div>
          <div className="px-2">
            <CardMentorHome
              gambar={mentor5}
              nama={"Namira"}
              study={"Kimia SMP"}
              prestasi1={"Finalis di Dynamic Load Bridge Competition Civil EXPO 2017"}
              prestasi2={"Tutor of the Month KSB Smart (Maret 2022) "}
              prestasi3={"Juara 1 Lomba Karya Tulis Ilmiah (LKTI) Sains di Universitas Sebelas Maret"}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MentorHome;
