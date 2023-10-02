import React from 'react';
import { BiLogoFacebook, BiLogoGoogle } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';

const Email = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow flex flex-col items-center justify-center'>
        <div className='container bg-white xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mx-auto p-8'>
          <div className='mb-3'>
            <h1 className='font-bold text-xl mb-3'>Welcome Back</h1>
            <h2 className='font-semibold text-gray-400'>Login to continue</h2>
          </div>

          <div className='flex flex-col space-y-3 text-gray-500'>
            <div className='flex justify-center border border-gray-300 rounded-none items-center p-2 cursor-pointer'>
              <BiLogoFacebook className='text-black h-6 w-6 mr-2' />
              <span className='text-center'>Continue with Facebook</span>
            </div>
            <div className='flex justify-center border border-gray-300 rounded-none items-center p-2 cursor-pointer'>
              <BiLogoGoogle className='text-black h-6 w-6  mr-2' />
              <span className='text-center'>Continue with Google</span>
            </div>
            <div className='flex justify-center border border-gray-300 rounded-none items-center p-2 cursor-pointer'>
              <AiOutlineMail className='text-black h-6 w-6 mr-2' />
              <span className='text-center'>Continue with Email</span>
            </div>
          </div>
        </div>
        <p className='text-gray-400 font-semibold mt-5'>
          Or create an{' '}
          <a href='#' className='text-gray-500 font-bold'>
            account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Email;
