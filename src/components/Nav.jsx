import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Nav() {
  const [mode, setMode] = useState('light')

  useEffect(()=>{
    if (mode === "dark") {
      document.documentElement.classList.add('dark')
  }else{
    document.documentElement.classList.remove('dark')
  }},[mode])
  return (
    <div className="">
      <div className="fixed z-20 w-full flex justify-between bg-transparent font-nunito backdrop-blur-xl ">
        <div>
          <Link to="/">
            <h1 className="font-sans font-extrabold cursor-pointer text-3xl sm:text-4xl md:text-6xl ml-6 p-3 text-cyan-600">
              AI-He.
            </h1>
          </Link>
        </div>
        {/* Nav for larger screens */}
        <div className="xl:flex hidden">
          <div className="flex justify-center items-center text-cyan-900 dark:text-cyan-500  ">
            <Link className="py-1 px-4 font-semibold text-xl border border-transparent rounded-full hover:border-b-blue-950 cursor-pointer hover:scale-105 ease-in-out  hover:text-blue-950 dark:hover:text-cyan-400  dark:hover:border-b-cyan-400 hover:shadow-md  dark:hover:shadow-cyan-600 hover:shadow-blue-950">
              Articles
            </Link>
            <Link
              to="/services"
              className="py-1 px-4 font-semibold text-xl border border-transparent rounded-full hover:border-b-blue-950 cursor-pointer hover:scale-105 ease-in-out  hover:text-blue-950 dark:hover:text-cyan-400  dark:hover:border-b-cyan-400 hover:shadow-md  dark:hover:shadow-cyan-600 hover:shadow-blue-950"
            >
              Servies
            </Link>
            <Link
              to="/contact"
              className="py-1 px-4 font-semibold text-xl border border-transparent rounded-full hover:border-b-blue-950 cursor-pointer hover:scale-105 ease-in-out  hover:text-blue-950 dark:hover:text-cyan-400  dark:hover:border-b-cyan-400 hover:shadow-md  dark:hover:shadow-cyan-600 hover:shadow-blue-950 "
            >
              Contact Us
            </Link>
            <Link className="py-1 px-4 font-semibold text-xl border border-transparent rounded-full hover:border-b-blue-950 cursor-pointer hover:scale-105 ease-in-out  hover:text-blue-950 dark:hover:text-cyan-400  dark:hover:border-b-cyan-400 hover:shadow-md  dark:hover:shadow-cyan-600 hover:shadow-blue-950">
              <span className="">Founders</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center text-white mr-6 ">
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="sm:mr-4 flex text-xl mr-10  rounded-full "
          >
            {mode === "dark" ? (
              <FaSun className="text-yellow-300 cursor-pointer" />
            ) : (
              <FaMoon className="text-black cursor-pointer" />
            )}
          </button>
          <Link to="/login">
            <button className="bg-cyan-950 px-3 py-2 md:px-4 md:h-10 rounded m-2 hover:shadow-lg hover:shadow-cyan-900 font-nunito font-semibold">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-cyan-950 px-3 py-2 md:px-4 md:h-10 rounded m-2 hover:shadow-lg hover:shadow-cyan-900 font-nunito font-semibold ">
              {" "}
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
