import React, { Component } from "react";
import { connect } from "react-redux";
class CartDisplay extends Component {
  state = {
    cart: [],
  };
  render() {
    return this.props.cart
      ? this.props.cart.map((item) => {
          return (
            <div className="row product" key={item.id}>
              <div className="row gap">
                <img src={item.image} alt={item.name} />
                <div className="column productInfo">
                  <h2>{item.name}</h2>
                  <p>Size: {item.size}</p>
                  <p>Quantity: {item.quantity}</p>
                  <h2>${item.price}</h2>
                </div>
              </div>
              <button
                onClick={(e) => this.props.actions.delete(item)}
                className="removeButton"
              >
                Remove
              </button>
            </div>
          );
        })
      : null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.cart !== this.props.cart) {
      this.setState({cart:this.props.cart});
    }
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      delete: (item) => {
        dispatch({
          type: "deleted",
          id: item.id,
        });
      },
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartDisplay);
