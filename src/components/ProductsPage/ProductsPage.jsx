import React from 'react'
import ProductCard from './ProductCard'
import './ProductsPage.css'

let products = [ {src:  'https://akn-ss.a-cdn.akinoncloud.com/products/2022/11/08/540679/3e77bf33-93fc-49f4-b9da-568ac62fa930.jpg',
                    name: 'Adidas', price: '199$', size: '42'},
                {src: 'https://akn-ss.a-cdn.akinoncloud.com/products/2022/01/26/383544/36476535-8712-4e00-aa1a-05acd89da0ba_size1400x1400_quality100.jpg', 
                    name: 'Nike', price: '299$', size: '38'},
                {src: 'https://akn-ss.a-cdn.akinoncloud.com/products/2023/02/07/259957/94f1902e-b010-4888-9136-625339e9ccd2_size1400x1400_quality100.jpg', 
                    name: 'Adidas', price: '249$', size: '36'},
                {src: 'https://akn-ss.a-cdn.akinoncloud.com/products/2022/09/27/274867/c95dbbd4-3de2-4649-b3b3-5cfb9f0e4629_size1400x1400_quality100.jpg', 
                    name: 'Converse', price: '99$', size: '38'},
                {src: 'https://akn-ss.a-cdn.akinoncloud.com/products/2023/09/28/5780772/9000aeed-e1f3-4ac6-838b-31f709b45949_size1400x1400_quality100.jpg', 
                    name: 'New Balance', price: '299$', size: '36'},
                {src: 'https://akn-ss.a-cdn.akinoncloud.com/products/2023/07/05/514966/584e95eb-4259-4b34-bb7b-a8361a24cf1e_size1400x1400_quality100.jpg', 
                    name: 'Converse', price: '139$', size: '44'},
                {src: 'https://akn-ss.a-cdn.akinoncloud.com/products/2023/05/27/514229/8a9c19c5-62b7-4d13-b356-024075a17194_size1400x1400_quality100.jpg',
                    name: 'Converse', price: '139$', size: '34'},
                {src: 'https://akn-ss.a-cdn.akinoncloud.com/products/2023/05/30/3004746/2640ccef-23d2-49cb-85d5-fcf862fa082c_size1400x1400_quality100.jpg', 
                    name: 'Nike', price: '199$', size: '32'},
                    ];


// seçilen filtrelere göre farklı ürün listeleri gelecek, onları görüntüle. 

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
                      {/* <ProductCard className="card" src="https://akn-ss.a-cdn.akinoncloud.com/products/2022/11/08/540679/3e77bf33-93fc-49f4-b9da-568ac62fa930.jpg" name="Adidas" price="199$" size="42" /> */}
                        {products.map((product) => (
                            <ProductCard className="card" src={product.src} name={product.name} price={product.price} size={product.size} />
                        ))}

                    </div>
            </section>
        </div>
        
    
    </div> 
  )
}

export default ProductsPage
