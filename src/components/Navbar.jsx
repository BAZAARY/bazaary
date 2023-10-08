import React from 'react';
import LogoImage from './img/bazaary.jpeg'
import CartImage from './img/cart.png'
import ProfileImage from './img/profile-picture.webp'
import SellImage from './img/sell.png'
import './Navbar.css'
import { Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="circular-logo">
          <img src={LogoImage} alt="Logo" />
        </div>
        <div className='font-text text-3xl pl-5'>
          Bazaary
        </div>
        <div className="search-bar">
          <input id="search-bar-input" type="text" placeholder=" &#8981; Buscar..." className="font-text input-text" />
        </div>
        <div className="for-sale">
          <a href={"/addingitem/category"}>
            <img src={SellImage} alt="Carrito de Compras" />
          </a>
        </div>
        <div className="shopping-cart">
          <img src={CartImage} alt="Carrito de Compras" />
        </div>
        <div className="profile-picture">
          <img src={ProfileImage} alt="Foto de Perfil" />
        </div>
      </div>
      <main className="App-content">{/**Se usa para renderizar los hijos: HomePage, etc*/}
        <Outlet />
      </main>
    </>
  );
}
export default Navbar;