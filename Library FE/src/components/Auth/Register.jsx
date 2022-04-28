import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../store/action/user";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 character or more !!!"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Password must be 7-19 characters and contain at least one letter, one number and a special character"
        ),
    }),
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });



  return (
    <>
      <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb--30 mb-lg--0">
        {/* Login Form s*/}
        <form action="#">
          <div className="login-form">
            <h4 className="login-title">New Customer</h4>
            <p>
              <span className="font-weight-bold">I am a new customer</span>
            </p>
            <div className="row">
              <div className="col-md-12 col-12 mb--15">
                <label htmlFor="email">Full Name</label>
                <input
                  className="mb-0 form-control"
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.errors && formik.errors.name && (
                  <p class="text-danger">{formik.errors.name}</p>
                )}
              </div>
              <div className="col-12 mb--20">
                <label htmlFor="email">Email</label>
                <input
                  className="mb-0 form-control"
                  type="email"
                  id="email"
                  placeholder="Enter Your Email Address Here.."
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors && formik.errors.email && (
                  <p class="text-danger">{formik.errors.email}</p>
                )}
              </div>
              <div className="col-lg-6 mb--20">
                <label htmlFor="password">Password</label>
                <input
                  className="mb-0 form-control"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors && formik.errors.password && (
                  <p class="text-danger">{formik.errors.password}</p>
                )}
              </div>
              <div className="col-md-12">
                <Link
                  onClick={formik.handleSubmit}
                  to="#"
                  className="btn btn-outlined"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
