import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
// import { Button, Modal } from "flowbite-react";
import { useState } from "react";

function Doctor_card({name, Specialization, city, location }) {
    const [openModal, setOpenModal] = useState(false);
  return (
    <Card className="w-[360px] shadow-sm shadow-gray-500  my-5">
      <div className="flex">
        {/* <div className="overflow-hidden">
          <img
            src="https://assets-global.website-files.com/6426543485efe6a5ade36f21/64eeb730f28ad152d8d18244_Introducing-Dr.-Carewise--Your-Empathetic-3D-Animated-Doctor-gigapixel-standard-scale-6_00x.jpg"
            alt=""
            className="flex w-28 px-2 py-2 items-center"
          />
        </div> */}
        <div className="w-full">
          <div className="border-b-2 border-gray-200">
            <h5 className="text-2xl flex justify-center font-bold font-playfair tracking-tight text-gray-900 dark:text-white px-2 ">
              Dr. {name}
            </h5>
          </div>
          <ul className="font-sans text-gray-700 dark:text-gray-400 px-3 py-2 text-sm text-justify">
            <li>Specialization: {Specialization} </li>
            <li>City: {city} </li>
            <li>Location: {location} </li>
            <li>Rating: ⭐⭐⭐ </li>
          </ul>

          <div className=" flex  justify-center items-center ">
            <Link className="px-2 py-2">
              <button
                onClick={() => setOpenModal(true)}
                className="bg-blue-300  px-4 py-2 rounded text-sm font-sans hover:bg-cyan-700 "
              >
                Book Appointment
              </button>
            </Link>
            {/* <Link className="px-2 py-2">
              <button className="bg-blue-300  px-4 py-2 rounded text-sm font-sans"></button>
            </Link> */}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Doctor_card