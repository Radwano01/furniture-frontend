import React from 'react'
import "./testimonial.scss"
import imgOne from "../../assets/images/img-7.png"
import imgTwo from "../../assets/images/img-8.png"

const Testimonial = () => {
  return (
    <div className='testimonial'>
        <div className="title">
            <h2>WHAT IS SAYS OUR CLIENTS</h2>
        </div><br />
        <div className="type">
            Lorem ipsum dolor sit amet, consectetur adipiscing
        </div><br /><br /><br />

        <div className="cards">
            <div className="card">
                <div className="img">
                   <img src={imgOne} alt="" /> 
                </div>
                <div className="type">
                    <div className="name">
                        <h3>LOKSANS</h3>
                    </div><br />
                    <div className="text">
                        ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> reprehenderit in voluptate velit
                    </div>
                </div>
            </div><br />
            <div className="card">
                <div className="img">
                   <img src={imgTwo} alt="" /> 
                </div>
                <div className="type">
                    <div className="name">
                        <h3>LOKSANS</h3>
                    </div><br />
                    <div className="text">
                        ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> reprehenderit in voluptate velit
                    </div>
                </div>
            </div>

        </div>
        <div className="button">
            <button>PREV</button>
            <button>NEXT</button>
        </div>
    </div>
  )
}

export default Testimonial