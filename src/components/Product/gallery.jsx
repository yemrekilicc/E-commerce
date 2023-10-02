import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Gallery() {
  return (
    <Carousel showThumbs={false}>
      
      <div class="carousel">
        <img  src="https://picsum.photos/id/200/500" alt="Resim 1" />
      </div>
      <div class="carousel">
        <img src="https://picsum.photos/id/444/500" alt="Resim 2" />
      </div>
      <div class="carousel">
        <img src="https://picsum.photos/id/400/500" alt="Resim 3" />
      </div>
      <div class="carousel">
        <img src="https://picsum.photos/id/555/500" alt="Resim 3" />
      </div>
      
    </Carousel>
  );
}

export default Gallery;