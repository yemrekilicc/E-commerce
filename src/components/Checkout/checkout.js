import React, { Component } from "react";
import { connect } from "react-redux";
import ShopPopup from "./popup.jsx";
import "./checkout.css";
import { useCart, useCartDispatch } from "../CartContext.js";
import CartDisplay from "./CartDisplay.js";

class CheckOut extends Component {
  state = {
    cart: [],
    subTotal:0,
    shipping:20,
  };
  render(){
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
            <CartDisplay></CartDisplay>
            <div className="row space-between">
              <p>Subtotal</p>
              <p>${this.state.subTotal}</p>
            </div>
            <div className="row space-between">
              <p>Shipping</p>
              <p>${this.state.shipping}</p>
            </div>
            <div className="divider"></div>
            <div className="row space-between">
              <p>Total</p>
              <p>${this.state.subTotal + this.state.shipping}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.cart !== this.props.cart) {
      var subTotal=0;
      this.props.cart.forEach(element => {
        subTotal=subTotal+element.price*element.quantity;
      });
      this.setState({subTotal:subTotal});
    }
  }
  componentDidMount(){
    var subTotal=0;
    this.props.cart.forEach(element => {
      subTotal=subTotal+element.price*element.quantity;
    });
    this.setState({subTotal:subTotal});
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart,
  };
}
export default connect(mapStateToProps)(CheckOut);