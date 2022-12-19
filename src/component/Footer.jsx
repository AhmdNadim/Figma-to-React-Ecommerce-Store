import React from 'react'
import facebook from './../component/facebook.png';
import twitter from './../component/twitter.png';
import linkedin from './../component/linkedin.png';
import dribble from './../component/dribbble.png';
const Footer = () => {
    return (
        <div class="ft">
            <div class="ftmenu">
                <ul>
                    <li className='coral'><svg width="31" height="15" viewBox="0 0 31 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.353554 7.5L7.5 0.353554L14.6464 7.5L7.5 14.6464L0.353554 7.5Z" stroke="black" stroke-width="0.5" />
                        <path d="M8.35355 7.5L15.5 0.353554L22.6464 7.5L15.5 14.6464L8.35355 7.5Z" stroke="black" stroke-width="0.5" />
                        <path d="M16.3536 7.5L23.5 0.353554L30.6464 7.5L23.5 14.6464L16.3536 7.5Z" stroke="black" stroke-width="0.5" />
                    </svg>
                    <h1>CORAL</h1>
                    <svg width="31" height="15" viewBox="0 0 31 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.353554 7.5L7.5 0.353554L14.6464 7.5L7.5 14.6464L0.353554 7.5Z" stroke="black" stroke-width="0.5" />
                        <path d="M8.35355 7.5L15.5 0.353554L22.6464 7.5L15.5 14.6464L8.35355 7.5Z" stroke="black" stroke-width="0.5" />
                        <path d="M16.3536 7.5L23.5 0.353554L30.6464 7.5L23.5 14.6464L16.3536 7.5Z" stroke="black" stroke-width="0.5" />
                    </svg></li>
                    <li className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua
                    </li>
                    <div className='icons para'>
                    <li><a href='https://www.facebook.com/'><img src={facebook} /></a></li>
                    <li><a href='twitter.com'><img src={twitter} /></a></li>
                    <li><a href='linkedin.com'><img src={linkedin} /></a></li>
                    <li><a href='dribble.com'><img src={dribble} /></a></li>
                    </div>
                </ul>
            </div>
            <div class="ftmenu">
                <ul>
                    <li className='h4'>CATELOG</li>
                    <li><a href=""> Necklces</a></li>
                    <li><a href="">Hoddies</a></li>
                    <li><a href="">Jewelry Box</a></li>
                    <li><a href="">T-Shirt</a></li>
                    <li><a href="">jacket</a></li>
                </ul>
            </div>
            <div class="ftmenu">
                <ul>
                    <li className='h4'>ABOUT US</li>
                    <li><a href="">Our Products</a></li>
                    <li><a href="">Sitemap</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                </ul>
            </div>
            <div class="ftmenu">
                <ul>
                    <li className='h4'>CUSTOMER SERVICES</li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Track Your Order</a></li>
                    <li><a href="">Product Care & Repair</a></li>
                    <li><a href="">Book An Appointment</a></li>
                    <li><a href="">Shipping & Returns</a></li> 
                </ul>
            </div>
        </div>
    )
}

export default Footer
