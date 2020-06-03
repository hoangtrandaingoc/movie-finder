import React from 'react';
import PropTypes from 'prop-types';
import '../Footer/Footer.scss';

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <section id="footer">
            <div class="container">
                <div class="footer-content">
                    <ul class="social-networks">
                        <li class="li1"><a href="https://www.facebook.com/ngoc.hoang.9843" target="_blank">Facebook</a></li>
                        <li class="li2"><a href="https://www.instagram.com/waynehoang/?hl=vi" target="_blank">Instagram</a></li>
                        <li class="li3"><a href="https://github.com/hoangtrandaingoc" target="_blank">Github</a></li>
                    </ul>
                </div>
                <div class="clear-float"></div>
                <div class="coppyrights">
                    <p>© Copyright 2020   |   Design by Wayne   |   All Rights Reserved</p>
                </div>  
            </div>
        </section>
    );
}

export default Footer;