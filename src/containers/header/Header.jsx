import React from 'react'
import Button from '../../componenets/button/Button'
import Logo from '../../assets/logo.png'


function Header() {

  return (
    <nav className='container flex nav'>
        <a className='nav__link' href="/">
            <img src={Logo} alt="image of our logo" />
        </a>
        <div className="nav__button">
          <Button title='Give us a call'/>
        </div>
    </nav>
  )
}

export default Header