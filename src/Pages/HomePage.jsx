import React from "react";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Blogs from "../components/Blogs";
import FAQ from "../components/FAQ";
import Service from "./Services";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";

function HomePage() {
  return (
    <div>
      <div className="h-screen  md:flex flex-row bg-background  dark:bg-gray-900 dark:text-blue-300 ">
        <div className="flex flex-col justify-center items-center h-[50%] lg:h-full lg:w-[40%] w-full">
          <div className=" px-5 w-full flex justify-center items-center mt-10">
            <h1 className="animate-slidein [--slidein-delay:300ms]   text-2xl md:text-6xl p-2 dark:text-cyan-400 mt-32 font-playfair font-semibold">
              Revolutionize Healthcare with Our Advanced
              <span className="text-block flex animate-slidein [--slidein-delay:500ms] ">
                AI HealthEngine
              </span>
            </h1>
          </div>
          <div className="flex justify-center items-center w-full">
            <p className="animate-slidein [--slidein-delay:700ms] mx-2 p-4 flex justify-center items-center text-gray-600 font-nunito text-sm  ">
              Empowering Better Lives Through Cutting-edge Artificial
              Intelligence Solutions for Personalized Healthcare Experiences
            </p>
          </div>
          <motion.div 
          whileHover={{
            scale: 1.1,
            
          }}>
            <Link
              to="/login"
              className="border-2 border-button hover:border-button px-8 py-4 rounded-lg relative transform transition hover:bg-button  hover:text-white text-button flex"
            >
              <span className="capitalize font-bold  flex justify-center items-center  ">
                Get started
                <FaArrowRight className="flex justify-center items-center w-10 px-1 " />
              </span>
            </Link>
          </motion.div>
        </div>
        <div className="md:relative xl:flex w-[60%] ml-5 ">
          <div className="md:absolute w-0 h-0 md:top-0 md:right-0 md:border-t-[350px] md:border-t-block md:border-r-[350px] md:border-r-block  md:border-b-[350px] md:border-b-block md:border-l-[350px] md:border-l-transparent dark:border-r-cyan-700 dark:border-t-cyan-700  dark:border-b-cyan-700 " />
        </div>
      </div>

      <div className="">
        <div className="md:px-24 px-4  relative  bg-block dark:bg-cyan-700 pt-6 cursor-default">
          <h2 className="text-3xl font-playfair text-sub_heading font-bold border-b-2 border-blue-200  ">
            About
          </h2>
          <p className=" font-sans  text-justify flex justify-center items-center py-10 text-gray-700  ">
            Welcome to our AI Health Engine, a revolutionary platform
            integrating cutting-edge artificial intelligence with healthcare
            expertise. Our system seamlessly predicts diseases, recommends
            specialized doctors, and assists users through an intuitive chatbot
            interface. Utilizing advanced algorithms, it analyzes extensive
            medical data to deliver accurate disease predictions and
            personalized recommendations. Whether you seek preventive care or
            need guidance on existing health concerns, our AI Health Engine is
            your trusted companion. With a focus on user-centric design and
            seamless interaction, we empower individuals to take control of
            their health journey, ensuring informed decisions and timely
            interventions for a healthier tomorrow. Welcome to the future of
            healthcare.
          </p>
          <div className="flex ">
            <img
              src="src/assets/medical.png"
              alt=""
              className="md:w-24 w-1/3 py-5"
            />
            <div className="flex justify-center items-center md:px-10 px-5">
              <ul className="text-justify md:text-md italic list-disc text-gray-700 ">
                <li>
                  Empowering proactive health decisions with AI-driven disease
                  prediction.
                </li>
                <li>
                  Connecting users with specialized doctors through tailored
                  recommendations.
                </li>
                <li>
                  Providing personalized chatbot support for round-the-clock
                  healthcare assistance.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-20">
          <Service />
        </div>
        <div className="">
          <Testimonials />
        </div>
        <div>
          <Team />
        </div>
        <FAQ />
        <div className="relative ">
          <Footer className=" absolute bottom-0" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
