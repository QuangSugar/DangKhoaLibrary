import React, { useEffect } from "react";
import BookRelated from "./BookRelated";
import { useParams } from "react-router-dom";
import useQuery from "../../../hooks/useQuery";
import { useDispatch } from "react-redux";
import { addBook } from "../../../store/action/cart";
import { useFormik } from "formik";
import * as Yup from "yup";

const index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const { data } = useQuery(`/book/get-book/${id}`);
  const formik = useFormik({
    initialValues: {
      quantity: 0,
    },
    validationSchema: Yup.object({
      quantity: Yup.number().required("Required").min(0).max(data?.quantity),
    }),
    onSubmit: (values) => {
      addBook(
        {
          book: data,
          quantity: values.quantity,
        },
        dispatch
      );
    },
  });

  return (
    <main className="inner-page-sec-padding-bottom">
      <div className="container">
        <div className="row  mb--60">
          <div className="col-lg-5 mb--30">
            {/* Product Details Slider Big Image*/}
            <div className="single-slide">
              <img src={data?.image} alt />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="product-details-info pl-lg--30 ">
              <h3 className="product-title">{data?.name}</h3>
              <ul className="list-unstyled">
                <li>
                  Category:{" "}
                  <a href="#" className="list-value font-weight-bold">
                    {data?.category?.name}
                  </a>
                </li>
                <li>
                  Book code: <span className="list-value"> {data?.idBook}</span>
                </li>
                <li>
                  Author:{" "}
                  <a href="#" className="list-value font-weight-bold">
                    {data?.author?.name}
                  </a>
                </li>
                <li>
                  Company:{" "}
                  <a href="#" className="list-value font-weight-bold">
                    {data?.company?.name}
                  </a>
                </li>
                <li>
                  Public year:{" "}
                  <span className="list-value"> {data?.publicYear}</span>
                </li>
                <li>
                  Availability:{" "}
                  <span className="list-value">
                    {data && data.quantity === 0 ? "In Stock" : data?.quantity}{" "}
                  </span>
                </li>
              </ul>
              <div className="price-block">
                <span className="price-new">{data?.price} VNĐ</span>
              </div>
              <div className="add-to-cart-row">
                {data?.quantity > 0 ? (
                  <>
                    <div className="count-input-block">
                      <span className="widget-label">Qty</span>
                      <input
                        type="number"
                        className="form-control text-center"
                        value={formik.values.quantity}
                        onChange={formik.handleChange}
                        name="quantity"
                        id="quantity"
                      />
                      <br />
                      {formik.errors && formik.errors.quantity && (
                        <p class="text-danger">{formik.errors.quantity}</p>
                      )}
                    </div>
                  </>
                ) : (
                  <h3>In Stock</h3>
                )}
                <div className="add-cart-btn">
                  <button
                    onClick={formik.handleSubmit}
                    type="button"
                    className="btn btn-outlined--primary"
                  >
                    <span className="plus-icon">+</span>Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=================================
    RELATED PRODUCTS BOOKS
===================================== */}
      {/* <BookRelated /> */}
    </main>
  );
};

export default index;
