import React from 'react';
import lorem from '../../init.js';
import logo from '../../logo.svg';

function Pricing(props) {

    return(
        <div className="container-fluid">
            <div className="row pricing-section content-section">
                <div className="col-sm-8 section-text">
                    <h1 id="pricingSection">This is the pricing section</h1>
                    <p>{lorem}</p>
                </div>
                <div className="col-sm-4">
                    <img src={logo} alt="test"/>
                </div>
            </div>
        </div>
    );

}

export default Pricing;