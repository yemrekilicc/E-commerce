import { useState }from 'react';
import "./productPage.css";
import Carousel from './gallery';
import data from '../shoes.json';
import { useParams } from "react-router-dom";
import AddToCart from "../AddToCartButton";


function ProductPage() {
    const [shoeSize, setShoeSize] = useState('');
    const [shoeQuantity, setShoeQuantity] = useState('');
    let {  id } = useParams(); 
    let idInt=parseInt(id);
    let item=data.find((shoe) => shoe.id===idInt );


    const buttonClick = (size) => {
        setShoeSize(size);
        console.log(shoeSize);
      };
    const handleQuantity = (event) => {
        if(event.target.value){
            setShoeQuantity(parseInt(event.target.value));

        }else{
            setShoeQuantity(0);
        }
        console.log(shoeQuantity);
    };
    return (
        <div className="p-main">
            <div className="product-carousel">
                <Carousel />
            </div>
            <div className="p-table">
                
                    <img src={item.image} alt="" />
                
                
            </div>
            <div className="detail-container">
                <h2 className="p-title">{item.name}</h2>
                <p className="p-price">{item.price} $</p>
                <p className="p-text">{item.description}</p>
                <p><b>Size</b></p>
                <div className="p-size">
                    {item.size.map((size) => (
                        <button
                        key={size}
                        onClick={() => { buttonClick(size) }}
                        className="size-box"
                        >
                        {size}
                        </button>
                    ))}
                </div>

                <div className="p-flex">
                    <AddToCart image={item.image} name={item.name} price={item.price} size={shoeSize} quantity={shoeQuantity}/>
                    <p className="p-info">Quantity:</p>
                    <input onChange={handleQuantity} type="number" className="p-number" />
                </div>
                <p className="p-info">Free standard shipping.</p>
            </div>
        </div>
    )
}

export default ProductPage;