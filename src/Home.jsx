import React from 'react'
import './App.css'
import img from './header.jpeg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faStar, faTerminal} from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
    return (
        <header id="header" className=" flex">
            <div className="container">
                <div className="header-content">
                    <h1>
                        Hello,<br />I am Abhishek Boby<br />

                    </h1>

                    <h2>MERN Full stack <br />Developer</h2>
                    </div>
                    <div className='imgg'>
                    
                         {/* <img src={img} alt='y'></img> */}
                         
                    </div>
                    
                    {/* <p className='fw-medium'>
                        <FontAwesomeIcon icon={faTerminal} style={{ color: "#FFD43B", }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                        <span>5/5</span>
                    </p> */}

                
            </div>
        </header>
    )
}

