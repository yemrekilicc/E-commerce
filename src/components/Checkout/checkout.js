import React from 'react';
import './checkout.css';

function CheckOut(){
    return <div className='page row'>
        <div className='column shippingInfo'>
            <h1>Checkout</h1>
            <h2>Shipping Information </h2>
            <div className='row gap'>
                <input placeholder='First Name'/>
                <input placeholder='Last Name'/>
            </div>
            <input placeholder='Address'/>
            <input placeholder='Phone Number'/>
            <div className='row gap'>
                <input placeholder='Country'/>
                <input placeholder='City'/>
                <input placeholder='Zip Code' />
            </div>
            <input placeholder='Address Description'/>
            <h2>Payment Details </h2>
            <input placeholder='Cardholder Name'/>
            <input placeholder='Card Number'/>
            <div className='row gap'>
                <input placeholder='Month'/>
                <input placeholder='Year'/>
                <input placeholder='CVC'/>
            </div>
            <button className='buyButton'>Pay with card</button>
        </div>
        <div className='cartInfo column gap'>
            <h2>Your cart</h2>
            <div className='row product'>
               <div className='row gap'>
                    <img src="/images/fila.png" alt="fila" />
                    <div className='column productInfo'>
                        <h2>Product</h2>
                        <p>Size: L</p>
                        <p>Quantity: 1</p>
                        <h2>99$</h2>
                    </div>
                </div> 
                <button className='removeButton'>Remove</button>
            </div>
            <div className='row space-between'>
                <p>Subtotal</p>
                <p>$200</p>
            </div>
            <div className='row space-between'>
                <p>Shipping</p>
                <p>$20</p>
            </div>
            <div className='divider'></div>
            <div className='row space-between'>
                <p>Total</p>
                <p>$220</p>
            </div>
            
            
        </div>
    </div>
}

export default CheckOut;