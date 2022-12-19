import React from 'react'
import image  from './../component/brand-1.png';
import a  from './../component/brand-2.png';
import b  from './../component/brand-3.png';
import c  from './../component/brand-4.png';
import d  from './../component/brand-5.png';




const Logo = () => {
  return (
    <div className='logodisplay'>
        <a className='logo1' href='#'><img src={image}></img></a>
        <a href='#'><img src={a}></img></a>
        <a className='logo1' href='#'><img src={b}></img></a>
        <a className='logo1' href='#'><img src={c}></img></a>
        <a className='logo1' href='#'><img src={d}></img></a>
    </div>
  )
}

export default Logo;