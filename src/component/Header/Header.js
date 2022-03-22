import React from 'react';
import image from '../../images/gsm.jpg'
import './Header.css'
const Header = () => {
    return (
         <div className='banner-container'>
         <img className='banner' src={image} alt="" />
          <h3>Do you want to buy our player?</h3> 
         
         </div>

    );
};

export default Header;