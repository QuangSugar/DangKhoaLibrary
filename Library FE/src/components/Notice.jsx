import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Notice = () => {
  const { pending, error, success } = useSelector((state) => state.user);
  const { pendingCart, errorCart, successCart } = useSelector((state) => state.cart);
  useEffect(() => {
    if (error) toast.error(error);
    if (success) toast.success(success);
  }, [pending]);
  useEffect(() => {
    if (errorCart) toast.error(errorCart);
    if (successCart) toast.success(successCart);
  }, [pendingCart]);
  return <></>;
};

export default Notice;
