import { BsHandbag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext.js';

const Navbar = () => {
  const cart=useCart();
  var size=0;

  function cartSize(item){
    if(cart){
      cart.forEach(element => {
        size+=element.quantity;
      });
    }
    return size;
  }
  return (
    <div>
      <div className='flex items-center bg-black h-14'>
        <div className='flex justify-between text-white w-full max-w-screen-xl mx-auto px-4'>
          <div className='flex items-center space-x-4 text-white font-light'>
            {/* <a href='#' className='font-semibold text-xl'>
              Ecommerce
            </a> */}
            <Link to='/' className='font-semibold text-xl'>Ecommerce</Link>
            <Link to='/products'>Shop</Link>
            {/* <a href='#'>Shop</a> */}
            <a href='#'>Stories</a>
            <a href='#'>About</a>
          </div>
          <div className='flex space-x-4'>
            <a href='#' className='flex items-center text-white'>
              <BsHandbag />
              <p>{cartSize()}</p>
            </a>
            {/* <a href='#' className='text-white'>
              Login
            </a> */}
            <Link to='/login_email' className='text-white'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
