import React from 'react';
import "./productPage.css";
import Carousel from './gallery';


function ProductPage() {

    return (
        <div class="p-main">
            <div class="product-carousel">
                <Carousel />
            </div>
            <table class="p-table">
                <tr>
                    <td > <img src="https://picsum.photos/id/111/350" alt="" /></td>
                    <td > <img src="https://picsum.photos/id/222/350" alt="" /></td>
                </tr>
                <tr>
                    <td > <img src="https://picsum.photos/id/112/350" alt="" /></td>
                    <td > <img src="https://picsum.photos/id/334/350" alt="" /></td>
                </tr>
            </table>
            <div className="detail-container">
                <h2 class="p-title">Lorem Ipsum Dolor</h2>
                <p class="p-price">99$</p>
                <p className="p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, non!</p>
                <p><b>Color</b></p>
                <div className="color-options">
                    <div className="color-option color-1"></div>
                    <div className="color-option color-2"></div>
                    <div className="color-option color-3"></div>
                    <div className="color-option color-4"></div>
                </div>
                <p><b>Size</b></p>
                <div className="p-size">
                    <button className="size-box">XS </button>
                    <button className="size-box">S  </button>
                    <button className="size-box">M  </button>
                    <button className="size-box">L  </button>
                    <button className="size-box">XL </button>
                    <button className="size-box">XXL</button>
                </div>
                <p class="p-info">Lorem ipsum dolor sit amet.</p>

                <div class="p-flex">
                    <button class="add-button">Add to Cart</button>
                    <p class="p-info">Quantity:</p>
                    <input type="number" class="p-number" />
                </div>
                <p className="p-info">Free standard shipping.</p>
            </div>
        </div>
    )
}
export default ProductPage;