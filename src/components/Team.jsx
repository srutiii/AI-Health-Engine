import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section className="pb-20 xl:mb-20 pt-5 text-light_text bg-background lg:pb-20  md:h-full dark:bg-gray-900 md:mt-40">
      <div className="container mx-auto">
        <div className=" flex justify-center items-center w-fullww">
          <div className="flex items-center justify-center w-ful px-4">
            <div className="md:mx-auto mb-[50px] md:max-w-[510px] text-center">
              <span className="text-sub_heading mb-2 block text-3xl xl:text-4xl font-playfair dark:text-dark_text font-bold  text-primary">
                The Team
              </span>
              <p className="text-xs italic text-gray-600 dark:text-white font-nunito md:text-lg">
                "Together we shaped this idea into tangible platform."
              </p>
            </div>
          </div>
        </div>

        <div className="md:mx-4 flex flex-wrap justify-center">
          <TeamCard
            name="Sruti Das"
            profession="Web Developer"
            imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
          />
          <TeamCard
            name="Abhishek Kumar Prasad"
            profession="Web Developer"
            imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
          />
          <TeamCard
            name="Aman Ranjan"
            profession="Web Developer"
            imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
          />
          <TeamCard
            name="Satyam Kumar Sonu"
            profession="Web Developer"
            imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;

const TeamCard = ({ name, profession, imageSrc }) => {
  return (
    <>
      <div className="w-[50%] px-3 md:px-4 md:w-1/2 xl:w-1/4">
        <div className="mx-auto mb-5 w-full max-w-[370px]">
          <div className="relative overflow-hidden rounded-lg">
            <img src={imageSrc} alt="" className="w-full" />
            <div className="absolute bottom-5 left-0 w-full text-center opacity-45 hover:opacity-100">
              <div className="relative md:mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-dark-2">
                <h3 className="text-xl font-semibold text-blue-950 ">{name}</h3>
                <p className="text-xs text-body-color">{profession}</p>
                <div className="flex w-full items-center justify-center mt-3">
                  <div className="flex">
                    <Link className=" text-lg text-blue-950 px-4 py-1 cursor-pointer">
                      <FaFacebook />
                    </Link>
                    <Link className=" text-lg text-blue-950 px-4 py-1 cursor-pointer">
                      <FaLinkedin />
                    </Link>
                    <Link className=" text-lg text-blue-950 px-4 py-1 cursor-pointer">
                      <AiFillInstagram />
                    </Link>
                    <Link className=" text-lg text-blue-950 px-4 py-1 cursor-pointer">
                      <FaGithub />
                    </Link>
                  </div>
                </div>
                <div>
                  <span className="absolute bottom-0 left-0">
                    <svg
                      width={61}
                      height={30}
                      viewBox="0 0 61 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx={16}
                        cy={45}
                        r={45}
                        fill="#13C296"
                        fillOpacity="0.11"
                      />
                    </svg>
                  </span>
                  <span className="absolute right-0 top-0">
                    <svg
                      width={20}
                      height={25}
                      viewBox="0 0 20 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="0.706257"
                        cy="24.3533"
                        r="0.646687"
                        transform="rotate(-90 0.706257 24.3533)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="6.39669"
                        cy="24.3533"
                        r="0.646687"
                        transform="rotate(-90 6.39669 24.3533)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.0881"
                        cy="24.3533"
                        r="0.646687"
                        transform="rotate(-90 12.0881 24.3533)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.7785"
                        cy="24.3533"
                        r="0.646687"
                        transform="rotate(-90 17.7785 24.3533)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="0.706257"
                        cy="18.6624"
                        r="0.646687"
                        transform="rotate(-90 0.706257 18.6624)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="6.39669"
                        cy="18.6624"
                        r="0.646687"
                        transform="rotate(-90 6.39669 18.6624)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.0881"
                        cy="18.6624"
                        r="0.646687"
                        transform="rotate(-90 12.0881 18.6624)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.7785"
                        cy="18.6624"
                        r="0.646687"
                        transform="rotate(-90 17.7785 18.6624)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="0.706257"
                        cy="12.9717"
                        r="0.646687"
                        transform="rotate(-90 0.706257 12.9717)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="6.39669"
                        cy="12.9717"
                        r="0.646687"
                        transform="rotate(-90 6.39669 12.9717)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.0881"
                        cy="12.9717"
                        r="0.646687"
                        transform="rotate(-90 12.0881 12.9717)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.7785"
                        cy="12.9717"
                        r="0.646687"
                        transform="rotate(-90 17.7785 12.9717)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="0.706257"
                        cy="7.28077"
                        r="0.646687"
                        transform="rotate(-90 0.706257 7.28077)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="6.39669"
                        cy="7.28077"
                        r="0.646687"
                        transform="rotate(-90 6.39669 7.28077)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.0881"
                        cy="7.28077"
                        r="0.646687"
                        transform="rotate(-90 12.0881 7.28077)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.7785"
                        cy="7.28077"
                        r="0.646687"
                        transform="rotate(-90 17.7785 7.28077)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="0.706257"
                        cy="1.58989"
                        r="0.646687"
                        transform="rotate(-90 0.706257 1.58989)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="6.39669"
                        cy="1.58989"
                        r="0.646687"
                        transform="rotate(-90 6.39669 1.58989)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.0881"
                        cy="1.58989"
                        r="0.646687"
                        transform="rotate(-90 12.0881 1.58989)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.7785"
                        cy="1.58989"
                        r="0.646687"
                        transform="rotate(-90 17.7785 1.58989)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
