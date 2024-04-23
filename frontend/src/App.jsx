import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Placeorder from './Pages/Placeorder/Placeorder';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<Placeorder />} />
    </Routes>
    </div>
  );
};

export default App;

