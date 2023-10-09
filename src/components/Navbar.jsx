import { BsHandbag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext.js';
import React, { Component } from "react";
import { connect } from "react-redux";


class Navbar extends Component {
  state = {
    cart: [],
    size:0,
  };
  cartSize = () => {
    var size=0;
      if(this.state.cart){
        this.state.cart.forEach(element => {
          size+=element.quantity;
          this.setState({size:size});
        });
      }else{
        this.setState({size:0});
      }
  }
  render(){

    return (
    <div>
      <div className='flex items-center bg-black h-14'>
        <div className='flex justify-between text-white w-full max-w-screen-xl mx-auto px-4'>
          <div className='flex items-center space-x-4 text-white font-light'>
            <Link to='/' className='font-semibold text-xl'>Ecommerce</Link>
            <Link to='/products'>Shop</Link>
            <a href='#'>Stories</a>
            <a href='#'>About</a>
          </div>
          <div className='flex space-x-4'>
            <Link to='/cart' className='flex items-center text-white'>
              <BsHandbag />
              <p onChange={this.cartSize}>&nbsp;{this.state.size}</p>
            </Link>
            <Link to='/login_email' className='text-white'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
  }; 
  componentDidUpdate(prevProps, prevState, snapshot) {
    var size=0;
    if (prevProps.cart !== this.props.cart) {
      if(this.props.cart.length!==0){
        this.props.cart.forEach(element => {
          size+=element.quantity;
          this.setState({size:size});
        });
      }else{
        this.setState({size:0});
      }
    }
}
};
function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart,
  };
}
export default connect(mapStateToProps)(Navbar);
