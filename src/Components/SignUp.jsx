/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Signup() {
  const navigate = useNavigate();

  // Initial values
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    username: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol")
  });

  // On form submission
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      console.log(values);

      alert("Sign Up Successful");

      // Navigate to the login page on successful signup
      navigate("/login");
    } catch (error) {
      alert("Sign Up Failed!");
      console.log(error);
    }
    setSubmitting(false);
  };

  return (
    <div className="mainContainer flex justify-center items-center w-screen h-screen bg-[#3281FD]">
      <div className="signupContainer flex flex-col items-center w-96 h-auto bg-white rounded-lg">
        <div className="flex justify-center items-center">
          <img className="h-24 w-72" src={logo} alt="Logo" />
        </div>
        <div className="font-bold text-2xl mt-1">Create a New Account</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <div>
                <Field
                  name="username"
                  type="text"
                  placeholder="Name..."
                  className="w-80 h-10 rounded-lg border-2 border-gray-300 p-3 mt-4"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email..."
                  className="w-80 h-10 rounded-lg border-2 border-gray-300 p-3 mt-4"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Password..."
                  className="w-80 h-10 rounded-lg border-2 border-gray-300 p-3 mt-4"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex justify-center items-center w-80 text-white font-medium h-10 bg-blue-500 hover:bg-blue-900 rounded-lg mt-7">
                <button type="submit" className="w-full h-full" disabled={isSubmitting}>
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="flex justify-center items-center w-80 my-4">
          <div className="text-sm cursor-pointer font-medium text-black">
            Already have an account?{" "}
            <Link to="/login" className="text-black hover:text-red-500">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
