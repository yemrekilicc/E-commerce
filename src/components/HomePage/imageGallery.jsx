import React from 'react';
import './homePage.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ImageGallery() {
  return (
    <Carousel showThumbs={false} showStatus={false} autoPlay={true} interval={3000} infiniteLoop={true}>
      
      <div class="carousel">
        <img  src="/images/h-1.jpg" alt="Resim 1" />
        <p className="c-legend">Shop Now!</p>
      </div>
      <div class="carousel">
        <img src="/images/h-2.jpg" alt="Resim 2" />
        <p className="c-legend">Shop the Fall Collection!</p>
      </div>
      <div class="carousel">
        <img src="/images/h-3.jpg" alt="Resim 3" />
        <p className="c-legend">Click for details</p>
      </div>
      
    </Carousel>
  );
}

export default ImageGallery;