import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import './styles/app.css';

function App() {
  return (
    <Router>
      <div className='main-wrapper'>
        <Header />
        <main className='main-section'>

          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
