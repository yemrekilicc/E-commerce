import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom';
import './ProductsPage.css'
import data from '../shoes.json'


function ProductsPage() {
  return (
    <div className="products-page">
            <section className="hero-section">
                <div className="container-hero">
                    <div className="hero-text">
                    <h2>Shop Shoes</h2>
                    <p>Revamp your style with the latest designer trends in shoes or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces. </p>
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
                        {data.map((product) => (
                            <Link key={product.id} to={"/product_page/"+product.id} ><ProductCard className="card"  src={product.image} name={product.name} price={product.price} id={product.id}  /></Link>
                            
                        ))}

                    </div>
            </section>
        </div>
        
    
    </div> 
  )
}

export default ProductsPage
