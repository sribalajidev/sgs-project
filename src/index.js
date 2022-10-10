// Bootstarp Files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// Fontawesome
import './assets/scss/fontawesome/css/all.css';
import './assets/scss/fontawesome/css/v4-shims.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// Base Stylings
import './assets/scss/base.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/FooterComponent/FooterComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import BannerSlickSlider from './components/SlickComponent/BannerSlickslider'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='main-canvas'>
      <HeaderComponent/>
      <BannerSlickSlider />
      <Footer />
    </div>
);

