import React from "react";

import { Route, Switch } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import BookDetail from "../pages/client/BookDetail";
import Cart from "../pages/client/Cart";
import Home from "../pages/client/Home";
import MyAccount from '../pages/client/MyAccount'

const Routes = () => {
  return (
    <Switch>
      {/* -----------------Home--------------------- */}
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Auth} />
      <Route path="/my-account" exact component={MyAccount} />
      <Route path="/book-detail/:id" exact component={BookDetail} />
      <Route path="/cart" exact component={Cart} />
     
    </Switch>
  );
};

export default Routes;
