import React from 'react'
import "./about.scss"
import imgOne from "../../assets/images/img-1.png"

const About = () => {
  return (
    <div className='about'>
        <div className="left">
            <div className="title">
                <h2>ABOUT US</h2>
            </div><br /><br />
            <div className="text">
                There are many variations of passages of Lorem Ipsum available,<br /> but the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even  slightly believableThere are many <br /> variations of passages of Lorem Ipsum available, but the majority have able
            </div><br />
            <button>
                READ MORE
            </button>
        </div>
        <div className="right">
            <div className="img">
                <img src={imgOne} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About