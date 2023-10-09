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
    let item=data.filter((shoe) => shoe.id===idInt );
    function findItem( id) {
        return data.find((element) => {
          return element.id === id;
        })
    }

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
                
                    <img src={findItem(idInt).image} alt="" />
                
                
            </div>
            <div className="detail-container">
                <h2 className="p-title">{findItem(idInt).name}</h2>
                <p className="p-price">{findItem(idInt).price} $</p>
                <p className="p-text">{findItem(idInt).description}</p>
                <p><b>Size</b></p>
                <div className="p-size">
                    <button onClick={()=>{buttonClick(36)}} className="size-box">36 </button>
                    <button onClick={()=>{buttonClick(37)}} className="size-box">37  </button>
                    <button onClick={()=>{buttonClick(38)}} className="size-box">38  </button>
                    <button onClick={()=>{buttonClick(39)}} className="size-box">39  </button>
                    <button onClick={()=>{buttonClick(40)}} className="size-box">40 </button>
                    <button onClick={()=>{buttonClick(41)}} className="size-box">41</button>
                </div>
                {/* <p className="p-info">Lorem ipsum dolor sit amet.</p> */}

                <div className="p-flex">
                    <AddToCart image={findItem(idInt).image} name={findItem(idInt).name} price={findItem(idInt).price} size={shoeSize} quantity={shoeQuantity}/>
                    <p className="p-info">Quantity:</p>
                    <input onChange={handleQuantity} type="number" className="p-number" />
                </div>
                <p className="p-info">Free standard shipping.</p>
            </div>
        </div>
    )
}

export default ProductPage;