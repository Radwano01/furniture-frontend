import React from 'react'
import Slider from '../slider/Slider'
import Services from '../services-comp/Services'
import About from '../about/About'
import Furnitures from '../furnitures/Furnitures'
import Quote from '../quote/Quote'
import Projects from '../projects/Projects'
import Testimonial from '../testimonial/Testimonial'
import Contact from '../contact/Contact'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Services/>
      <About/>
      <Furnitures/>
      <Quote/>
      <Projects/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default Home