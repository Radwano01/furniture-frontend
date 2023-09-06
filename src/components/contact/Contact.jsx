import React from 'react'
import "./contact.scss"

const Contact = () => {
  return (
    <div className='contact'>
        <div className="left">
            <div className="title">
                <h1>CONTACT US</h1>
            </div><br /><br />
            <form>
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email'/>
                <input type="number" placeholder='Phone Number'/>
                <textarea id="" cols="10" rows="10" placeholder='Message'></textarea>
                <button>SEND</button>
            </form>
        </div><br />
        <div className="right">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2207.331392039974!2d2.295421280774638!3d48.85870243207624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEyfel%20Kulesi!5e0!3m2!1str!2str!4v1693741232828!5m2!1str!2str"></iframe>
        </div>
    </div>
  )
}

export default Contact