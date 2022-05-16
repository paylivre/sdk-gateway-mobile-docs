import React from "react";

import checkoutByParamsImage from "../../static/android/checkout-by-params-result.png";

export default function CheckoutByParamsImage(props) {
  return (
    <img
      src={checkoutByParamsImage}
      alt="Checkout by parameters Result Image"
      style={{
        width: 320,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  );
}
