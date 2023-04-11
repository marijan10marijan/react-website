import React, { useEffect, useState } from 'react';
import testimonialsData from '../../data.json';
import Quote from '../../assets/quote.png';
import LeftArrow from '../../assets/left-arrow.svg';
import RightArrow from '../../assets/right-arrow.svg';

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState(testimonialsData)  
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const testimonialLength = testimonials.length;

  const increaseTestimonials = ()=>{
    if(testimonialIndex >= testimonialLength - 1 ){
      setTestimonialIndex(0)
    }else{
      setTestimonialIndex(prev => {
        return prev + 1
      })
    }
  }
  const decreaseTestimonials = ()=>{
    if(testimonialIndex == 0){
      setTestimonialIndex(testimonialLength - 1)
    }else{
      setTestimonialIndex(prev => {
        return prev - 1
      })
    }
  }

  return (
    <section className="container testimonials">
            <div className="testimonials__data" key={testimonials[testimonialIndex].id}>
                <img className='testimonials__quote-img' src={Quote} alt="quote of testimonials" />
                <p className='testimonials__text'>{testimonials[testimonialIndex].description}</p>
                <h1 className='testimonials__name'>{testimonials[testimonialIndex].name}</h1>
                <h2 className='testimonials__position'>{testimonials[testimonialIndex].position}</h2>
                <div className="testimonials__arrows">
                    <img src={LeftArrow} onClick={decreaseTestimonials} alt="left arrow" />
                    <img src={RightArrow} onClick={increaseTestimonials} alt="right arrow" />
                </div>
            </div>
    </section>
  )
}

export default Testimonials