import React from 'react'
import { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    // Use state variable to change line for selected page
    const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>GARBERO</p>
      </div>
      <ul className='nav-menu'>
        {/* Using ternary operator to check menu selection */}
        {/* Use link to link words to their respective pages */}
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("bottoms")}}><Link style={{ textDecoration: 'none'}} to='/bottoms'>Bottoms</Link> {menu==="bottoms"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("tops")}}><Link style={{ textDecoration: 'none'}} to='/tops'>Tops</Link> {menu==="tops"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("accessories")}}><Link style={{ textDecoration: 'none'}} to='accessories'>Accessories</Link> {menu==="accessories"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        {/* cart counter icon */}
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}
