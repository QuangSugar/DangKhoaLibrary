import { updateStart, updateSuccess, updateFailure } from "../slice/cart";

export const addBook = (book, dispatch) => {
  dispatch(updateStart());
  if (book?.quantity < 1) {
    dispatch(
      updateFailure({
        error: "Sách đã hết!",
      })
    );
    return;
  }
  let cart = [];
  let isCart = localStorage.getItem("cart");
  if (isCart) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }

  let objIndex = cart.findIndex((obj) => obj.book._id == book.book._id);
  if (objIndex == -1) {
    cart.push(book);
  } else {
    cart[objIndex].quantity += book.quantity;
  }
  dispatch(
    updateSuccess({
      data: cart,
      success: "Add book to cart success!!!",
    })
  );
  cart = JSON.stringify(cart);
  localStorage.setItem("cart", cart);
};

export const removeCart = (id) => {
  dispatch(updateStart());
  if(!id) return false;
  let
};
