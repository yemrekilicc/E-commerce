import './homePage.css';
import ImageGallery from './imageGallery';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 class="title">Make a good journey with Shoe</h2>
        <p class="grey-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, explicabo.
        </p>
        <Link to='/products'>
        <button class="shop-all">Shop All</button>
        </Link>
        <div className="gallery-container">
          <Link to="/products"><ImageGallery /></Link>
        </div>
        <div className="brands-container">
          <img src="/images/fila.png" alt="fila" />
          <img src="/images/adidas.png" alt="adidas" />
          <img src="/images/jordan.png" alt="jordan" />
          <img src="/images/nb.png" alt="nb" />
        </div>

        <h2 class="title">Our latest arrivals</h2>
        <p class="grey-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, explicabo.
        </p>
        <Link to='/products'>
        <button class="shop-all">Shop All</button>
        </Link>
        <div className="hp-container-wrapper">
          <div className="hp-container">
          <Link to="/products">
            <img src="/images/v-1.jpg" alt="Görsel 1" /></Link>
            <div className="legend">Explore Details</div>
          </div>
          <div className="hp-container">
          <Link to="/products">
            <img src="/images/v-2.jpg" alt="Görsel 2" /></Link>
            <div className="legend">Discover!</div>
          </div>
          <div className="hp-container">
          <Link to="/products">
            <img src="/images/v-3.jpg" alt="Görsel 3" /> </Link>
            <div className="legend">Buy Now!</div>
          </div>
        </div>
      </header>
    </div>
  );
}


export default HomePage;
