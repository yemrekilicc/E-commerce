import React from 'react';
import "./productPage.css";
import Carousel from './gallery';

function ProductPage() {

    return (
        <div className="main">
            <Carousel/>
            <div class="container">
                <div > <img src="https://picsum.photos/id/111/200" alt="" /></div>
                <div > <img src="https://picsum.photos/id/222/200" alt="" /></div>
                <div > <img src="https://picsum.photos/id/112/200" alt="" /></div>
                <div > <img src="https://picsum.photos/id/334/200" alt="" /></div>
            </div>
            <div className="detail-container">
                <h3 class="title">Lorem Ipsum Dolor</h3>
                <p class="price"></p>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, non!</p>
                <div className="color">
                    <p>Color</p>
                    <div className="color-1"></div>
                    <div className="color-2"></div>
                    <div className="color-3"></div>
                    <div className="color-4"></div>  
                </div>
                <div className="size">
                    <p>Size</p>
                    <button className="size-box">XS </button>
                    <button className="size-box">S  </button>
                    <button className="size-box">M  </button>
                    <button className="size-box">L  </button>
                    <button className="size-box">XL </button>
                    <button className="size-box">XXL</button>
                </div>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, excepturi?</p>
                <button class="btn">Add to Cart</button>
                <input type="number"/>
                <p className="info">Free standard shipping.</p>
            </div>
        </div>
    )
}
export default ProductPage;