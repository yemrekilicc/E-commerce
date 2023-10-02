import React from 'react';
import './homePage.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ImageGallery() {
  return (
    <Carousel showThumbs={false} showStatus={false} autoPlay={true} interval={3000}>
      
      <div class="carousel">
        <img  src="https://picsum.photos/id/200/800/450" alt="Resim 1" />
        <p className="legend">Resim 1 Açıklama</p>
      </div>
      <div class="carousel">
        <img src="https://picsum.photos/id/300/800/450" alt="Resim 2" />
        <p className="legend">Resim 2 Açıklama</p>
      </div>
      <div class="carousel">
        <img src="https://picsum.photos/id/400/800/450" alt="Resim 3" />
        <p className="legend">Resim 3 Açıklama</p>
      </div>
      
    </Carousel>
  );
}

export default ImageGallery;