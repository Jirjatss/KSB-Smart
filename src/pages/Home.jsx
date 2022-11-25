import React, { useEffect } from "react";
import "./Home.css";
import About from "../components/HomePage/About";
import Masthead from "../components/HomePage/Masthead";
import Subheading from "../components/HomePage/Subheading";
import bg from "../assets/bg.jpg";
import bg1 from "../assets/bg1.jpg";
import Navbar from "../layout/Navbar";
import AboutUs from "../components/HomePage/AboutUs";
import CourseHome from "../components/HomePage/CourseHome";
import MentorHome from "../components/HomePage/MentorHome";
import Footer from "../layout/Footer";
import Swal from "sweetalert2";
import "animate.css";
const Home = () => {
  useEffect(() => {
    Swal.fire({
      title: `Selamat Datang di KSB Smart`,
      imageUrl: "https://roboguru-forum-cdn.ruangguru.com/image/c8d6923b-c6f1-4a02-a7ad-b7e9d268b138.png?convert=webp&height=320",
      imageWidth: 400,
      imageHeight: 200,
      buttonsStyling: false,
      showCloseButton: true,
      showConfirmButton: false,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOut",
      },
    });
  });
  return (
    <>
      <div className="w-full bg-slate-50 text-black pb-5">
        <div className="bg-cover" style={{ backgroundImage: `url(${bg})` }}>
          <Navbar />
          <div className="grid lg:grid-cols-2 grid-cols-1 px-5 lg:pb-28">
            <Masthead />
            <Subheading />
          </div>
        </div>
        <div className="lg:px-20 px-4 pb-20">
          <div className="relative m-auto w-full">
            <About />
          </div>
          <AboutUs />
          <CourseHome />
        </div>
      </div>
      <div className="bg-cover pt-10 lg:px-16 px-8" style={{ backgroundImage: `url(${bg1})` }}>
        <MentorHome />
      </div>
      <Footer />
    </>
  );
};

export default Home;
