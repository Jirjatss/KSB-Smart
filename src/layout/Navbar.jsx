import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 40) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBg);
    // }
  }, []);

  return (
    <>
      <nav
        className={
          active || open ? " bg-[#002e74] border-gray-200  text-white  fixed z-20 top-0 left-0 w-full lg:px-20 px-5 lg:py-0 py-3" : " bg-transparent border-gray-200  text-white  fixed z-20 top-0 left-0 w-full lg:px-20 px-5 lg:py-0 py-3"
        }
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto ">
          <HashLink to="/" className="flex items-center">
            <img src={require("../assets/logo.png")} className="mr-3 w-16 h-8 " alt="Jirjatss Logo" />
          </HashLink>
          <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden " aria-controls="navbar-dropdown" aria-expanded="false" onClick={() => setOpen(!open)}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
          <div className={open ? "w-full  md:block md:w-auto" : "hidden w-full md:block md:w-auto"} id="navbar-dropdown">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 menu menu-vertical relative">
              <li className="hover:bg-[#002e74] hover:rounded-lg">
                <HashLink to="/#home" smooth>
                  Home
                </HashLink>
              </li>
              <li className="hover:bg-[#002e74] hover:rounded-lg">
                <HashLink to="/#about" smooth>
                  About
                </HashLink>
              </li>
              <li tabIndex={0} className="hover:bg-[#002e74] hover:rounded-lg">
                <a>
                  Course
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className={"p-2 bg-[#002e74] absolute left-0 top-10  z-10"} id="dropdown-mycourse">
                  <li>
                    <Link to="/course" smooth>
                      Course
                    </Link>
                  </li>
                  <li>
                    <a>My Course</a>
                  </li>
                </ul>
              </li>
              <li className="hover:bg-[#002e74] hover:rounded-lg">
                <Link to="/login" smooth>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
