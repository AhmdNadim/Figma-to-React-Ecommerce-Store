import React, { useState } from 'react';
import image from './../component/card7.png';
import images from './../component/card6.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    var [count, setCount] = useState(0)
    const increase = () => {
        setCount(count = count + 1)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <svg width="31" height="15" viewBox="0 0 31 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.353554 7.5L7.5 0.353554L14.6464 7.5L7.5 14.6464L0.353554 7.5Z" stroke="black" stroke-width="0.5" />
                        <path d="M8.35355 7.5L15.5 0.353554L22.6464 7.5L15.5 14.6464L8.35355 7.5Z" stroke="black" stroke-width="0.5" />
                        <path d="M16.3536 7.5L23.5 0.353554L30.6464 7.5L23.5 14.6464L16.3536 7.5Z" stroke="black" stroke-width="0.5" />
                    </svg>
                    <a className="h1 text-dark fs-4" href="#">
                        CORAL
                    </a>
                    <svg width="31" height="15" viewBox="0 0 31 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.353554 7.5L7.5 0.353554L14.6464 7.5L7.5 14.6464L0.353554 7.5Z" stroke="black" stroke-width="0.5" />
                        <path d="M8.35355 7.5L15.5 0.353554L22.6464 7.5L15.5 14.6464L8.35355 7.5Z" stroke="black" stroke-width="0.5" />
                        <path d="M16.3536 7.5L23.5 0.353554L30.6464 7.5L23.5 14.6464L16.3536 7.5Z" stroke="black" stroke-width="0.5" />
                    </svg>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="bar navbar-nav mx-auto mb-2">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/sign">Address</a>
                            </li>

                        </ul>
                        <div className='buttons'>
                            <Link to={'/login'}>

                                <span className='btn as m-2'>
                                    Login
                                </span>
                            </Link>
                        </div>
                        <div className='buttons'>
                            <Link to={'/sign'}>

                                <span className='btn as m-2'>
                                    Register
                                </span>
                            </Link>
                        </div>
                        <div className='buttons'>
                            <a onClick={increase} className='btn as m-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /> </svg> Cart<span> {count}</span>
                                <ul className="cart">
                                    <h3>SHOPPING CART</h3>
                                    <div className='prod'>
                                        <p>PRODUCT</p>
                                        <h6>PRICE</h6>
                                    </div>
                                    <div className='produ'>
                                        <img src={image} />
                                        <p>$1398</p>
                                    </div>
                                    <div className='produc'>
                                        <img src={images} />
                                        <p>$1398</p>
                                    </div>
                                    <button>check out</button>
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;