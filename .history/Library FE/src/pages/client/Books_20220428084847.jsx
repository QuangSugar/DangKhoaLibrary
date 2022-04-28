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
                  data && data.length > 0 && data.map((item,index)=>{
                      return (
                        <>
                          <div key={index} className="col-lg-3 col-sm-6">
                            <div key={index} className="single-slide">
                              <div className="product-card">
                                <div className="product-header">
                                  <a href className="author">
                                    {item.author.name}
                                  </a>
                                  <h3>
                                    <a href="product-details.html">
                                      {item.name}
                                    </a>
                                  </h3>
                                </div>
                                <div className="product-card--body">
                                  <div className="card-image">
                                    <img src={item.image} alt />
                                    <div className="hover-contents">
                                      <div className="hover-btns">
                                        <button
                                          onClick={() => handleAddBook(item)}
                                          type="button"
                                          className="single-btn"
                                        >
                                          <i className="fas fa-shopping-basket" />
                                        </button>
                                        <Link
                                          to={`/book-detail/${item._id}`}
                                          className="single-btn"
                                        >
                                          <i className="fas fa-eye" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                  })
              }

          </div>
        </div>
      </main>
    </>
  );
}

export default Books