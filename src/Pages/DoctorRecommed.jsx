import React, { useState } from "react";
// import { Dropdown, DropdownItem } from "flowbite-react";
import Doctor_card from "../components/Doctor_card";

// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

function DoctorRecommed() {
  // const [specializationFilter, setSpecializationFilter] = useState(null);
  // const [locationFilter, setLocationFilter] = useState(null);
  const [Specialisation, setSpecialisation] = React.useState("");
  const [Location, setLocation] = React.useState("");

  const handleChangespe = (event) => {
    setSpecialisation(event.target.value);
  };
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  
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
          <div className="px-6 flex ">
            <div className="px-4">
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
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
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
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-3 py-3 overflow-hidden place-items-center">
          {filteredDoctors.map((doctor) => (
            <Doctor_card
              key={doctor.id}
              name={doctor.name}
              city={doctor.city}
              location={doctor.clinic}
              Specialization={doctor.Specialisation}
            />
          ))}
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default DoctorRecommed;
