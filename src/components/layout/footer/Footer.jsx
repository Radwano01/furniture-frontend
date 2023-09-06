import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top-footer'>
        <div className="cards">
          <div className="card">
            <div className="title">
              INFORMATION
            </div><br /><br />
            <div className="text">
              There are many variat ions of passages of Lorem Ipsum available , but the majority h ave suffered altera tion in some form, by
            </div>
          </div>
          <div className="card">
            <div className="title">
              LET US HELP YOU
            </div><br /><br />
            <div className="text">
              There are many variat ions of passages of Lorem Ipsum available , but the majority h ave suffered altera tion in some form, by
            </div>
          </div>
          <div className="card">
            <div className="title">
              USEFUL LINKS
            </div><br /><br />
            <div className="text">
              About Us <br />
              Careers <br />
              Sell on shopee <br />
              Press & News <br />
              Competitions <br />
              Terms & Conditions <br />
            </div>
          </div>
          <div className="card">
            <div className="title">
              OUR DESIGN
            </div><br /><br />
            <div className="text">
              There are many variat ions of passages of Lorem Ipsum available , but the majority h ave suffered altera tion in some form, by
            </div>
          </div>
        </div>
      </div>
      <div className="middle-footer">
        <div className="left"></div>
        <div className="right">
          <input type="email" placeholder='Enter your email'/><span>SUBSCRIBE</span>
        </div>
      </div>
      <div className="buttom-footer">
        <div className="text">
          2023 All Rights Reserved. Design by Free html Templates Distribution By Radwan
        </div>
      </div>
    </div>
  )
}

export default Footer