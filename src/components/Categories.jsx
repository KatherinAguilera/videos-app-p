import React from 'react';
// eslint-disable-next-line import/no-unresolved
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <section className='carousel'>
    <div className='carousel__container'>
      {children}
    </div>
  </section>
);

export default Carousel;
