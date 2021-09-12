import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';



const HomeFooter = (props) => {
    
    return (
        <div className='footer'>
<footer className="footer-distributed">

			<div className="footer-left">

				<h3>Evolution Of <span><strong><em>Wine</em></strong></span></h3>

				<p className="footer-links">
					<a href="#" className="link-1">Home</a>
					
					<a href="#">Store</a>
				
					<a href="#">Cart</a>
				
					<a href="#">Product Reviews</a>
					
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">Evolution Of Wine © 2021</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>123 Blue Ave</span> Temecula, California</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>555.555.5555</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-icons">

				<Link to={{ pathname: "https://www.instagram.com/evolutionofwine/" }} target="_blank" className='home-icon'>
                    <img src={'/images/white-instagram-icon.png'} className="home-icon" alt="logo" />
                </Link>

				<Link to={{ pathname: "https://www.facebook.com/evolutionofwine" }} target="_blank" className='home-icon'>
                    <img src={'/images/facebook-white-icon.png'} className="home-icon" alt="logo" />
                </Link>

				<Link to={{ pathname: "https://twitter.com/evolutionofwine" }} target="_blank" className='home-icon'>
                    <img src={'/images/twitter-white-icon.png'} className="home-icon" alt="logo" />
                </Link>


				</div>

			</div>

		</footer>
        </div>
    );
}

export default HomeFooter;


