import React from "react";
import useQuery from "../../hooks/useQuery";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBook } from "../../store/action/cart";
import { getCart } from "../../store/slice/cart";

const BookLatest = () => {
  const dispatch = useDispatch();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { data } = useQuery("/book/get-latest-book");
  const handleAddBook = (book) => {
    let quantity = book.quantity > 0 ? 1 : 0;
    addBook(
      {
        book,
        quantity
      },
      dispatch
    );
    
  };
  return (
    <>
      <section className="pt--30 section-margin">
        <div className="container">
          <div className="section-title section-title--bordered">
            <h2>ARTS &amp; PHOTOGRAPHY BOOKS</h2>
          </div>
          <Slider {...settings}>
            {data &&
              data.length > 0 &&
              data.map((item, index) => {
                return (
                  <>
                    <div key={index} className="single-slide">
                      <div className="product-card">
                        <div className="product-header">
                          <a href className="author">
                            {item.author.name}
                          </a>
                          <h3>
                            <a href="product-details.html">{item.name}</a>
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
                  </>
                );
              })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default BookLatest;
