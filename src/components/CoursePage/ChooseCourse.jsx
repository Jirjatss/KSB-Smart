import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import bg from "../../assets/bg.jpg";
import Masthead from "../HomePage/Masthead";
import Subheading from "../HomePage/Subheading";
import CardChooseCourse from "../Card/CardChooseCourse";

const ChooseCourse = () => {
  return (
    <>
      <div className="bg-cover flex" style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <div className="grid lg:grid-cols-2 grid-cols-1 px-2 lg:pb-24 mb-4 m-auto">
          <Masthead />
          <Subheading />
        </div>
      </div>
      <div className="bg-white lg:rounded-xl lg:-mt-28 mx-8 mb-8">
        <div className="grid grid-cols-3 px-8 md:-mt-28 py-8">
          <CardChooseCourse title={"Booking Pelajaran"} ket={"Sistem pembelajaran dari SD, SMP, dan SMA"} gambar={"https://roboguru-forum-cdn.ruangguru.com/image/c8d6923b-c6f1-4a02-a7ad-b7e9d268b138.png?convert=webp&height=320"} />
          <CardChooseCourse title={"Video Belajar"} ket={"Belajar seru dengan nonton video"} gambar={"https://roboguru-forum-cdn.ruangguru.com/image/c8d6923b-c6f1-4a02-a7ad-b7e9d268b138.png?convert=webp&height=320"} />
          <CardChooseCourse title={"Persiapan Soal"} ket={"Kumpulan soal untuk uji kemampuan"} gambar={"https://roboguru-forum-cdn.ruangguru.com/image/c8d6923b-c6f1-4a02-a7ad-b7e9d268b138.png?convert=webp&height=320"} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChooseCourse;
