import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom';
import './ProductsPage.css'
import data from '../shoes.json'


function ProductsPage() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    // Add state for selected sizes
    const [selectedSizes, setSelectedSizes] = useState([]);
  
    // Function to handle category checkbox changes
    const handleCategoryChange = (category) => {
      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
      } else {
        setSelectedCategories([...selectedCategories, category]);
      }
    };

    // Function to handle size checkbox changes
    const handleSizeChange = (size) => {
        if (selectedSizes.includes(size)) {
        setSelectedSizes(selectedSizes.filter((s) => s !== size));
        } else {
        setSelectedSizes([...selectedSizes, size]);
        }
    };

  
    // Filter products based on selected categories and sizes
    const filteredProducts = data.filter((product) => {
        const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category.toLowerCase());
    
      const sizeMatch =
        selectedSizes.length === 0 ||
        product.size.some((availableSize) =>
          selectedSizes.includes(availableSize.toString())
        );
    
      return categoryMatch && sizeMatch;
    });

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
                                checked={selectedCategories.includes('men')}
                                onChange={() => handleCategoryChange('men')}
                                />
                                Men
                                </label>
                            </li>
                            <li>
                                <label>
                                <input type="checkbox" 
                                checked={selectedCategories.includes('women')}
                                onChange={() => handleCategoryChange('women')}
                                />
                                Women
                                </label>
                            </li>
                            <li>
                                <label>
                                <input type="checkbox" 
                                checked={selectedCategories.includes('unisex')}
                                onChange={() => handleCategoryChange('unisex')}
                                />
                                Unisex
                                </label>
                            </li>
                        </ul>
                        <h6>Size</h6>
                        <ul className='size-list'>
                            <li>
                                <label>
                                <input type="checkbox" 
                                checked={selectedSizes.includes('36')}
                                onChange={() => handleSizeChange('36')}
                                />
                                36
                                </label>
                            </li>
                            <li>
                                <label>
                                <input type="checkbox" 
                                checked={selectedSizes.includes('37')}
                                onChange={() => handleSizeChange('37')}/>
                                37
                                </label>
                            </li>
                            <li>
                                <label>
                                <input type="checkbox" 
                                checked={selectedSizes.includes('38')}
                                onChange={() => handleSizeChange('38')}/>
                                38
                                </label>
                            </li>
                            <li>
                                <label>
                                <input type="checkbox" 
                                checked={selectedSizes.includes('39')}
                                onChange={() => handleSizeChange('39')}/>
                                39
                                </label>
                            </li>
                            <li>
                                <label>
                                <input type="checkbox" 
                                checked={selectedSizes.includes('40')}
                                onChange={() => handleSizeChange('40')}/>
                                40
                                </label>
                            </li>
                            <li>
                                <label>
                                <input type="checkbox" 
                                checked={selectedSizes.includes('41')}
                                onChange={() => handleSizeChange('41')}/>
                                41
                                </label>
                            </li>
                        </ul>
                    </div>
                </section>
        
            <section className="products-section">
                    <div className="gallery">
                    {filteredProducts.map((product) => (
                            <Link key={product.id} to={"/product_page/"+product.id} ><ProductCard className="card"  src={product.image} name={product.name} price={product.price} id={product.id}  /></Link>
                            
                        ))}

                    </div>
            </section>
        </div>
        
    
    </div> 
  )
}

export default ProductsPage
