import React, { useState } from "react";
import Doctor_card from "../components/Doctor_card";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { load } from "cheerio";

function DoctorRecommed() {
  const [Specialisation, setSpecialisation] = useState("");
  const [Location, setLocation] = useState("");
  const [doctorsList, setDoctorsList] = useState([]);

  const handleChangespe = (event) => {
    setSpecialisation(event.target.value);
  };
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl = "https://medicahospitals.in/patients-visitors/find-doctor/";
  const url = proxyUrl + targetUrl;
  const fetchData = async () => {
    try {
      console.log("Searching...");

      const response = await axios.get(url);

      console.log(response);
      console.log("Searching...");

      const html = response.data;
      const $ = load(html);

      const doctorsList = [];

      $(".doctor-card").each((index, element) => {
        const name = $(element).find(".doctor-name").text();
        const specialization = $(element).find(".doctor-specialization").text();
        const location = $(element).find(".doctor-location").text();

        doctorsList.push({ name, specialization, location });
      });

      setDoctorsList(doctorsList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="w-full h-screen mt-20 bg-background dark:bg-gray-900 ">
      <div className="">
        <div className="h-[300px] absolute w-full top-0 opacity-25 bg-black"></div>
        <div className="h-[200px] flex w-full justify-center items-center relative">
          <div className="mt-10 md:w-1/2 w-[90%] flex justify-center items-center ">
            <p className="text-xl font-playfair font-semibold dark:text-dark_text text-light_text flex justify-center items-center">
              Discover your ideal doctor and schedule appointments seamlessly
              with our intuitive recommendation and booking system.
            </p>
          </div>
          <img
            src="src/assets/medical-team (1).png"
            alt=""
            className="md:w-52 w-20 absolute right-10 md:bottom-2 bottom-0 "
          />
        </div>
        <div className="flex px-10 py-3 w-full mt-10">
          <div className="px-6 flex ">
            <div className="px-4 dark:text-gray-400">
              <Box sx={{ minWidth: 180 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Specialisation
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Specialisation}
                    label="Specialisation"
                    onChange={handleChangespe}
                  >
                    <MenuItem value="Oncologist">Oncologist</MenuItem>
                    <MenuItem value="Cardiologist">Cardiologist</MenuItem>
                    <MenuItem value="Neurosurgeon">Neurosurgeon</MenuItem>
                    <MenuItem value="Cardiac Surgeon">Cardiac Surgeon</MenuItem>
                    <MenuItem value="Orthopaedic">Orthopaedic</MenuItem>
                    <MenuItem value="Cosmetic Surgeon">
                      Cosmetic Surgeon
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Location
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Location}
                    label="Location"
                    onChange={handleChangeLocation}
                  >
                    <MenuItem value="Kolkata">Kolkata</MenuItem>
                    <MenuItem value="New Delhi">New Delhi</MenuItem>
                    <MenuItem value="Bangalore">Banglore</MenuItem>
                    <MenuItem value="Kochi">Kochi</MenuItem>
                    <MenuItem value="Kota">Kota</MenuItem>
                    <MenuItem value="Chennai">Chennai</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="flex justify-center items-center px-2">
              <button
                className="flex justify-center items-center bg-button py-4 px-3 rounded "
                onClick={fetchData}
              >
                <span className="pr-2">Search</span>

                <FaSearch className="" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-3 py-3 overflow-hidden place-items-center">
            {doctorsList.map((doctor, index) => (
              <Doctor_card
                key={index}
                name={doctor.name}
                city={doctor.city}
                location={doctor.clinic}
                specialization={doctor.specialization}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorRecommed;
