import React from 'react';
import '../styles/Footer.css';

const Footer = ({ title }) => {
    return (
        <footer className="cta">
            <div className="cta-text">
                <h2>{title}</h2>
                <p>Contact us to book your adventure or learn more about what Pokhara has to offer.</p>
                <a href="/" className="cta-button">Get in Touch</a>
            </div>
        </footer>
    );
};

export default Footer;
