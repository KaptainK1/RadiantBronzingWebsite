import React from 'react';
import sunImg from '../../images/sun-cropped-final.png';


function Header(props) {

    return(
        <div>
            <h1 className={"main-heading"}>Radiant Bronzing Boutique LLC</h1>
            <img src={sunImg} alt="sun" className="main-heading-img d-none d-lg-block"/>
        </div>
    );
}

export default Header