import React from "react";
import "./Cart.css";
import { faToiletPaper } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce(
    (total, prd) => total + prd.price * prd.quantity,
    0
  );
  let shipping = 12;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total === 0) {
    shipping = 0;
  }

  const tax = (total / 10).toFixed(2);
  console.log(tax);
  return (
    <div className="cart-container">
      <h3>Order Summary</h3>
      <p>Items Added: {cart.length}</p>
      <p>Product Price: ${total.toFixed(2)}</p>
      <p>Shipping Cost: ${shipping}</p>
      <p>Tax + Vat: ${tax}</p>
      <p>Total Price: ${(total + shipping + Number(tax)).toFixed(2)}</p>
      <Link to="/review">
        <button className="review-button">Review Order</button>
      </Link>
    </div>
  );
};

export default Cart;
