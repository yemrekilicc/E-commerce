import React from 'react';
import ShopPopup from './popup.jsx'
import './checkout.css';


function CheckOut({src, name, price, size, quantity}){

    const subTotal=quantity*price;
    const shipping=20;
    const total=subTotal+shipping;


    return <div className='checkout'>
        <div className='responsive space-evenly'>
        <div className='column shippingInfo gap'>
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
            <ShopPopup/>
            
        </div>
        <div className='cartInfo column gap'>
            <h2>Your cart</h2>
            <div className='row product'>
               <div className='row gap'>
                    <img src={src} alt={name} />
                    <div className='column productInfo'>
                        <h2>{name}</h2>
                        <p>Size: {size}</p>
                        <p>Quantity: {quantity}</p>
                        <h2>${price}</h2>
                    </div>
                </div> 
                <button className='removeButton'>Remove</button>
            </div>
            <div className='row space-between'>
                <p>Subtotal</p>
                <p>${subTotal}</p>
            </div>
            <div className='row space-between'>
                <p>Shipping</p>
                <p>${shipping}</p>
            </div>
            <div className='divider'></div>
            <div className='row space-between'>
                <p>Total</p>
                <p>${total}</p>
            </div>
            
            
        </div>
    </div>
        </div>
}

export default CheckOut;