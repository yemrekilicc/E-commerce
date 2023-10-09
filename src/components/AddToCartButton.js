import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import React, { Component } from "react";
import { useCartDispatch } from "./CartContext";
class AddToCart extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (<>
      <button className="add-button"
        onClick={(e)=>this.props.actions.add(this.props.image,this.props.name,this.props.price,this.props.size,this.props.quantity)}
      >
        Add to Cart
      </button>
    </>)
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      add: (image,name,price,size,quantity)=>
        dispatch({
          type: "added",
          id: nextId++,
          image: image,
          name: name,
          price: price,
          size: size,
          quantity: quantity,
        })
      ,
    },
  };
}
export default connect(null, mapDispatchToProps)(AddToCart);
let nextId = 0;

/*import { useCartDispatch } from "./CartContext";

export default function AddToCart({ src,name,price,size,quantity }) {
  const dispatch = useCartDispatch();
  return (
    <>
      <button className="add-button"
        onClick={() => {
          dispatch({
            type: "added",
            id: nextId++,
            src: src,
            name: name,
            price: price,
            size: size,
            quantity: quantity,
          });
        }}
      >
        Add to Cart
      </button>
    </>
  );
}

let nextId = 0;*/
