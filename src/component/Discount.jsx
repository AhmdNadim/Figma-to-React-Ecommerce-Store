import React from 'react';
import { NavLink } from 'react-router-dom';
import b from './../component/discount1.png';
import c from './../component/discount2.png';
import d from './../component/discount3.png';
import e from './../component/discount4.png';
import f from './../component/discount5.png';
import g from './../component/discount6.png';

const Discount = () => {
  return (
    <div className='discount'>
        <p>Follow products and discounts on Instagram</p>
        <img className='discount1' src={b}></img>
        <img className='discount2' src={c}></img>
        <img className='discount3' src={d}></img>
        <img className='discount4' src={e}></img>
        <img className='discount5' src={f}></img>
        <img className='discount6' src={g}></img>
        <h6>Or subscribe to the newsletter</h6>
        <input className='input1' type="email" placeholder='Email Address...' id="email" name="email"></input>
        <NavLink to='/state'>
           <button className='input2'>
              Submit
           </button>
        </NavLink>
    </div>
  )
}

export default Discount;
