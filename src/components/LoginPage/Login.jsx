import React from 'react';
import Navbar from '../Navbar';

const Login = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow flex flex-col items-center justify-center'>
        <div className='container bg-white xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mx-auto p-8'>
          <div className='mb-3'>
            <h1 className='font-bold text-xl mb-3'>Welcome Back</h1>
            <h2 className='font-semibold text-gray-400'>Login with email</h2>
          </div>
          <form action='' className='flex flex-col gap-2 mb-5'>
            <input type='text' className='border mb-1' placeholder='Email' />
            <input type='text' className='border' placeholder='Password' />
            <div className='flex mt-2 items-center justify-between'>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='checkbox'
                  name='checkbox'
                  className='h-4 w-4 border rounded-none mr-2 focus:ring-black checked:text-gray-500'
                />
                <label htmlFor='checkbox' className='text-gray-400 text-sm'>
                  Remember me
                </label>
              </div>
              <a href='' className='text-sm font-bold text-gray-400'>
                Forgot Password?
              </a>
            </div>
          </form>
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

export default Login;
