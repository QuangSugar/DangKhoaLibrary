import React from 'react'
import BreadCumb from '../../components/BreadCumb'
import useQuery from '../../hooks/useQuery'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBook } from '../../store/action/cart';

const Books = () => {
    const dispatch = useDispatch();
    const { data } = useQuery("/book/get-all-book");
    const handleAddBook = (book) => {
      let quantity = book.quantity > 0 ? 1 : 0;
      addBook(
        {
          book,
          quantity,
        },
        dispatch
      );
    };
  return (
    <>
      <BreadCumb title="Shop" />
      <main className="inner-page-sec-padding-bottom">
        <div className="container">
          <div className="shop-product-wrap grid with-pagination space-db--30 shop-border  row d-flex ">
              {
                  data 
              }
            <div className="col-lg-4 col-sm-6">
              <div className="product-card">
                <div className="product-grid-content">
                  <div className="product-header">
                    <a href className="author">
                      Epple
                    </a>
                    <h3>
                      <a href="product-details.html">
                        Here Is A Quick Cure For Book
                      </a>
                    </h3>
                  </div>
                  <div className="product-card--body">
                    <div className="card-image">
                      <img src="image/products/product-2.jpg" alt />
                      <div className="hover-contents">
                        <a href="product-details.html" className="hover-image">
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
                <div className="product-list-content">
                  <div className="card-image">
                    <img src="image/products/product-3.jpg" alt />
                  </div>
                  <div className="product-card--body">
                    <div className="product-header">
                      <a href className="author">
                        Gpple
                      </a>
                      <h3>
                        <a href="product-details.html" tabIndex={0}>
                          Qpple cPad with Retina Display MD510LL/A
                        </a>
                      </h3>
                    </div>
                    <article>
                      <h2 className="sr-only">Card List Article</h2>
                      <p>
                        More room to move. With 80GB or 160GB of storage and up
                        to 40 hours of battery life, the new iPod classic lets
                        you enjoy up to 40,000 songs or..
                      </p>
                    </article>
                    <div className="price-block">
                      <span className="price">£51.20</span>
                      <del className="price-old">£51.20</del>
                      <span className="price-discount">20%</span>
                    </div>
                    <div className="rating-block">
                      <span className="fas fa-star star_on" />
                      <span className="fas fa-star star_on" />
                      <span className="fas fa-star star_on" />
                      <span className="fas fa-star star_on" />
                      <span className="fas fa-star " />
                    </div>
                    <div className="btn-block">
                      <a href className="btn btn-outlined">
                        Add To Cart
                      </a>
                      <a href className="card-link">
                        <i className="fas fa-heart" /> Add To Wishlist
                      </a>
                      <a href className="card-link">
                        <i className="fas fa-random" /> Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Books