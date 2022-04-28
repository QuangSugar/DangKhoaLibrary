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

          </div>
        </div>
      </main>
    </>
  );
}

export default Books