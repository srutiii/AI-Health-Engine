import React from "react";
import { FaLariSign, FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { FaPython } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="xl:flex absolute bottom-0 h-[full mx-auto w-full p-4 bg-cyan-950 text-blue-300 hidden dark:bg-cyan-950 font-nunito">
      {/* Section: Design Block */}
      <section className="text-center lg:text-left">
        <div className="flex flex-wrap justify-center">
          <div className="w-full shrink-0 grow-0 basis-auto px-3 ">
            <div className="grid items-center gap-x-6 lg:grid-cols-2">
              <div className="mb-10 lg:mb-0">
                <h2 className="text-4xl font-bold font-playfair ">
                  Connect with us
                  <br />
                  <span className="text-sm text-gray-400 ">
                    Subscribe to the articles
                  </span>
                </h2>
              </div>

              <div className="mb-6 flex-row md:mb-0 md:flex">
                <div
                  className="relative mb-3 w-full md:mr-3 md:mb-0 xl:w-96"
                  data-te-input-wrapper-init
                >
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded bg-gray-300 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-blue-950 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 text-blue-950 font-semibold"
                    id="exampleFormControlInput2"
                    placeholder="Enter your email"
                  />
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-blue-950 transition-all duration-200 ease-out peer-focus:-translate-y-[1.40rem] peer-focus:scale-[0.8] peer-focus:text-blue-300 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  >
                    Enter your email
                  </label>
                </div>
                <button
                  type="submit"
                  className="inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-blue-300 shadow-blue-300 shadow-sm transition duration-150 ease-in-out  hover:shadow-lg hover:shadow-blue-300"
                >
                  Subscribe
                </button>
              </div>
              <div className="pt-2 font-bold text-cyan-800">
                <h3>Built using</h3>
                <div className="flex justify-between">
                  <div className="flex justify-between items-center">
                    <FaReact className="text-4xl" />
                    <p className="px-2"> React</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <SiTailwindcss className="text-4xl" />
                    <p className="px-2"> Tailwind</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <SiFlask className="text-4xl" />
                    <p className="px-2"> Flask</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <FaPython className="text-4xl" />
                    <p className="px-2"> Machine Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </div>
  );
};

export default Footer;
