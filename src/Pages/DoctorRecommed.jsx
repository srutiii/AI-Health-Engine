import React, { useState } from 'react';
import { Dropdown, DropdownItem } from "flowbite-react";
import Doctor_card from '../components/Doctor_card';

function DoctorRecommed() {
  const [specializationFilter, setSpecializationFilter] = useState(null);
  const [locationFilter, setLocationFilter] = useState(null);

  const Doctors = [
    {
      id: 1,
      name: "Suresh H. Advani",
      city: "Mumbai",
      Specialisation: "Oncologist",
      clinic: "Jaslok Hospital, Mumbai",
    },
    {
      id: 2,
      name: "Ashok Seth",
      city: "New Delhi",
      Specialisation: "Cardiologist",
      clinic: "Fortis Escorts Heart Institute, New Delhi",
    },
    {
      id: 3,
      name: "P S Binu",
      city: "Kochi",
      Specialisation: "General Surgeon",
      clinic: "Aster Medcity Kochi",
    },
    {
      id: 4,
      name: "Sandeep Vaishya",
      city: "New Delhi",
      Specialisation: "Neurosurgeon",
      clinic: "Fortis Escorts Heart Institute, New Delhi",
    },
    {
      id: 5,
      name: "Harit Chaturvedi",
      city: "New Delhi",
      Specialisation: "Oncologist",
      clinic: "Max Super Speciality Hospital, Saket, New Delhi",
    },
    {
      id: 7,
      name: "P.K. Gambhir",
      city: "New Delhi",
      Specialisation: "General Surgeon",
      clinic: "Saroj Super Speciality Hospital",
    },
    {
      id: 8,
      name: "Devi Prasad Shetty",
      city: "Bangalore",
      Specialisation: "Cardiac Surgeon",
      clinic: "Narayana Multispeciality Hospital, Bangalore",
    },
    {
      id: 9,
      name: "S Radhakrishnan",
      city: "Gurgaon",
      Specialisation: "Pediatric Cardiac Surgeon",
      clinic: "Medanta - The Medicity, Gurgaon",
    },
    {
      id: 10,
      name: "Basanta Behera",
      city: "Bhubaneswar",
      Specialisation: "Orthopaedic",
      clinic: "AMRI Hospitals, Bhubaneswar",
    },
    {
      id: 11,
      name: "Pradeep Sen",
      city: "Kolkata",
      Specialisation: "Cosmetic Surgeon",
      clinic: "Apollo Hospital, Kolkata",
    },
  ];

  const locations = {
    Mumbai: "Mumbai",
    "New Delhi": "New Delhi",
    Kochi: "Kochi",
    Bangalore: "Bangalore",
    Gurgaon: "Gurgaon",
    Bhubaneswar: "Bhubaneswar",
    Kolkata: "Kolkata",
  };

  const specializations = {
    Oncologist: "Oncologist",
    Cardiologist: "Cardiologist",
    "General Surgeon": "General Surgeon",
    Neurosurgeon: "Neurosurgeon",
    "Pediatric Cardiac Surgeon": "Pediatric Cardiac Surgeon",
    Orthopaedic: "Orthopaedic",
    "Cosmetic Surgeon": "Cosmetic Surgeon",
    "Cardiac Surgeon": "Cardiac Surgeon",
  };

  const filteredDoctors = Doctors.filter((doctor) => {
    return (
      (!specializationFilter ||
        doctor.Specialisation === specializationFilter) &&
      (!locationFilter || doctor.city === locationFilter)
    );
  });

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
            <Dropdown
              label="Location"
              value={locationFilter}
              dismissOnClick={false}
              onChange={(value) => setLocationFilter(value)}
            >
              {Object.keys(locations).map((location) => (
                <DropdownItem
                  key={location}
                  value={location}
                  className="hover:bg-gray-300"
                >
                  {location}
                </DropdownItem>
              ))}
            </Dropdown>
          </div>
          <div className=" w-full">
            <Dropdown
              label="Doctor's Specialization"
              value={specializationFilter}
              dismissOnClick={false}
              onChange={(value) => setSpecializationFilter(value)}
            >
              {Object.keys(specializations).map((specialization) => (
                <DropdownItem
                  key={specialization}
                  value={specialization}
                  className="hover:bg-gray-300"
                >
                  {specialization}
                </DropdownItem>
              ))}
            </Dropdown>
          </div>
          {/* <div className='flex items-center justify-end w-full text-gray-500 text-sm'>Results 10</div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-3 py-3 overflow-hidden place-items-center">
          {filteredDoctors.map((doctor) => (
            <Doctor_card
              key={doctor.id}
              name={doctor.name}
              city={doctor.city}
              location={doctor.clinic}
              Specialization={doctor.Specialisation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorRecommed;
