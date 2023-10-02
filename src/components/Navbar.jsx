import { BsHandbag } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div>
      <div className='flex items-center bg-black h-14'>
        <div className='flex justify-between text-white w-full max-w-screen-xl mx-auto px-4'>
          <div className='flex items-center space-x-4 text-white font-light'>
            <a href='#' className='font-semibold text-xl'>
              Ecommerce
            </a>
            <a href='#'>Shop</a>
            <a href='#'>Stories</a>
            <a href='#'>About</a>
          </div>
          <div className='flex space-x-4'>
            <a href='#' className='flex items-center text-white'>
              <BsHandbag />
            </a>
            <a href='#' className='text-white'>
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
