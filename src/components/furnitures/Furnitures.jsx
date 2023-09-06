import React from 'react'
import "./furnitures.scss"
import data from "./FurnituresData"

const Furnitures = () => {
 return(
    <div className='furnitures'>
        <div className="title">
            <h2>OUR FURNITURES</h2>
        </div>
        <div className="text">
            There are many variations of passages of Lorem Ipsum
        </div>
        <div className="cards">
            {data?.map((data)=>(
                    <div className="card" key={data.id}>
                        <div className="img">
                            <img src={data.image} alt="" />
                        </div><br />
                        <div className="title">
                            <h3>{data.title}</h3>
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

export default Furnitures