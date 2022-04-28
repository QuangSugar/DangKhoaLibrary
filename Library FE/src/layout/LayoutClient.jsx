import React, { useEffect } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Routes from "../routes/Routes";
import Notice from "../components/Notice";

import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../store/slice/user";
import { getInfor } from "../store/action/user";
import { getCart } from "../store/slice/cart";

const LayoutClient = () => {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state.user);
  const token = localStorage.getItem("access_token");
  useEffect(() => {
    if(token){
      dispatch(checkLogin());
      dispatch(getInfor())
      dispatch(getCart())
    }
  }, [token,dispatch])
  


  return (
    <BrowserRouter>
      <Notice />
      <Route
        render={() => (
          <>
            <div className="site-wrapper">
              <Header />
              <Routes />
            </div>
            <Footer />
          </>
        )}
      />
    </BrowserRouter>
  );
};

export default LayoutClient;
