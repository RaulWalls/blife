import React from 'react';
import '../css/Footer.css';

function Footer(props){
    return(
        <div className='footer-container'>
            <p>Made with &#10084; by <a className="banana-brain" href="https://raulwalls.github.io/">{props.signature}</a></p>
        </div>
    );
}

export default Footer;