import React from "react";

function Profile() {
  return (
    <div className="w-full h-screen">
      <div className="w-full mt-32 relative px-5 flex items-center justify-center">
        <img
          src="https://t3.ftcdn.net/jpg/05/98/48/88/360_F_598488869_fiLUgajDxyaoxE9D3SuHMZfD56IjrBXe.jpg"
          alt=""
          className="w-40 p-3 rounded-full "
        />
        <h2 className="absolute bottom-0 bg-blue-950 bg-opacity-80 px-5 rounded text-xl text-white font-playfair font-semibold">
          Elsa Frozen
        </h2>
      </div>

      <div className="flex md:flex-row md:justify-between flex-col px-10  py-5">
        <div className=" ">
          <div>
            {/* User Details */}
            <h2 className="bg-cyan-600 px-2 bg-opacity-50 uppercase font-playfair text-white flex justify-center">
              User Details
            </h2>
            <ul className="px-4 text-gray-600">
              <li className="border-b w-full border-blue-400 ">
                <h3 className="capitalize font-semibold">phone number </h3>
                <p className="text-sm ">91+ 7044125840</p>
              </li>
              <li className="border-b w-full border-blue-400">
                <h3 className="capitalize font-semibold">email id</h3>
                <p className=" text-sm ">elsa@gmail.com</p>
              </li>
              <li className="border-b w-full border-blue-400">
                <h3 className="capitalize font-semibold">location</h3>
                <p className="text-sm ">Arendelle, Elsa's Ice Palace </p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="bg-cyan-600 px-2 bg-opacity-50 uppercase font-playfair text-white  flex justify-center mt-5">
              Health Parameters
            </h2>
            <ul className="px-4 text-gray-600">
              <li className="border-b w-full border-blue-400 ">
                <h3 className="capitalize font-semibold">age</h3>
                <p className="text-sm ">24</p>
              </li>
              <li className="border-b w-full border-blue-400 ">
                <h3 className="capitalize font-semibold">height</h3>
                <p className="text-sm ">140 cm</p>
              </li>
              <li className="border-b w-full border-blue-400 ">
                <h3 className="capitalize font-semibold">weight</h3>
                <p className="text-sm ">67 kg</p>
              </li>
              <li className="border-b w-full border-blue-400 ">
                <h3 className="capitalize font-semibold">bmi</h3>
                <p className="text-sm ">34.2</p>
              </li>
            </ul>
          </div>
          <div className="md:mt-5 md:flex hidden">
            <button className="px-10 py-4 border-2 border-cyan-700 rounded-full shadow-md shadow-cyan-600 font-semibold dark:text-gray-300 ">
              Upload Reports
            </button>
          </div>
        </div>

        <div className=" w-2/3 px-10 flex-col ">
          {/* <h2 className="flex justify-center bg-cyan-600 bg-opacity-50">
            saved articles
          </h2> */}
          <h2 className="flex justify-center bg-cyan-600 bg-opacity-50 text-white font-playfair uppercase ">
            Upcoming appointments
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
