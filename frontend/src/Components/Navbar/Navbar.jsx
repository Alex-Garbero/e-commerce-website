import React from 'react'
import { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

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
        <li onClick={()=>{setMenu("shop")}}>Shop {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("bottoms")}}>Bottoms {menu==="bottoms"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("tops")}}>Tops {menu==="tops"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("accessories")}}>Accessories {menu==="accessories"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        {/* cart counter icon */}
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}
