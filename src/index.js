import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './components/footer.component/footer.component';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <App />
      <Footer />
    </div>
);

