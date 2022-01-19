/* import { grey } from '@material-ui/core/colors'; */
import '../../index.css';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Tooltip } from '@material-ui/core';

/*Image added */
import mountain_img from '../../resources/images/img_mountain.png';

const Footer = () => {
    return (
        /* style edited */
        <footer className = "bck_grey" style={{background:`url(${mountain_img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'}}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">
                    <Tooltip title="Check out our Github!">
                
                    
                    <a href = "https://github.com/SimronJ/Team2VenuProject"
                    style ={{
                        /*color changed*/
                        color: "#0057a7"
                        
                        }}
                    >Olympics Countdown
                    </a>
                </Tooltip>
                </div>
                <br></br>
                <div className="footer_copyright">JJAY TTP, Team 2. All rights reserved ©</div>
                <div className="footer_copyright">
                    <ul style ={{listStyleType: "none"}}>
                        <li>Team Leaders: Syeda, Ege, Hilal</li>
                        <li>Team Members: Robert, Cenk, Christopher, Ankit</li>
                        <li>Kirana, Humayun, Jeyrel, Chelsea,</li>
                        <li>Gabriel, Nanami, Michael, Md</li>


                    </ul>
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;