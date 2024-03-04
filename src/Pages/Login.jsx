import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { useAuth } from "../context/AuthContext";

const initialValues = {
  email: "",
  password: "",
};

export const Login = () => {
  const [error, setError] = useState(null);
  const [LoggedIn, setLoggedIn] = useState(true);
  const { handleLogin } = useAuth();

  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values) => {
        try {
          const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          const data = await response.json();

          if (data.success) {
            // Handle successful login, e.g., redirect to another page or store authentication token
            setLoggedIn(true);
            handleLogin();
            console.log("Login successful");
          } else {
            setError(data.message);
          }
        } catch (error) {
          console.error("Error during login:", error);
          setError("An error occurred during login");
        }
      },
    });

  return (
    <div className="relative flex flex-col lg:items-end items-center justify-center  w-full bg-background dark:bg-gray-900 h-screen ">
      <img
        src="src/assets/artificial-intelligence-doctor-concept-ai-medicine-ai-assisted-diagnostic_706554-13.avif"
        alt=""
        className="absolute w-full h-full lg:flex hidden animate-slidein [--slidein-delay:600ms] "
      />
      <div className="absolute bg-black bg-opacity-50 z-10 w-full h-full "></div>
      <div className="border-2 border-light_text  rounded p-4 shadow-light_text  shadow-md dark:border-dark_text  mt-10 m-4 dark:shadow-lg dark:shadow-dark_text font-nunito text-light_text dark:text-dark_text z-20 mx-10 ">
        <div className="">
          <h1 className="font-bold capitalize text-4xl justify-center items-center flex text-light_text dark:text-dark_text p-7">
            login
          </h1>
          <p className="text-xs px-12 py-2 text-gray-300 font-semibold font-feedback">
            Welcome back to your health hub, where your well-being is our
            priority!
          </p>
        </div>

        <form>
          <div className="flex flex-col justify-center px-8">
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              className="bg-transparent shadow-sm shadow-light_text dark:shadow-dark_text font-medium  px-6 py-3 mb-3"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="text-sm text-red-700">{errors.email}</p>
            ) : null}

            <input
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              className="bg-transparent shadow-sm shadow-light_text dark:shadow-dark_text font-medium  px-6 py-3  mb-5"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="text-sm text-red-700">{errors.password}</p>
            ) : null}
          </div>

          <div className="flex justify-center text-gray-500 ">
            <p>
              New user?
              <Link to="/signup">
                <span className="p-2 capitalize text-light_text dark:text-dark_text font-semibold">
                  sign up
                </span>
              </Link>
            </p>
          </div>
          <div className="flex justify-center p-4">
            <Link>
              <button
                type="submit"
                onClick={handleSubmit}
                className="capitalize bg-button  font-semibold text-white px-8 py-2 rounded"
              >
                login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
