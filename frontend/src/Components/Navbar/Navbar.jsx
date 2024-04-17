import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SOMPLANEY</p>
      </div>
      <ul className='nav-menu'>
        <li>Shop</li>
        <li>Bottoms</li>
        <li>Tops</li>
        <li>Accessories</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart-icon} alt="" />
      </div>
    </div>
  )
}
