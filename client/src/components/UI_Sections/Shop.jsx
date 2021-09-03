import React from 'react';
import lorem from '../../init.js';
import logo from "../../logo.svg";

function Shop(props) {

    return(
        <div className="container-fluid">
            <div className="row shop-section content-section">
                <div className="col-sm-4">
                    <img src={logo} alt="test"/>
                </div>
                <div className="col-sm-8 section-text">
                    <h1 id="shopSection">This is the shop section</h1>
                    <p>{lorem}</p>
                </div>
            </div>
        </div>
    );

}

export default Shop;