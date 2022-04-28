import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../api/axiosClient";
import { removeCart } from "../store/action/cart";

const Header = () => {
  const { isLogged, userInfo } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const userLink = () => {
    return (
      <>
        <li className="dropdown-trigger language-dropdown">
          <a href>
            <i className="icons-left fas fa-user" />
            {userInfo?.name}
          </a>
          <i className="fas fa-chevron-down dropdown-arrow" />
          <ul className="dropdown-box">
            <li>
              <Link to={"/my-account"}>My Account</Link>
            </li>
            <li>
              <a href>Order History</a>
            </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </ul>
        </li>
      </>
    );
  };
  const handleLogout = async () => {
    try {
      await axiosClient.get("/auth/logout");
      localStorage.removeItem("firstLogin");
      localStorage.removeItem("access_token");
      localStorage.removeItem("cart");
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  };
  return (
    <>
      <div className="site-header header-3  d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-8 flex-lg-right">
              <ul className="header-top-list">
                {isLogged && userLink()}
                <li>
                  <a href>
                    <i className="icons-left fas fa-phone" /> Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-middle pt--10 pb--10">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <Link to="/" className="site-brand">
                  <img src="./src/assets/image/logo.png" alt />
                </Link>
              </div>
              <div className="col-lg-5">
                <div className="header-search-block">
                  <input type="text" placeholder="Search entire store here" />
                  <button>Search</button>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="main-navigation flex-lg-right">
                  <div className="cart-widget">
                    {!isLogged && (
                      <>
                        <div className="login-block">
                          <Link to="/login" className="font-weight-bold">
                            Login
                          </Link>{" "}
                          <br />
                          <span>or</span>
                          <Link to="/login">Register</Link>
                        </div>
                      </>
                    )}
                    <div className="cart-block">
                      <div className="cart-total">
                        <span className="text-number">
                          {cart && cart.length}
                        </span>
                        <span className="text-item">Shopping Cart</span>
                        <span className="price">
                          <i className="fas fa-chevron-down" />
                        </span>
                      </div>
                      <div className="cart-dropdown-block">
                        <div className=" single-cart-block ">
                          {cart &&
                            cart.length > 0 &&
                            cart.map((item, index) => {
                              return (
                                <>
                                  <div key={index} className="cart-product">
                                    <Link
                                      to={`/book-detail/${item?.book?._id}`}
                                      className="image"
                                    >
                                      <img
                                        width={"70px"}
                                        src={item?.book?.image}
                                        alt
                                      />
                                    </Link>
                                    <div className="content">
                                      <h3 className="title">
                                        <Link
                                          to={`/book-detail/${item?.book?._id}`}
                                        >
                                          {item?.book?.name}
                                        </Link>
                                      </h3>
                                      <p className="price">
                                        <span className="qty">
                                          × {item?.quantity}
                                        </span>
                                      </p>
                                      <button
                                        onClick={()=>{
                                          removeCart(item.book._id, dispatch);
                                        }}
                                        className="cross-btn"
                                      >
                                        <i className="fas fa-times" />
                                      </button>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                        </div>
                        <div className=" single-cart-block ">
                          <div className="btn-block">
                            <Link to="/cart" className="btn">
                              View Cart <i className="fas fa-chevron-right" />
                            </Link>
                            <a
                              href="checkout.html"
                              className="btn btn--primary"
                            >
                              Check Out <i className="fas fa-chevron-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* @include('menu.htm') */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <nav className="category-nav   ">
                  <div>
                    <a href="javascript:void(0)" className="category-trigger">
                      <i className="fa fa-bars" />
                      Browse categories
                    </a>
                    <ul className="category-menu">
                      <li className="cat-item has-children">
                        <a href="#">Arts &amp; Photography</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">Bags &amp; Cases</a>
                          </li>
                          <li>
                            <a href="#">Binoculars &amp; Scopes</a>
                          </li>
                          <li>
                            <a href="#">Digital Cameras</a>
                          </li>
                          <li>
                            <a href="#">Film Photography</a>
                          </li>
                          <li>
                            <a href="#">Lighting &amp; Studio</a>
                          </li>
                        </ul>
                      </li>
                      <li className="cat-item has-children mega-menu">
                        <a href="#">Biographies</a>
                        <ul className="sub-menu">
                          <li className="single-block">
                            <h3 className="title">WHEEL SIMULATORS</h3>
                            <ul>
                              <li>
                                <a href="#">Bags &amp; Cases</a>
                              </li>
                              <li>
                                <a href="#">Binoculars &amp; Scopes</a>
                              </li>
                              <li>
                                <a href="#">Digital Cameras</a>
                              </li>
                              <li>
                                <a href="#">Film Photography</a>
                              </li>
                              <li>
                                <a href="#">Lighting &amp; Studio</a>
                              </li>
                            </ul>
                          </li>
                          <li className="single-block">
                            <h3 className="title">WHEEL SIMULATORS</h3>
                            <ul>
                              <li>
                                <a href="#">Bags &amp; Cases</a>
                              </li>
                              <li>
                                <a href="#">Binoculars &amp; Scopes</a>
                              </li>
                              <li>
                                <a href="#">Digital Cameras</a>
                              </li>
                              <li>
                                <a href="#">Film Photography</a>
                              </li>
                              <li>
                                <a href="#">Lighting &amp; Studio</a>
                              </li>
                            </ul>
                          </li>
                          <li className="single-block">
                            <h3 className="title">WHEEL SIMULATORS</h3>
                            <ul>
                              <li>
                                <a href="#">Bags &amp; Cases</a>
                              </li>
                              <li>
                                <a href="#">Binoculars &amp; Scopes</a>
                              </li>
                              <li>
                                <a href="#">Digital Cameras</a>
                              </li>
                              <li>
                                <a href="#">Film Photography</a>
                              </li>
                              <li>
                                <a href="#">Lighting &amp; Studio</a>
                              </li>
                            </ul>
                          </li>
                          <li className="single-block">
                            <h3 className="title">WHEEL SIMULATORS</h3>
                            <ul>
                              <li>
                                <a href="#">Bags &amp; Cases</a>
                              </li>
                              <li>
                                <a href="#">Binoculars &amp; Scopes</a>
                              </li>
                              <li>
                                <a href="#">Digital Cameras</a>
                              </li>
                              <li>
                                <a href="#">Film Photography</a>
                              </li>
                              <li>
                                <a href="#">Lighting &amp; Studio</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="cat-item has-children">
                        <a href="#">Business &amp; Money</a>
                        <ul className="sub-menu">
                          <li>
                            <a href>Brake Tools</a>
                          </li>
                          <li>
                            <a href>Driveshafts</a>
                          </li>
                          <li>
                            <a href>Emergency Brake</a>
                          </li>
                          <li>
                            <a href>Spools</a>
                          </li>
                        </ul>
                      </li>
                      <li className="cat-item has-children">
                        <a href="#">Calendars</a>
                        <ul className="sub-menu">
                          <li>
                            <a href>Brake Tools</a>
                          </li>
                          <li>
                            <a href>Driveshafts</a>
                          </li>
                          <li>
                            <a href>Emergency Brake</a>
                          </li>
                          <li>
                            <a href>Spools</a>
                          </li>
                        </ul>
                      </li>
                      <li className="cat-item has-children">
                        <a href="#">Children's Books</a>
                        <ul className="sub-menu">
                          <li>
                            <a href>Brake Tools</a>
                          </li>
                          <li>
                            <a href>Driveshafts</a>
                          </li>
                          <li>
                            <a href>Emergency Brake</a>
                          </li>
                          <li>
                            <a href>Spools</a>
                          </li>
                        </ul>
                      </li>
                      <li className="cat-item has-children">
                        <a href="#">Comics</a>
                        <ul className="sub-menu">
                          <li>
                            <a href>Brake Tools</a>
                          </li>
                          <li>
                            <a href>Driveshafts</a>
                          </li>
                          <li>
                            <a href>Emergency Brake</a>
                          </li>
                          <li>
                            <a href>Spools</a>
                          </li>
                        </ul>
                      </li>
                      <li className="cat-item">
                        <a href="#">Perfomance Filters</a>
                      </li>
                      <li className="cat-item has-children">
                        <a href="#">Cookbooks</a>
                        <ul className="sub-menu">
                          <li>
                            <a href>Brake Tools</a>
                          </li>
                          <li>
                            <a href>Driveshafts</a>
                          </li>
                          <li>
                            <a href>Emergency Brake</a>
                          </li>
                          <li>
                            <a href>Spools</a>
                          </li>
                        </ul>
                      </li>
                      <li className="cat-item ">
                        <a href="#">Accessories</a>
                      </li>
                      <li className="cat-item ">
                        <a href="#">Education</a>
                      </li>
                      <li className="cat-item hidden-menu-item">
                        <a href="#">Indoor Living</a>
                      </li>
                      <li className="cat-item">
                        <a href="#" className="js-expand-hidden-menu">
                          More Categories
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-lg-3">
                <div className="header-phone ">
                  <div className="icon">
                    <i className="fas fa-headphones-alt" />
                  </div>
                  <div className="text">
                    <p>Free Support 24/7</p>
                    <p className="font-weight-bold number">+01-202-555-0181</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="main-navigation flex-lg-right">
                  <ul className="main-menu menu-right li-last-0">
                    <li className="menu-item has-children">
                      <Link to="/">Home </Link>
                    </li>
                    {/* Shop */}

                    <li className="menu-item">
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-mobile-menu">
        <header className="mobile-header d-block d-lg-none pt--10 pb-md--10">
          <div className="container">
            <div className="row align-items-sm-end align-items-center">
              <div className="col-md-4 col-7">
                <Link href="/" className="site-brand">
                  <img src="./src/assets/image/logo.png" alt />
                </Link>
              </div>
              <div className="col-md-3 col-5  order-md-3 text-right">
                <div className="mobile-header-btns header-top-widget">
                  <ul className="header-links">
                    <li className="sin-link">
                      <a href="cart.html" className="cart-link link-icon">
                        <i className="ion-bag" />
                      </a>
                    </li>
                    <li className="sin-link">
                      <a
                        href="javascript:"
                        className="link-icon hamburgur-icon off-canvas-btn"
                      >
                        <i className="ion-navicon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="sticky-init fixed-header common-sticky">
        <div className="container d-none d-lg-block">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <Link to="/" className="site-brand">
                <img src="./src/assets/image/logo.png" alt />
              </Link>
            </div>
            <div className="col-lg-8">
              <div className="main-navigation flex-lg-right">
                <ul className="main-menu menu-right ">
                  <li className="menu-item has-children">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
