/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function ForgotPassword() {
  // Initial values
  const initialValues = {
    email: "",
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
  });

  // On form submission
  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div className="mainContainer flex justify-center items-center w-screen h-screen bg-[#3281FD]">
      <div className="forgotPasswordContainer flex flex-col items-center w-96 h-auto bg-white rounded-lg p-6">
        <div className="flex justify-center items-center">
          <img className="h-24 w-72" src={logo} alt="Logo" />
        </div>
        <div className="font-bold text-2xl my-1">Reset Your Password</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email..."
                  className="w-80 h-10 rounded-lg border-2 border-gray-300 p-3 my-4"
                />
                <ErrorMessage name="email" component="div" className="text-red-600" />
              </div>
              <div className="flex justify-center items-center w-80 text-white font-medium h-10 bg-blue-500 hover:bg-blue-900 rounded-lg mt-3 cursor-pointer">
                <button type="submit" className="w-full h-full">
                  Send Reset Link
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="flex justify-center items-center w-80 mt-4">
          <div className="text-sm cursor-pointer font-medium text-black">
            Remembered your password?{" "}
            <Link to="/login" className="text-black hover:text-red-500">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
