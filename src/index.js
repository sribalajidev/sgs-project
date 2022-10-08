// Bootstarp Files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// Fontawesome
import './assets/scss/fontawesome/css/all.css';
import './assets/scss/fontawesome/css/v4-shims.css';

// Base Stylings
import './assets/scss/base.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './components/FooterComponent/FooterComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <App />
      <Footer />
    </div>
);

