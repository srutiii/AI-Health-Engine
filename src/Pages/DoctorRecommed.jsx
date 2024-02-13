import React from 'react'
import { Dropdown, DropdownItem } from "flowbite-react";
import Doctor_card from '../components/Doctor_card';


function DoctorRecommed() {
  return (
    <div className="w-full">
      <div className="">
        <div className="h-[300px] bg-blue-200 dark:bg-cyan-800 flex w-full justify-center relative">
          <div className="mt-20 md:w-1/2 w-[90%] flex justify-center items-center">
            <p className="text-xl font-playfair font-semibold dark:text-gray-300 text-cyan-800">
              Discover your ideal doctor and schedule appointments seamlessly
              with our intuitive recommendation and booking system.
            </p>
          </div>
          <img
            src="src/assets/medical-team (1).png"
            alt=""
            className="md:w-52 w-20 absolute right-10 bottom-0 "
          />
        </div>
        <div className="flex px-10 py-3 w-full">
          <div className="px-2 ">
            <Dropdown label="Location" dismissOnClick={false}>
              <DropdownItem>Location 1</DropdownItem>
              <DropdownItem>Location 2</DropdownItem>
              <DropdownItem>Location 3</DropdownItem>
              <DropdownItem>Location 4</DropdownItem>
            </Dropdown>
          </div>
          <div className=" w-full">
            <Dropdown label="Doctor's Specialization" dismissOnClick={false}>
              <DropdownItem>Specialization 1</DropdownItem>
              <DropdownItem>Specialization 2</DropdownItem>
              <DropdownItem>Specialization 3</DropdownItem>
              <DropdownItem>Specialization 4</DropdownItem>
            </Dropdown>
          </div>
          {/* <div className='flex items-center justify-end w-full text-gray-500 text-sm'>Results 10</div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-3 py-3 overflow-hidden">
          <Doctor_card name='Paras Nath' location='park street' Specialization='Neuro'/>
          <Doctor_card />
          <Doctor_card />
          <Doctor_card />
          <Doctor_card />
          <Doctor_card />
          <Doctor_card />
          <Doctor_card />
          <Doctor_card />
          <Doctor_card />
        </div>
      </div>
    </div>
  );
}

export default DoctorRecommed