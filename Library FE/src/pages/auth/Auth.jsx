import React from "react";
import Login from "../../components/Auth/Login";
import Register from "../../components/Auth/Register";
import BreadCumb from "../../components/BreadCumb";

const Auth = () => {
  return (
    <>
      <BreadCumb title="Login" />
      <main className="page-section inner-page-sec-padding-bottom">
        <div className="container">
          <div className="row">
            <Register/>
            <Login/>
          </div>
        </div>
      </main>
    </>
  );
};

export default Auth;
