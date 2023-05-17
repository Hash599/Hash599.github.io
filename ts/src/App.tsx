import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { Provider } from 'react-redux';
import store from './Components/APP/Store';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <Navbar/>
    <Routes>
  <Route path='/' element={<Home/>}>Home</Route>
  <Route path='/cart' element={<Cart/>}>Cart</Route>
  
 </Routes>
    </Provider>
          </div>
  );
}

export default App;
