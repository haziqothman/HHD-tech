import React from 'react';
import "./Footer.css"
import "./Header.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
const Footer = () => {
    return (
        <div className='main-footer'>
            <div className="row">
                <div className="column" >
                    <h2 style={{ color: "black", fontSize:"1.5em" }}>About us</h2>
                    <hr/>
                    <p style={{ color: "black",marginTop:"20px", fontSize:"1.3em" }}>Runyi is a platform where you can find and compare prices on sublimation brands around the globe. We also provide an easiest way to shopping and make money
                    through selling your brand.
                    </p>
                </div>
                <div className="column2">
                    <h2 style={{ color: "black", fontSize:"1.5em" }}>Others</h2>
                    <hr/>
                    <p style={{ color: "black",marginTop:"20px", fontSize:"1.3em" }} >Privacy Policy</p>
                    <p style={{ color: "black",marginTop:"10px", fontSize:"1.3em" }} >Terms & Condition</p>
                    <p style={{ color: "black",marginTop:"10px", fontSize:"1.3em"}} >Contact Us</p>
                </div>
            </div>
            <div className="Socialicon">
                <div className="header__link">
                    <span>
                        <FacebookIcon/>
                    </span>
                </div>

                <div className="header__link">
                    <div className="header__optionBasket">
                        <span>
                        <InstagramIcon/>
                        </span>
                    </div>
                </div>

                <div className="header__link">
                    <div className="header__optionBasket">
                        <span>
                        <TwitterIcon />
                        </span>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="Patent">
                <p style={{ color: "black" }}>
                    &copy;{new Date().getFullYear()} HHD TECH | All right reserved | Term Of Services | Privacy </p>
            </div>

            
        </div>
    )
}
{/*<p className="column">
&copy;{new Date().getFullYear()} HHD TECH | All right reserved | Term Of Services | Privacy </p> */}
export default Footer;