import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, removeCart } from "../../../store/action/cart";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import orderApi from "../../../api/orderApi";


const index = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const formik = useFormik({
    initialValues: {
      quantity: 0,
      endDate: ''
    },
    validationSchema: Yup.object({
      quantity: Yup.number().required("Required").min(0),
      endDate: Yup.string().required("Required"),
    }),
    onSubmit: async(values) => {
      try {
        if(!cart.length > 0) return;
        let res = await orderApi.signBorrow({
          book:cart,
          startDate: new Date().toLocaleDateString
        })
      } catch (e) {
        console.log(e.response.data.msg)
      }
    },
  });

  return (
    <>
      <main className="cart-page-main-block inner-page-sec-padding-bottom">
        <div className="cart_area cart-area-padding  ">
          <div className="container">
            <div className="page-section-title">
              <h1>Booking Cart</h1>
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
                          <th className="pro-subtotal">Id Book</th>
                          <th className="pro-title">Product</th>
                          <th className="pro-price">Author</th>
                          <th className="pro-quantity">Quantity</th>
                          <th className="pro-quantity">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Product Row */}
                        {cart &&
                          cart.length > 0 &&
                          cart.map((item, index) => {
                            return (
                              <>
                                <tr>
                                  <td className="pro-remove">
                                    <button
                                      type="button"
                                      onClick={() => {
                                        removeCart(item.book._id, dispatch);
                                      }}
                                    >
                                      <i className="far fa-trash-alt" />
                                    </button>
                                  </td>
                                  <td className="pro-thumbnail">
                                    <Link
                                      to={`/book-detail/${item?.book?._id}`}
                                    >
                                      <img
                                        src={item?.book?.image}
                                        alt="Product"
                                      />
                                    </Link>
                                  </td>
                                  <td className="pro-subtotal">
                                    <span>{item?.book?.idBook}</span>
                                  </td>
                                  <td className="pro-title">
                                    <Link
                                      to={`/book-detail/${item?.book?._id}`}
                                    >
                                      {item?.book?.name}
                                    </Link>
                                  </td>
                                  <td className="pro-price">
                                    <span>{item?.book?.author?.name}</span>
                                  </td>
                                  <td className="pro-quantity">
                                    <div className="pro-qty">
                                      <div className="count-input-block">
                                        <input
                                          type="number"
                                          className="form-control text-center"
                                          defaultValue={item?.quantity}
                                          name="quantity"
                                          id="quantity"
                                          onChange={formik.handleChange}
                                        />
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        addBook(
                                          {
                                            book: item.book,
                                            quantity:
                                              formik.values.quantity -
                                              item.quantity,
                                          },
                                          dispatch
                                        );
                                      }}
                                      className="update-btn c-btn btn-outlined"
                                    >
                                      Update Cart
                                    </button>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
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
              <div className="col-lg-6 col-12 mb--30 mb-lg--0"></div>
              {/* Cart Summary */}
              <div className="col-lg-6 col-12 d-flex">
                <div className="cart-summary">
                  <div className="cart-summary-button d-flex justify-content-end">
                    <label for="endDate">Date give book: </label>
                    <input
                      type="date"
                      name="endDate"
                      class="input-text mr-5"
                      id="endDate"
                      value={formik.values.endDate}
                      onChange={formik.handleChange}
                    />

                    <a
                      href="checkout.html"
                      className="checkout-btn c-btn btn--primary"
                    >
                      Book
                    </a>
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
