import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row justify-content-between  section-padding">
            <div className=" col-xl-3 col-lg-4 col-sm-6">
              <div className="single-footer pb--40">
                <div className="brand-footer footer-title">
                  <img src="./src/assets/image/logo--footer.png" alt />
                </div>
                <div className="footer-contact">
                  <p>
                    <span className="label">Address:</span>
                    <span className="text">
                      Example Street 98, HH2 BacHa, New York, USA
                    </span>
                  </p>
                  <p>
                    <span className="label">Phone:</span>
                    <span className="text">+18088 234 5678</span>
                  </p>
                  <p>
                    <span className="label">Email:</span>
                    <span className="text">suport@hastech.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-xl-3 col-lg-2 col-sm-6">
              <div className="single-footer pb--40">
                <div className="footer-title">
                  <h3>Information</h3>
                </div>
                <ul className="footer-list normal-list">
                  <li>
                    <a href>Prices drop</a>
                  </li>
                  <li>
                    <a href>New products</a>
                  </li>
                  <li>
                    <a href>Best sales</a>
                  </li>
                  <li>
                    <a href>Contact us</a>
                  </li>
                  <li>
                    <a href>Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" col-xl-3 col-lg-2 col-sm-6">
              <div className="single-footer pb--40">
                <div className="footer-title">
                  <h3>Extras</h3>
                </div>
                <ul className="footer-list normal-list">
                  <li>
                    <a href>Delivery</a>
                  </li>
                  <li>
                    <a href>About Us</a>
                  </li>
                  <li>
                    <a href>Stores</a>
                  </li>
                  <li>
                    <a href>Contact us</a>
                  </li>
                  <li>
                    <a href>Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" col-xl-3 col-lg-4 col-sm-6">
              <div className="footer-title">
                <h3>Newsletter Subscribe</h3>
              </div>
              <div className="newsletter-form mb--30">
                <form action="./php/mail.php">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email Address Here..."
                  />
                  <button className="btn btn--primary w-100">Subscribe</button>
                </form>
              </div>
              <div className="social-block">
                <h3 className="title">STAY CONNECTED</h3>
                <ul className="social-list list-inline">
                  <li className="single-social facebook">
                    <a href>
                      <i className="ion ion-social-facebook" />
                    </a>
                  </li>
                  <li className="single-social twitter">
                    <a href>
                      <i className="ion ion-social-twitter" />
                    </a>
                  </li>
                  <li className="single-social google">
                    <a href>
                      <i className="ion ion-social-googleplus-outline" />
                    </a>
                  </li>
                  <li className="single-social youtube">
                    <a href>
                      <i className="ion ion-social-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright-heading">
              Suspendisse in auctor augue. Cras fermentum est ac fermentum
              tempor. Etiam vel magna volutpat, posuere eros
            </p>
            <a href="#" className="payment-block">
              <img src="./src/assets/image/icon/payment.png" alt />
            </a>
            <p className="copyright-text">
              Copyright © 2021{" "}
              <a href="#" className="author">
                Pustok
              </a>
              . All Right Reserved.
              <br />
              Design By Pustok
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
