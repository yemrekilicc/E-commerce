import React from "react";
import ShopPopup from "./popup.jsx";
import "./checkout.css";
import { useCart, useCartDispatch } from "../CartContext.js";

function CheckOut({ src, name, price, size, quantity }) {
  const cart = useCart();
  var subTotal = 0;
  const shipping = 20;
  const dispatch = useCartDispatch();
  function changeSubTotal(item) {
    subTotal = subTotal + item.price * item.quantity;
  }

  return (
    <div className="checkout">
      <div className="responsive space-evenly">
        <div className="column shippingInfo gap">
          <h1>Checkout</h1>
          <h2>Shipping Information </h2>
          <div className="row gap">
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
          </div>
          <input placeholder="Address" />
          <input placeholder="Phone Number" />
          <div className="row gap">
            <input placeholder="Country" />
            <input placeholder="City" />
            <input placeholder="Zip Code" />
          </div>
          <input placeholder="Address Description" />
          <h2>Payment Details </h2>
          <input placeholder="Cardholder Name" />
          <input placeholder="Card Number" />
          <div className="row gap">
            <input placeholder="Month" />
            <input placeholder="Year" />
            <input placeholder="CVC" />
          </div>
          <ShopPopup />
        </div>
        <div className="cartInfo column gap">
          <h2>Your cart</h2>
          {cart
            ? cart.map((item) => {
                changeSubTotal(item);
                return (
                  <div className="row product" key={item.id}>
                    <div className="row gap">
                      <img src={item.src} alt={item.name} />
                      <div className="column productInfo">
                        <h2>{item.name}</h2>
                        <p>Size: {item.size}</p>
                        <p>Quantity: {item.quantity}</p>
                        <h2>${item.price}</h2>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        dispatch({
                          type: "deleted",
                          id: item.id,
                        });
                      }}
                      className="removeButton"
                    >
                      Remove
                    </button>
                  </div>
                );
              })
            : null}

          <div className="row space-between">
            <p>Subtotal</p>
            <p>${subTotal}</p>
          </div>
          <div className="row space-between">
            <p>Shipping</p>
            <p>${shipping}</p>
          </div>
          <div className="divider"></div>
          <div className="row space-between">
            <p>Total</p>
            <p>${subTotal + shipping}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
