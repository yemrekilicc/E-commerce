import './homePage.css';
import ImageGallery from './imageGallery';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 class="title">Lorem ipsum dolor sit amet, consectetur adip</h2>
        <p class="grey-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, explicabo.
        </p>
        <button class="shop-all">Shop All</button>
        <div className="gallery-container">
          <ImageGallery />
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
        <button class="shop-all">Shop All</button>
        <div className="hp-container-wrapper">
          <div className="hp-container">
            <img src="https://picsum.photos/id/200/400/600" alt="Görsel 1" />
          </div>
          <div className="hp-container">
            <img src="https://picsum.photos/id/500/400/600" alt="Görsel 2" />
          </div>
          <div className="hp-container">
            <img src="https://picsum.photos/id/100/400/600" alt="Görsel 3" />
          </div>
        </div>
      </header>
    </div>
  );
}


export default HomePage;
