import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

function Footer(props) {

    return(
        <div className="footer-section container-fluid">
            {/*<h1>This is the footer section</h1>*/}
            <div className="row justify-content-start">
                <div className="col-sm-3 align-self-start footer-contact">
                    <p> <FontAwesomeIcon icon={faBuilding} /> Address: 123 Home Drive, Green Bay WI 54311</p>
                    <p> <FontAwesomeIcon icon={faPhoneSquare} /> Phone: (999)-999-9999</p>
                    <p> <FontAwesomeIcon icon={faEnvelopeSquare} /> Email: radiantbronzing@gmail.com</p>
                </div>
                <div className="col-sm-6 align-self-center">
                    <a href="https://www.facebook.com">
                        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
                    </a>
                    <a href="https://www.twitter.com">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://www.tiktok.com">
                        <FontAwesomeIcon icon={faTiktok} size="2x" />
                    </a>
                    <a href="https://www.instagram.com">
                        <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
                    </a>
                    <a href="https://www.youtube.com">
                        <FontAwesomeIcon icon={faYoutubeSquare} size="2x" />
                    </a>
                </div>
                <div className="col-sm-3 align-self-end footer-creator">
                    <p>Site done by Dylan Hoffman</p>
                </div>
            </div>
        </div>
    );

}

export default Footer;