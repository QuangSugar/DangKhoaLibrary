import React from "react";

const index = () => {
  return (
    <>
      <main className="cart-page-main-block inner-page-sec-padding-bottom">
        <div className="cart_area cart-area-padding  ">
          <div className="container">
            <div className="page-section-title">
              <h1>Shopping Cart</h1>
            </div>
            <div className="row">
              <div className="col-12">
                <form action="#" className>
                  {/* Cart Table */}
                  <div className="cart-table table-responsive mb--40">
                    <table className="table">
                      {/* Head Row */}
                      <thead>
                        <tr>
                          <th className="pro-remove" />
                          <th className="pro-thumbnail">Image</th>
                          <th className="pro-title">Product</th>
                          <th className="pro-price">Price</th>
                          <th className="pro-quantity">Quantity</th>
                          <th className="pro-subtotal">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Product Row */}
                        <tr>
                          <td className="pro-remove">
                            <a href="#">
                              <i className="far fa-trash-alt" />
                            </a>
                          </td>
                          <td className="pro-thumbnail">
                            <a href="#">
                              <img
                                src="image/products/product-1.jpg"
                                alt="Product"
                              />
                            </a>
                          </td>
                          <td className="pro-title">
                            <a href="#">Rinosin Glasses</a>
                          </td>
                          <td className="pro-price">
                            <span>$395.00</span>
                          </td>
                          <td className="pro-quantity">
                            <div className="pro-qty">
                              <div className="count-input-block">
                                <input
                                  type="number"
                                  className="form-control text-center"
                                  defaultValue={1}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="pro-subtotal">
                            <span>$395.00</span>
                          </td>
                        </tr>
                        {/* Product Row */}
                        <tr>
                          <td className="pro-remove">
                            <a href="#">
                              <i className="far fa-trash-alt" />
                            </a>
                          </td>
                          <td className="pro-thumbnail">
                            <a href="#">
                              <img
                                src="image/products/product-2.jpg"
                                alt="Product"
                              />
                            </a>
                          </td>
                          <td className="pro-title">
                            <a href="#">Rinosin Glasses</a>
                          </td>
                          <td className="pro-price">
                            <span>$395.00</span>
                          </td>
                          <td className="pro-quantity">
                            <div className="pro-qty">
                              <div className="count-input-block">
                                <input
                                  type="number"
                                  className="form-control text-center"
                                  defaultValue={1}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="pro-subtotal">
                            <span>$395.00</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-section-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mb--30 mb-lg--0">
                {/* slide Block 5 / Normal Slider */}
                <div className="cart-block-title">
                  <h2>YOU MAY BE INTERESTED IN…</h2>
                </div>
                <div
                  className="product-slider sb-slick-slider"
                  data-slick-setting='{
							          "autoplay": true,
							          "autoplaySpeed": 8000,
							          "slidesToShow": 2
									  }'
                  data-slick-responsive='[
          {"breakpoint":992, "settings": {"slidesToShow": 2} },
          {"breakpoint":768, "settings": {"slidesToShow": 3} },
          {"breakpoint":575, "settings": {"slidesToShow": 2} },
          {"breakpoint":480, "settings": {"slidesToShow": 1} },
          {"breakpoint":320, "settings": {"slidesToShow": 1} }
      ]'
                >
                  <div className="single-slide">
                    <div className="product-card">
                      <div className="product-header">
                        <span className="author">Lpple</span>
                        <h3>
                          <a href="product-details.html">
                            Revolutionize Your BOOK With These Easy-peasy Tips
                          </a>
                        </h3>
                      </div>
                      <div className="product-card--body">
                        <div className="card-image">
                          <img src="image/products/product-10.jpg" alt />
                          <div className="hover-contents">
                            <a
                              href="product-details.html"
                              className="hover-image"
                            >
                              <img src="image/products/product-1.jpg" alt />
                            </a>
                            <div className="hover-btns">
                              <a href="cart.html" className="single-btn">
                                <i className="fas fa-shopping-basket" />
                              </a>
                              <a href="wishlist.html" className="single-btn">
                                <i className="fas fa-heart" />
                              </a>
                              <a href="compare.html" className="single-btn">
                                <i className="fas fa-random" />
                              </a>
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickModal"
                                className="single-btn"
                              >
                                <i className="fas fa-eye" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="price-block">
                          <span className="price">£51.20</span>
                          <del className="price-old">£51.20</del>
                          <span className="price-discount">20%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-slide">
                    <div className="product-card">
                      <div className="product-header">
                        <span className="author">Jpple</span>
                        <h3>
                          <a href="product-details.html">
                            Turn Your BOOK Into High Machine
                          </a>
                        </h3>
                      </div>
                      <div className="product-card--body">
                        <div className="card-image">
                          <img src="image/products/product-2.jpg" alt />
                          <div className="hover-contents">
                            <a
                              href="product-details.html"
                              className="hover-image"
                            >
                              <img src="image/products/product-1.jpg" alt />
                            </a>
                            <div className="hover-btns">
                              <a href="cart.html" className="single-btn">
                                <i className="fas fa-shopping-basket" />
                              </a>
                              <a href="wishlist.html" className="single-btn">
                                <i className="fas fa-heart" />
                              </a>
                              <a href="compare.html" className="single-btn">
                                <i className="fas fa-random" />
                              </a>
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickModal"
                                className="single-btn"
                              >
                                <i className="fas fa-eye" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="price-block">
                          <span className="price">£51.20</span>
                          <del className="price-old">£51.20</del>
                          <span className="price-discount">20%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-slide">
                    <div className="product-card">
                      <div className="product-header">
                        <span className="author">Wpple</span>
                        <h3>
                          <a href="product-details.html">
                            3 Ways Create Better BOOK With
                          </a>
                        </h3>
                      </div>
                      <div className="product-card--body">
                        <div className="card-image">
                          <img src="image/products/product-3.jpg" alt />
                          <div className="hover-contents">
                            <a
                              href="product-details.html"
                              className="hover-image"
                            >
                              <img src="image/products/product-2.jpg" alt />
                            </a>
                            <div className="hover-btns">
                              <a href="cart.html" className="single-btn">
                                <i className="fas fa-shopping-basket" />
                              </a>
                              <a href="wishlist.html" className="single-btn">
                                <i className="fas fa-heart" />
                              </a>
                              <a href="compare.html" className="single-btn">
                                <i className="fas fa-random" />
                              </a>
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickModal"
                                className="single-btn"
                              >
                                <i className="fas fa-eye" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="price-block">
                          <span className="price">£51.20</span>
                          <del className="price-old">£51.20</del>
                          <span className="price-discount">20%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-slide">
                    <div className="product-card">
                      <div className="product-header">
                        <span className="author">Epple</span>
                        <h3>
                          <a href="product-details.html">
                            What You Can Learn From Bill Gates
                          </a>
                        </h3>
                      </div>
                      <div className="product-card--body">
                        <div className="card-image">
                          <img src="image/products/product-5.jpg" alt />
                          <div className="hover-contents">
                            <a
                              href="product-details.html"
                              className="hover-image"
                            >
                              <img src="image/products/product-4.jpg" alt />
                            </a>
                            <div className="hover-btns">
                              <a href="cart.html" className="single-btn">
                                <i className="fas fa-shopping-basket" />
                              </a>
                              <a href="wishlist.html" className="single-btn">
                                <i className="fas fa-heart" />
                              </a>
                              <a href="compare.html" className="single-btn">
                                <i className="fas fa-random" />
                              </a>
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickModal"
                                className="single-btn"
                              >
                                <i className="fas fa-eye" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="price-block">
                          <span className="price">£51.20</span>
                          <del className="price-old">£51.20</del>
                          <span className="price-discount">20%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-slide">
                    <div className="product-card">
                      <div className="product-header">
                        <span className="author">Hpple</span>
                        <h3>
                          <a href="product-details.html">
                            Simple Things You To Save BOOK
                          </a>
                        </h3>
                      </div>
                      <div className="product-card--body">
                        <div className="card-image">
                          <img src="image/products/product-6.jpg" alt />
                          <div className="hover-contents">
                            <a
                              href="product-details.html"
                              className="hover-image"
                            >
                              <img src="image/products/product-4.jpg" alt />
                            </a>
                            <div className="hover-btns">
                              <a href="cart.html" className="single-btn">
                                <i className="fas fa-shopping-basket" />
                              </a>
                              <a href="wishlist.html" className="single-btn">
                                <i className="fas fa-heart" />
                              </a>
                              <a href="compare.html" className="single-btn">
                                <i className="fas fa-random" />
                              </a>
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickModal"
                                className="single-btn"
                              >
                                <i className="fas fa-eye" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="price-block">
                          <span className="price">£51.20</span>
                          <del className="price-old">£51.20</del>
                          <span className="price-discount">20%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Cart Summary */}
              <div className="col-lg-6 col-12 d-flex">
                <div className="cart-summary">
                  <div className="cart-summary-wrap">
                    <h4>
                      <span>Cart Summary</span>
                    </h4>
                    <p>
                      Sub Total <span className="text-primary">$1250.00</span>
                    </p>
                    <p>
                      Shipping Cost <span className="text-primary">$00.00</span>
                    </p>
                    <h2>
                      Grand Total <span className="text-primary">$1250.00</span>
                    </h2>
                  </div>
                  <div className="cart-summary-button">
                    <a
                      href="checkout.html"
                      className="checkout-btn c-btn btn--primary"
                    >
                      Checkout
                    </a>
                    <button className="update-btn c-btn btn-outlined">
                      Update Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default index;
