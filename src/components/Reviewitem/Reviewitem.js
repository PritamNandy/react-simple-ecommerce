import React from "react";
import "../Product/Product.css";

const Reviewitem = (props) => {
  const { name, quantity, key } = props.product;
  const review_item = {
    borderBottom: "1px solid grey",
    marginBottom: "5px",
    paddingBottom: "5px",
    marginLeft: "20px",
  };
  return (
    <div style={review_item}>
      <h4 className="product-name">{name}</h4>
      <p>Quantity: {quantity}</p>
      <button className="add-to-cart" onClick={() => props.removeProduct(key)}>
        Remove
      </button>
    </div>
  );
};

export default Reviewitem;
