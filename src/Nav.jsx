
import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import './App.css'

export const Nav = () => {
  return (
    <>
      <div className='nav'>
      
          <div className='head'>
            <h2>My Portfolio</h2>
          </div>

          <div className='list'>
          <Link to='/home'><span style={{color:'black'}}>Home</span></Link>
          <Link to='/about'> <span style={{color:'black'}}>About</span></Link>
          <Link to='/work'><span style={{color:'black'}}>Work</span></Link>
          <Link to='/contact'> <span style={{color:'black'}}>Contact</span></Link>
          </div>
        
      </div>
      
      <Outlet />
    </>
  );
};
