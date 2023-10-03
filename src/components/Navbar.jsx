import React from 'react';
import LogoImage from './img/bazaary.jpeg'
import CartImage from './img/cart.png'
import ProfileImage from './img/profile-picture.webp'
import './Navbar.css'
import MagnifyingGlass from './img/mg.avif' 

function Navbar() {
  return (
    <div className="navbar">
      <div className="circular-logo">
        <img src={LogoImage} alt="Logo" />
      </div>
      <div className="search-bar">
      <input type="text" placeholder="&#x1F50E;&#xFE0E; Buscar..." className="large-icon" />
    </div>
      <div className="shopping-cart">
        <img src={CartImage} alt="Carrito de Compras" />
      </div>
      <div className="profile-picture">
        <img src={ProfileImage} alt="Foto de Perfil" />
      </div>
    </div>
  );
}

export default Navbar;