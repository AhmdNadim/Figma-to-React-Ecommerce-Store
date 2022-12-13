import React from 'react'
import image  from '../component/image-category-1.png';
import a  from '../component/image-category-2.png';
import b  from '../component/image-category-3.png';
import c  from '../component/image-category-4.png';
import d  from '../component/image-category-5.png';

const Category = () => {
  return (
    <div className='main'>
        <p className='text'>Explore new and popular styles</p>
        <img className='main1' src={image}></img>
        <img className='main2' src={a}></img>
        <img className='main3' src={b}></img>
        <img className='main4' src={c}></img>
        <img className='main5' src={d}></img>
    </div>
  )
}

export default Category;