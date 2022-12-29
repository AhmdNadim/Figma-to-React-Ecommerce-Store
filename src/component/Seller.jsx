import React, { Fragment } from 'react';
import image from './../component/image-category-1.png';
import a from './../component/image-category-2.png';
import b from './../component/image-category-3.png';
import c from './../component/image-category-4.png';
import Carousel from 'react-elastic-carousel';
import 'react-multi-carousel/lib/styles.css';

const breakpoint = [

];


const Seller = () => {
    return (
        <>
            <section>
                <div className='seller'>
                    <p>Best Sellers</p>
                    <ul className='link001'>
                        <li className='link01'>All Products</li>
                        <li className='link02'>T-Shirt</li>
                        <li className='link03'>Hoddies</li>
                        <li className='link04'>Jacket</li>
                        <button className='btn1 btn btn-outline-dark'>Show All</button>
                    </ul>
                    <div class="row1">
                        <Carousel breakpoint={breakpoint}>
                            <div className='product'>
                                <div className="product-thumb">
                                    <a href='#'><img src={image} alt="Card image cap" /></a>
                                    <div class="product-body">
                                        <div className='title'>
                                            <h5>Brown reserved cort</h5>
                                        </div>
                                        <div className='cener'>
                                            <h4>Dress</h4>
                                            <h6>$104.92</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='product'>
                                <div className="product-thumb">
                                    <a href='#'><img src={a} alt="Card image cap" /></a>
                                    <div class="product-body">
                                        <div className='title'>
                                            <h5>Black reserved cort</h5>
                                        </div>
                                        <div className='cener'>
                                            <h4>Dress</h4>
                                            <h6>$104.92</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='product'>
                                <div className="product-thumb">
                                    <a href='#'><img src={b} alt="Card image cap" /></a>
                                    <div class="product-body">
                                        <div className='title'>
                                            <h5>Gray reserved cort</h5>
                                        </div>
                                        <div className='cener'>
                                            <h4>Dress</h4>
                                            <h6>$104.92</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='product'>
                                <div className="product-thumb">
                                    <a href='#'><img src={c} alt="Card image cap" /></a>
                                    <div class="product-body">
                                        <div className='title'>
                                            <h5>Black reserved cort</h5>
                                        </div>
                                        <div className='cener'>
                                            <h4>Dress</h4>
                                            <h6>$104.92</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Seller;
