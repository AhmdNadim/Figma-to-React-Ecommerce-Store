import React from 'react';
import image from './../component/card5.png';
import a from './../component/card2.png';
import b from './../component/card3.png';
import c from './../component/card6.png';

const Seller = () => {
    return (
        <div className='seller'>
            <p>Best Sellers</p>
            <ul className='link001'>
                <li className='link01'>All Products</li>
                <li className='link02'>T-Shirt</li>
                <li className='link03'>Hoddies</li>
                <li className='link04'>Jacket</li>
                <button className='btn1 btn btn-outline-dark'>Show All</button>
            </ul>
            <div className='imgss'>
                <img className='card01' src={image}></img>
                <img className='card02' src={a}></img>
                <img className='card03' src={b}></img>
                <img className='card04' src={c}></img>
            </div>
        </div>
    )
}

export default Seller;
       