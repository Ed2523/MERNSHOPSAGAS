import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import './styles/app.css';

import products from './products'
function App() {
  console.log(products);
  return (
    <div className='main-wrapper'>
      <Header />
      <main className='main-section'>
        <div className='products-title'>
          <h1 >LATEST PRODUCTS</h1>
        </div>

        <HomeScreen />

      </main>
      <Footer />
    </div>
  );
}

export default App;
