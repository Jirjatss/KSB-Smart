import React from "react";
import Slider from "react-slick";
import CardAboutUs from "./Card/CardAboutUs";

import Title from "./Title";

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="lg:pt-20 pt-10" id="about">
      <Title title={"About Us"} />
      <div className="lg:rounded-lg bg-[#002e74] text-white px-8">
        <div className="lg:flex py-3 grid grid-cols-1">
          <div className="m-auto lg:w-96 lg:mr-4 lg:flex-none">
            <h1 className="text-xl text-center mb-4">Let's Study Sciences!</h1>
            <p className="lg:text-justify text-center">
              KSB-Smart merupakan plaform pembelajaran online untuk memudahkan kamu belajar dimana saja, kapan saja sesuai kebutuhan. Pembelajaran yang di terapkan oleh KSB-Smart bisa melalui daring maupun luring. Ayoo belajar bersama kami
              dan daftarkan dirimu!
            </p>
          </div>
          <div className="lg:px-10 px-4 lg:flex-1 lg:w-96 w-full mx-auto py-10">
            <Slider {...settings}>
              <div className="px-2">
                <CardAboutUs title={"Aman"} ket={"Aplikasi KSB Smart menjamin data pengguna tetap aman"} gambar={"https://roboguru-forum-cdn.ruangguru.com/image/c8d6923b-c6f1-4a02-a7ad-b7e9d268b138.png?convert=webp&height=320"} />
              </div>
              <div className="px-2">
                <CardAboutUs
                  gambar={"https://www.english-academy.id/hubfs/2%20English%20Academy%202022/Homepage/Hero/explorer/header-image-explorer.png"}
                  title={"Metode"}
                  ket={"Memakai 2 metode pembelajaran yaitu via remote dan tatap muka."}
                />
              </div>
              <div className="px-2">
                <CardAboutUs gambar={"https://roboguru-forum-cdn.ruangguru.com/image/dabd6d4c-18e3-43cf-9db0-7b1d46bd27ba.png?convert=webp"} ket={"Hampir 85% warga NTB menggunakan aplikasi KSB SMart"} title={"Terpercaya"} />
              </div>
              <div className="px-2">
                <CardAboutUs gambar={"https://www.ruangguru.com/hubfs/LP%20Ruangguru%20Private/Section%20Kenapa%20RG%20Privat/Asset%20header%20(1).png"} ket={"Diajarkan oleh tutor berpengalaman dan ahli dibidangnya"} title={"Tutor Ahli"} />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
