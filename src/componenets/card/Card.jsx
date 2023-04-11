import React from 'react';

function Card({image, number, title, text}) {
  return (
    <div className="card">
        <div className="card__header">
            <img src={image} alt="services section image" />
            <p className='card__header-p'>{number}</p>
        </div>
        <div className="card__content">
            <h1 className="card__content-title">{title}</h1>
            <p className="card__content-text">{text}</p>
        </div>
    </div>
  )
}

export default Card