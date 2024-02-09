import React from "react";
import { Link } from "react-router-dom";
import DiseasePrediction from "./DiseasePrediction";
import Footer from "../components/Footer";

const Service = () => {
  return (
    <section className=" dark:bg-gray-900 mt-10">
      <div className="container mx-auto">
        <div className="-mx-2 flex flex-wrap">
          <div className="w-full px-4 font-nunito text-blue-400 dark:text-cyan-600">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-10">
              <span className="mb-2  text-2xl font-semibold font-playfair">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-extrabold  sm:text-4xl md:text-[40px] font-playfair">
                What We Offer
              </h2>
              <p className="text-base text-gray-700 dark:text-dark-6 italic dark:text-blue-200 ">
                Elevate well-being with our AI HealthEngine module: personalized
                insights, proactive guidance, and seamless wellness at your
                fingertips.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Disease Prediction Model"
            details="Our system, driven by advanced algorithms, foresees potential diseases through thorough health data analysis. This foresight enables proactive interventions, reshaping preventive healthcare for personalized and optimal well-being."
            icon="src/assets/health-report.gif"
            link="/predict"
          />
          <ServiceCard
            title="Doctor Recommendation"
            details="Redefining healthcare recommendations, our system seamlessly matches patients with suitable doctors using advanced algorithms. Personalized and precise, it ensures optimal healthcare partnerships for enhanced well-being."
            icon="src/assets/cardiologist.gif"
          />
          <ServiceCard
            title="Chatbot Assistant"
            details="Introducing your personalized health assistant: Our chatbot utilizes advanced algorithms to provide instant health insights and guidance. Seamlessly interactive, it's your dedicated partner for a healthier, more informed lifestyle."
            icon="src/assets/chat-bot.gif"
          />
          <ServiceCard
            title="Medical Reports Storage"
            details="Empower yourself with easy access to your health history, effortlessly organize and secure your medical reports. Our advanced system ensures easy access, empowering you to take control of your health history for informed decision-making."
            icon="src/assets/server.gif"
          />
          <ServiceCard
            title="Health Articles "
            details="Explore a wealth of health wisdom through our insightful articles. Curated for your well-being, these resources cover a spectrum of topics, providing expert knowledge and practical tips for a healthier, more informed life"
            icon="src/assets/blog.gif"
          />
          <ServiceCard
            title="Book an Appointment "
            details="Effortlessly schedule your next appointment with our streamlined booking system. Take control of your health journey – book, confirm, and manage appointments with ease, ensuring timely access to personalized care."
            icon="src/assets/appointment.gif"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details, link }) => {
  return (
    <>
      <div className="w-full  px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-6 md:mx-0 mb-9 rounded-[20px]  dark:bg-gray-300 border-2 border-blue-400 dark:border-cyan-800 shadow shadow-black p-10 transform transition duration-300 hover:scale-110 dark:bg-dark-2 md:px-7 xl:px-10 font-nunito">
          <div className="mb-8 flex justify-between h-[70px] md:w-full items-center rounded-2xl bg-primary">
            <img src={icon} alt="" className="w-20 mix-blend-multiply " />
            <Link to={link}>
              <button className="bg-blue-400 dark:bg-cyan-600 px-4 py-2 rounded hover:bg-blue-300 font-semibold text-white hover:dark:bg-cyan-600">
                Explore
              </button>
            </Link>
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark">
            {title}
          </h4>
          <p className="text-gray-800   text-sm">{details}</p>
        </div>
      </div>
    </>
  );
};
