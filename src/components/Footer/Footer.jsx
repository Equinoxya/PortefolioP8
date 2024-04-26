import React from 'react';
import CopyButton from './Copy-Button';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='container_footer'>
                <h3>Pour me contacter</h3>
                    <CopyButton 
                        className="email"
                        value={"obellissens@gmail.com"}
                    />
                <p className='copyright'>© 2023 Ophélie BELLISSENS, Tous droits réservés. </p>
            </div>
        </footer>
    );
};

export default Footer;