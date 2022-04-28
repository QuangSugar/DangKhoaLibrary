import React from 'react'
import ReactDOM from 'react-dom'
import './sass/index.scss'
import { Provider} from "react-redux";
import store from "./store";
import LayoutClient from './layout/LayoutClient';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <Provider store={store}>
    <LayoutClient />
    <ToastContainer
      position="bottom-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </Provider>,
  document.getElementById("root")
);
