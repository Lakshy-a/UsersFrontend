/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  // Initial values
  const initialValues = {
    email: "",
    password: "",
    role: "user", // Default role
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    role: Yup.string().required("Required"),
  });

  // On form submission
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email: values.email,
        password: values.password,
        role: values.role,
      });
      alert("Logged In");
      console.log(response);
      console.log(values);

      // Store access token in local storage
      localStorage.setItem("accessToken", response.data.token);

      if (response.status === 200) {
        // On successful login, navigate to the home page
        navigate("/home");
      }
    } catch (error) {
      alert("Logged Fialed!");
      console.log(error);
    }
    setSubmitting(false);
  };

  return (
    <div className="mainContainer flex justify-center items-center w-screen h-screen bg-[#3281FD]">
      <div className="loginContainer flex flex-col items-center w-96 h-auto bg-white rounded-lg pb-3">
        <div className="flex justify-center items-center">
          <img className="h-24 w-72" src={logo} alt="Logo" />
        </div>
        <div className="font-bold text-2xl my-1">Log In to Your Account</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email..."
                  className="w-80 h-10 rounded-lg border-2 border-gray-300 p-3 my-4"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password..."
                  className="w-80 h-10 rounded-lg border-2 border-gray-300 p-3"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div>
                <Field
                  as="select"
                  name="role"
                  className="w-80 h-10 rounded-lg border-2 border-gray-300 pl-2 my-4"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Field>
                <ErrorMessage
                  name="role"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex justify-end w-80">
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#3281FD] hover:text-red-400 cursor-pointer"
                >
                  Forgot Password
                </Link>
              </div>
              <div className="flex justify-center items-center w-80 text-white font-medium h-10 bg-blue-500 hover:bg-blue-900 rounded-lg mt-4">
                <button
                  type="submit"
                  className="w-full h-full"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="flex justify-center items-center w-80 mt-2 ">
          <div className="text-sm cursor-pointer font-medium text-black">
            Don't have an account?{" "}
            <Link to="/signup" className="text-black hover:text-red-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
