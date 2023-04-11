import React from 'react'
import Button from '../../componenets/button/Button'
import MainImage from '../../assets/mainImg.png'

function Main() {
  return (
    <main className='container flex main'>
      <div className="main__left">
        <h1 className='main__left-title'>Build tomorrow's products, <span className='main__left-title-span'>today.</span></h1>
        <p className='main__left-text'>We are a technology firm that builds great products using modern technologies for the worlds most admired companies.</p>
        <Button title='Contact Us'/>
      </div>
      <div className="main__right">
        <img src={MainImage} alt="main image of our website" />
      </div>
    </main>
  )
}

export default Main