import React from 'react'
import "./services.scss"
import data from "./servicesData"

const Services = () => {
  return (
    <div className='services'>
            <div className="title">
                <h2>OUR SERVICES</h2>
            </div><br />
            <div className="text">
                There are many variations of passages of Lorem Ipsum
            </div><br /><br />
        <div className="cards">
            {data?.map((data)=>(
                    <div className="card" key={data.id}>
                        <div className="img">
                            <img src={data.image} alt="" />
                        </div><br />
                        <div className="title">
                            {data.title}
                        </div><br />
                        <div className="text">
                            {data.text}
                        </div><br />
                        <button>
                            READ MORE
                        </button>
                    </div>
            
            ))}
        </div>
    </div>
  )
}

export default Services