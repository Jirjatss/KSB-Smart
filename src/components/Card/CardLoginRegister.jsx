import React, { useState, useEffect } from "react";
import Navbar from "../../layout/Navbar";
import bg from "../../assets/bg.jpg";
import Masthead from "../../components/HomePage/Masthead";
import { useLocation, Link } from "react-router-dom";

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};
const CardMasthead = () => {
  const [path, setPath] = useState();
  const currentPath = usePathname().substring(usePathname().lastIndexOf("/") + 1);

  useEffect(() => {
    setPath(currentPath);
  }, [path]);
  return (
    <>
      <Navbar />
      <div className="bg-cover h-screen flex" style={{ backgroundImage: `url(${bg})` }}>
        <Navbar />
        <div className="grid lg:grid-cols-2 grid-cols-1 px-2  m-auto">
          <Masthead />
          {path == "register" ? (
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white m-auto">
              <div className="pt-3 px-3 mx-auto">
                <p className="text-xl text-black">Register Now</p>
              </div>
              <div className="card-body ">
                <div className="form-control">
                  <input type="text" placeholder="name" className="input input-bordered bg-white text-black" />
                </div>
                <div className="form-control">
                  <input type="email" placeholder="email" className="input input-bordered text-black bg-white" />
                </div>
                <div className="form-control">
                  <input type="password" placeholder="password" className="input input-bordered bg-white text-black" />
                </div>
                <select className="select w-full max-w-xs bg-white input-bordered text-gray-500 font-normal">
                  <option disabled selected>
                    Choose Role
                  </option>
                  <option>Student</option>
                  <option>Tutor</option>
                </select>

                <div className="form-control mt-6">
                  <button className="py-3 rounded-lg bg-[#002e74] text-white hover:bg-blue-800">Register</button>
                </div>
                <p className="text-xs  ml-3 text-black">
                  <span> Already have a account? </span>
                  <Link to="/login" className=" text-sky-700 hover:text-sky-500">
                    <span> Login</span>
                  </Link>
                </p>
              </div>
            </div>
          ) : (
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white m-auto">
              <div className="pt-3 px-3 mx-auto">
                <p className="text-xl text-black">Login Now</p>
              </div>
              <div className="card-body ">
                <div className="form-control">
                  <input type="email" placeholder="email" className="input input-bordered text-black bg-white" />
                </div>
                <div className="form-control">
                  <input type="password" placeholder="password" className="input input-bordered bg-white text-black" />
                </div>
                <div className="form-control mt-6">
                  <button className="py-3 rounded-lg bg-[#002e74] text-white hover:bg-blue-800">Login</button>
                </div>
                <p className="text-xs  ml-3 text-black">
                  <span> Not a member? </span>
                  <Link to="/register" className=" text-sky-700 hover:text-sky-500">
                    <span> Register</span>
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardMasthead;
