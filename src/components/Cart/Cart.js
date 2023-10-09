import CartDisplay from "../Checkout/CartDisplay";
import "./Cart.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
class Cart extends Component {
    state = {
        cart: [],
        subTotal:0,
        shipping:20,
      }; 
  render() {
    return (
      <div className="cart">
        <div className="responsive space-evenly ">
          <div className="column gap yourCart">
            <h1>Your Cart</h1>
            <CartDisplay></CartDisplay>
          </div>
          <div className="orderSum column gap">
            <h2>Order Summary</h2>
            <input placeholder="Enter coupon code here" />
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
            <Link to={'/checkout'}> <button className="continueButton">Continue to checkout</button></Link>
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
export default connect(mapStateToProps)(Cart);