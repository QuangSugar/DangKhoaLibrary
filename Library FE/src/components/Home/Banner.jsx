import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    dots: true,
  };
  return (
    <>
      <section className="hero-area hero-slider-3">
        <Slider {...settings}>
          <div
            className="single-slide bg-image  bg-overlay--dark"
            data-bg="https://htmldemo.net/pustok/pustok/image/bg-images/home-3-slider-1.jpg"
          >
            <div className="container">
              <div className="home-content text-center">
                <div className="row justify-content-end">
                  <div className="col-lg-6">
                    <h1>Beautifully Designed</h1>
                    <h2>
                      Cover up front of book and
                      <br />
                      leave summary
                    </h2>
                    <Link to="/" className="btn btn--yellow">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="single-slide bg-image  bg-overlay--dark"
            data-bg="https://htmldemo.net/pustok/pustok/image/bg-images/home-3-slider-2.jpg"
          >
            <div className="container">
              <div className="home-content pl--30">
                <div className="row">
                  <div className="col-lg-6">
                    <h1>I Love This Idea!</h1>
                    <h2>
                      Cover up front of book and
                      <br />
                      leave summary
                    </h2>
                    <Link to="/" className="btn btn--yellow">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Banner;
