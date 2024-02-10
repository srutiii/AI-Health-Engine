import React from "react";
import { Link } from "react-router-dom";
import {useFormik} from 'formik'
import { loginSchema } from "../schemas";

const initialValues = {
  email: "",
  password: "",
};

export const Login = () => {
 
  const {values, errors, touched, handleSubmit, handleBlur, handleChange} = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, action) => {
      console.log(values);
      // console.log(errors);
      action.resetForm();
    },
  });

  return (
    <div className="relative h-screen flex flex-col items-center justify-center p-5 w-full bg-white dark:bg-gray-950">
      <div className="border-2 border-t-teal-300 border-r-blue-950 border-b-blue-950  border-l-teal-400 rounded p-4  shadow-blue-300 shadow-2xl mt-10 dark:shadow-lg dark:shadow-blue-950 font-nunito">
        <div className="">
          <h1 className="font-bold capitalize text-4xl justify-center items-center flex text-blue-400 p-7">
            login
          </h1>
          <p className="text-xs px-12 py-2 text-blue-400 font-semibold font-feedback">
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
              className="bg-blue-100 px-6 py-3 rounded-md mb-3"
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
              className="bg-blue-100 px-6 py-3 rounded-md  mb-5"
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
                <span className="p-2 capitalize text-blue-500 font-semibold">
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
                className="capitalize bg-cyan-700 hover:bg-blue-300 hover:text-blue-600 font-semibold text-white px-8 py-2 rounded"
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
