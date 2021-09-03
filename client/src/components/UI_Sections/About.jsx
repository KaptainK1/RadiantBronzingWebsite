import React from 'react';
import lorem from '../../init.js';
import logo from '../../logo.svg';

function About(props) {

    return(
        <div className="container-fluid">
            <div className="row about-section content-section">
                <div className="col-sm-4">
                    <img src={logo} alt="test"/>
                </div>
                <div className="col-sm-8 section-text">
                    <h1 id="aboutSection">This is the about section</h1>
                    <p>{lorem}</p>
                </div>
            </div>
        </div>
    );

}

export default About;