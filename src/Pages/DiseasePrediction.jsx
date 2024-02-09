import React from "react";
import { IoMdSend } from "react-icons/io";

function DiseasePrediction() {
  return (
    <div className="">
      <div className=" w-full h-screen">
        <div className=" w-full flex justify-between px-10 mt-32">
          <div className="w-1/2 flex justify-center items-center ">
            <h2 className="text-cyan-700  capitalize font-playfair text-6xl">
              how does it work?
            </h2>
          </div>
          <div className="w-2/3 flex justify-center items-center dark:text-blue-200 ">
            <ul className="px-2 ">
              <li className="py-2 px-2 border-l-2 border-cyan-700 mb-2 text-justify">
                {/* <img src="src/assets/scribble.png" alt="" className="w-10 py-2" /> */}
                Our model is trained on extensive and diverse datasets,
                facilitating comprehensive learning. It is rigorously tested,
                achieving a remarkable 100% accuracy rate in disease prediction,
                ensuring reliable and effective healthcare outcomes.
              </li>
              <li className="py-2 px-2  border-l-2 border-cyan-700  mb-2 text-justify">
                Utilizing supervised learning and advanced Machine Learning
                algorithms, our model maps symptoms to diseases during training.
                This approach ensures precise predictions and empowers proactive
                healthcare interventions.
              </li>
              <li className="py-2 px-2 border-l-2 border-cyan-700  mb-2 text-justify">
                The outcome is a robust disease prediction system capable of
                accurately identifying health conditions based on symptoms,
                enabling timely interventions and informed healthcare decisions
                for improved patient outcomes.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <img src="src/assets/healthcare.png" alt="" />
          <h2 className="flex justify-center mt-10 font-bold text-xl text-gray-500">
            "Experience the future of healthcare with our Disease Prediction
            System – <br />
            data-driven insights pave the way for a healthier tomorrow."
          </h2>
        </div>
      </div>
    </div>
  );
}

export default DiseasePrediction;
