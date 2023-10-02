import React from 'react'
import ProductCard from './ProductCard'
import './ProductsPage.css'
import product from '../../images/product.png'

function ProductsPage() {
  return (
    <div className="products-page">
            <section className="hero-section">
                <div className="container-hero">
                    <div className="hero-text">
                    <h2>Shop Men's</h2>
                    <p>Revamp your style with the latest designer trends in men’s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces. </p>
                    </div>
                </div>
            </section>

        <div className="container-hero flex">
            <section className="filter-section">
                    <div className="filter-content">
                        <h4>Filters</h4>
                        <h6>Categories</h6>
                        <ul className='category-list'>
                            <li>
                                <label>
                                <input 
                                type="checkbox"
                                // checked={checked} 
                                // onChange={handleChange}
                                />
                                Men
                                </label>
                            </li>
                            <li>
                                <label>
                                <input type="checkbox" />
                                Women
                                </label>
                            </li>
                            <li>
                                <label>
                                <input type="checkbox" />
                                Kids
                                </label>
                            </li>
                        </ul>
                        <h6>Size</h6>
                        <ul className='size-list'>
                            <li>
                                <label>
                                <input type="checkbox" />
                                32
                                </label>
                            </li>
                            <li>
                                <label>
                                <input type="checkbox" />
                                34
                                </label>
                            </li>
                            <li>
                                <label>
                                <input type="checkbox" />
                                36
                                </label>
                            </li>
                            <li>
                                <label>
                                <input type="checkbox" />
                                38
                                </label>
                            </li>
                            <li>
                                <label>
                                <input type="checkbox" />
                                40
                                </label>
                            </li>
                            <li>
                                <label>
                                <input type="checkbox" />
                                42
                                </label>
                            </li>
                            <li>
                                <label>
                                <input type="checkbox" />
                                44
                                </label>
                            </li>
                        </ul>
                    </div>
                </section>
        
            <section className="products-section">
                    <div className="gallery">
                      <div className="card">
                        <div className="product-img"><img src={product} alt="/" /></div> 
                        <div className="product-detail flex">
                            <div className="name-price">
                                <h6>Product Name</h6>
                                <p>Price</p>
                            </div>
                            <p>Size</p>
                        </div>
                      </div>

                      <div className="card">
                        <div className="product-img"><img src={product} alt="/" /></div> 
                        <div className="product-detail flex">
                            <div className="name-price">
                                <h6>Product Name</h6>
                                <p>Price</p>
                            </div>
                            <p>Size</p>
                        </div>
                      </div>

                      <div className="card">
                        <div className="product-img"><img src={product} alt="/" /></div> 
                        <div className="product-detail flex">
                            <div className="name-price">
                                <h6>Product Name</h6>
                                <p>Price</p>
                            </div>
                            <p>Size</p>
                        </div>
                      </div>

                      <div className="card">
                        <div className="product-img"><img src={product} alt="/" /></div> 
                        <div className="product-detail flex">
                            <div className="name-price">
                                <h6>Product Name</h6>
                                <p>Price</p>
                            </div>
                            <p>Size</p>
                        </div>
                      </div>

                      <div className="card">
                        <div className="product-img"><img src={product} alt="/" /></div> 
                        <div className="product-detail flex">
                            <div className="name-price">
                                <h6>Product Name</h6>
                                <p>Price</p>
                            </div>
                            <p>Size</p>
                        </div>
                      </div>

                     
                    </div>
            </section>
        </div>
        
    
    </div> 
  )
}

export default ProductsPage
