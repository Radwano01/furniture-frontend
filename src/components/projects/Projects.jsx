import React from 'react'
import "./projects.scss"
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from "react-icons/bs"
import data from "./ProjectsData"

const Projects = () => {
  return (
    <div className='projects'>
        <div className="title">
            <h2>OUR PROJECTS</h2>
        </div><br />
        <div className="type">
            Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>

        <div className="cards">
            <button className='arrow-left'>
                <BsFillArrowLeftSquareFill size={70}/>
            </button>
            {data.map((data)=>(
                    <div className="img" key={data.id}>
                        
                        <img src={data.image} alt="" />
                        <button>VIEW MORE</button>
                        <h4>{data.title}</h4>
                        
                    </div>         

            ))}
            <button className='arrow-right'>
                <BsFillArrowRightSquareFill size={70}/>
            </button>
        </div>
    </div>
  )
}

export default Projects