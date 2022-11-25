import React from "react";
import About from "../components/About";
import Masthead from "../components/Masthead";
import Subheading from "../components/Subheading";
import bg from "../assets/bg.jpg";
import bg1 from "../assets/bg1.jpg";

import Navbar from "../layout/Navbar";
import AboutUs from "../components/AboutUs";
import CourseHome from "../components/CourseHome";
import MentorHome from "../components/MentorHome";
import Footer from "../layout/Footer";
const Home = () => {
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
        <div className="lg:px-16 px-8 pb-20">
          <div className="relative mx-auto">
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
