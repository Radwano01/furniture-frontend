import React, { useEffect, useState } from 'react'
import sliderData from "./sliderData"
import "./slider.scss"
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from "react-icons/bs"

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;
    //   console.log(slideLength);
  
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };
  
    useEffect(() => {
      setCurrentSlide(0);
    }, []);
  
    //   const auto = () => {
    //     slideInterval = setInterval(nextSlide, intervalTime);
    //   };
  
    useEffect(() => {
      if (autoScroll) {
        const auto = () => {
          slideInterval = setInterval(nextSlide, intervalTime);
        };
        auto();
      }
      return () => clearInterval(slideInterval);
    }, [currentSlide, slideInterval, autoScroll]);
  
    return (
      <div className="slider">
        <BsFillArrowLeftCircleFill className="arrow prev" onClick={prevSlide}/>
        <BsFillArrowRightCircleFill className="arrow next" onClick={nextSlide}/>
  
        {sliderData.map((slide, index) => {
          const { image, title, text } = slide;
          return (
            <div
              key={index}
              className={index === currentSlide ? "slide current" : "slide"}
            >
              {index === currentSlide && (
                <>
                  <div className="img">
                    <img src={image} alt="slide" />
                  </div>
                  <div className="content">
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <button href="/" className='button'>
                      <h3>CONTACT US</h3>
                    </button>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    );
}

export default Slider