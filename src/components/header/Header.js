import React from 'react'
import './header.css'
import Logo from '../../img/logo.png'

const Header = () => {
  return (
    <div>
      <div className="header-container">

        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        {/* navbar */}
        <div className="navbar">
          <ul>
            <li>Fetures</li>
            <li>Privasy</li>
            <li>Help Center</li>
            <li>Blog</li>
          </ul>
        </div>


        {/* button  */}
        <div className="header-btn">
          <span>Whatsapp Web</span>
          <button className='btn' >Login</button>
        </div>
      </div>
    </div>
  )
}

export default Header