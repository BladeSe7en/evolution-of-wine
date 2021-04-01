import React from 'react';
import HomeBio from '../HomeBio/HomeBio';
import NavBarMini from '../NavBarMini/NavBarMini';


const NavBar = () => {


    return (
        <div className='nav-container' style = {{backgroundImage: `url('/images/red-background-painting.jpg')`}}>
            <div className = 'background-mask'>
            <NavBarMini />
            <div className='logo-header' >
                <img src={'/images/EvolutionOfWineLogoWhite.png'} className="logo" alt="logo" />
            </div>
            <HomeBio />
            </div>
        </div>
    );
}

export default NavBar;

