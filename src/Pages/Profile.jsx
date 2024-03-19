import React, { useState, useRef } from "react";

const Modal = ({ handleClose, handleSubmit, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-gray-900 opacity-50"
        onClick={handleClose}
      ></div>
      <div className="bg-white p-8 rounded-lg z-10">
        {children}
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const UserProfile = () => {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(30);
  const [height, setHeight] = useState("5'10\"");
  const [weight, setWeight] = useState(160);
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [uploadingReport, setUploadingReport] = useState(false);
  const [reports, setReports] = useState([]);
  const inputRef = useRef(null);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isViewingReport, setIsViewingReport] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    setUploadingImage(true);

    // Simulating upload delay
    setTimeout(() => {
      setProfileImage(file);
      setUploadingImage(false);
    }, 1000);
  };

  // Function to handle report upload
  const handleReportUpload = (e) => {
    const file = e.target.files[0];
    setUploadingReport(true);

    // Simulating upload delay
    setTimeout(() => {
      setReports([...reports, file]);
      setUploadingReport(false);
    }, 1000);
  };

  // Function to delete a report
  const handleDeleteReport = (index) => {
    const updatedReports = reports.filter((_, i) => i !== index);
    setReports(updatedReports);
  };

  // Function to view a report
  const handleViewReport = (index) => {
    setSelectedReport(reports[index]);
    setShowModal(true);
  };


  // Function to close the report modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleClickUpload = () => {
    inputRef.current.click();
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  const handleSubmit = () => {
    setIsEditing(false);
    // Handle form submission
  };

  return (
    <div className="mx-auto mt-20 p-8 bg-background dark:bg-gray-900 dark:text-gray-300 rounded-lg shadow-md w-full h-auto">
      <div className="flex w-full justify-center items-center relative">
        <div className="relative">
          <label htmlFor="upload-input" className="cursor-pointer">
            <div className="w-40 h-40 rounded-full overflow-hidden relative">
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile"
                  className="w-full h-full object-cover mx-3"
                  onClick={handleClickUpload}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600">
                  {uploadingImage ? (
                    "Uploading..."
                  ) : (
                    <img src="src/assets/user.png" alt="" />
                  )}
                </div>
              )}
            </div>
            <input
              id="upload-input"
              ref={inputRef}
              type="file"
              onChange={handleProfileImageChange}
              className="hidden"
            />
          </label>
          <p className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white text-center py-1 ">
            {name}
          </p>
        </div>
        {!isEditing && (
          <button
            onClick={handleEdit}
            className="bg-button px-3 py-2 rounded absolute right-10 text-white"
          >
            Edit
          </button>
        )}
      </div>
      <div className="flex justify-between mt-4">
        <div className="w-1/4 bg-gray-200 p-3">
          <h2 className="text-xl font-playfair bg-light_text text-gray-300 font-semibold px-2 mb-2 flex justify-center">
            User Details
          </h2>
          <div>
            <p>
              <strong>Age:</strong> {age}
            </p>
            <p>
              <strong>Height:</strong> {height}
            </p>
            <p>
              <strong>Weight:</strong> {weight}
            </p>
            <p>
              <strong>Address:</strong> {address}
            </p>
            <p>
              <strong>Mobile Number:</strong> {mobileNumber}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
          </div>
        </div>
        <div className="w-3/4 p-3 ">
          <h2 className="text-xl font-playfair bg-light_text text-gray-300 font-semibold px-2 mb-2 flex justify-center">
            Appointments
          </h2>
          <div>{/* Appointments */}</div>
        </div>
        <div className="w-1/4 bg-gray-200 p-4 rounded-lg">
          <h2 className="text-xl font-playfair bg-light_text text-gray-300 font-semibold px-2 mb-2 flex justify-center">
            Reports
          </h2>
          <div>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleReportUpload}
              className="form-input"
            />
          </div>
          {reports.map((report, index) => (
            <div key={index} className="mt-2 flex justify-between items-center">
              <p>{report.name}</p>
              <div className="flex">
                <button
                  className="text-blue-500 mr-2"
                  onClick={() => handleViewReport(index)}
                >
                  View
                </button>
                <button
                  className="text-red-500"
                  onClick={() => handleDeleteReport(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <Modal handleClose={handleCloseModal}>
            <div className="w-96 h-96 overflow-y-auto">
              <embed
                src={URL.createObjectURL(selectedReport)}
                type="application/pdf"
                className="w-full h-full"
              />
            </div>
          </Modal>
        )}
      </div>
      {isEditing && (
        <div className="w-1/2">
          <Modal handleClose={handleClose} handleSubmit={handleSubmit}>
            <form className="space-y-4">
              <div>
                <label className="block">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  className="form-input"
                />
              </div>

              <div>
                <label className="block">Age:</label>
                <input
                  type="number"
                  value={age}
                  onChange={handleAgeChange}
                  className="form-input"
                />
              </div>

              <div>
                <label className="block">Height:</label>
                <input
                  type="text"
                  value={height}
                  onChange={handleHeightChange}
                  className="form-input"
                />
              </div>

              <div>
                <label className="block">Weight:</label>
                <input
                  type="number"
                  value={weight}
                  onChange={handleWeightChange}
                  className="form-input"
                />
              </div>

              <div>
                <label className="block">Address:</label>
                <input
                  type="text"
                  value={address}
                  onChange={handleAddressChange}
                  className="form-input"
                />
              </div>

              <div>
                <label className="block">Mobile Number:</label>
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                  className="form-input"
                />
              </div>

              <div>
                <label className="block">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="form-input"
                />
              </div>
            </form>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
