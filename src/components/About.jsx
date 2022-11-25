import React from "react";
import CardAbout from "./Card/CardAbout";

const About = () => {
  return (
    <div className="lg:grid grid-cols-5 px-5 absolute -top-16 bg-white py-5 rounded-3xl z-10 shadow-xl hidden space-x-2 w-full">
      <div className="">
        <CardAbout gambar={"https://www.ruangguru.com/hubfs/Ruangguru%20Revamp%202022/Product%20Selection/Icon%20Video%20Belajar.svg"} ket={"Video Belajar"} ket1={"Pelajar dapat mengakses seluruh video yang telah direkam"} />
      </div>
      <div>
        <CardAbout gambar={"https://www.ruangguru.com/hubfs/Ruangguru%20Revamp%202022/Product%20Selection/Icon%20Brain%20Academy.svg"} ket={"Bimbel Online"} ket1={"Pelajar dapat memilih sistem pembelajaran online maupun tatap muka"} />
      </div>
      <div className="">
        <CardAbout gambar={"https://www.ruangguru.com/hubfs/Ruangguru%20Revamp%202022/Product%20Selection/Icon%20Brain%20Academy%20Center.svg"} ket={"Bimbel Luring"} ket1={"Pelajar dapat berkonsultasi dengan para tutor"} />
      </div>
      <div className="">
        <CardAbout gambar={"https://www.ruangguru.com/hubfs/Ruangguru%20Revamp%202022/Product%20Selection/Icon%20English%20Academy.svg"} ket={"Free Konsultasi"} ket1={"Pelajar dapat berkonsultasi dengan para tutor"} />
      </div>
      <div className="">
        <CardAbout gambar={"https://www.ruangguru.com/hubfs/Ruangguru%20Revamp%202022/Product%20Selection/Icon%20Persiapan%20UTBK.svg"} ket={"Persiapan Soal"} ket1={"Pelajar dapat berkonsultasi dengan para tutor"} />
      </div>
    </div>
  );
};

export default About;
