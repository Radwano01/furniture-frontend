    import React, { useRef } from 'react'
    import "./navbar.scss"
    import {BiSearchAlt2} from "react-icons/bi"
    import {FaBars,FaTimes} from "react-icons/fa"
import { NavLink } from 'react-router-dom'

    const Navbar = () => {
        const navRef = useRef()

        const showNavbar = ()=>{
            navRef.current.classList.toggle("responsive-nav")
        }
    return (
        <div className='navbar'>
            <div className="left">
                <a href="/"><h1>VINTAGEFUR</h1></a>
            </div>
            <div className="center">
                <ul ref={navRef}>
                    <li>
                        <NavLink to="/">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">SERVICES</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to="furnitures">SHOP</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">CONTACT</NavLink>
                    </li>
                    <button onClick={showNavbar} className='nav-btn nav-close-btn'>
                        <FaTimes size={30}/>
                    </button>
                </ul>
            </div>
            <div className="right">
                <ul>
                    <li><BiSearchAlt2 size={20}/></li>
                    <li>Login</li>
                    <button className='nav-btn bar' onClick={showNavbar}>
                        <FaBars size={20}/>
                    </button>
                </ul>
            </div>

        </div>
    )
    }

    export default Navbar