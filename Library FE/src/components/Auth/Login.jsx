import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../store/action/user";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const { success, isLogged } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
    }),
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  useEffect(() => {
    if (isLogged) {
      history.push("/");
    }
  }, [isLogged]);

  return (
    <>
      {" "}
      <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
        <form action="./">
          <div className="login-form">
            <h4 className="login-title">Returning Customer</h4>
            <p>
              <span className="font-weight-bold">
                I am a returning customer
              </span>
            </p>
            <div className="row">
              <div className="col-md-12 col-12 mb--15">
                <label htmlFor="email">Enter your email address here...</label>
                <input
                  className="mb-0 form-control"
                  type="email"
                  id="email"
                  placeholder="Enter you email address here..."
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors && formik.errors.email && (
                  <p class="text-danger">{formik.errors.email}</p>
                )}
              </div>
              <div className="col-12 mb--20">
                <label htmlFor="password">Password</label>
                <input
                  className="mb-0 form-control"
                  type="password"
                  id="login-password"
                  placeholder="Enter your password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="col-md-12">
                <Link
                  onClick={formik.handleSubmit}
                  to="#"
                  className="btn btn-outlined"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
