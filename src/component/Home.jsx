import React from 'react';
import image from './../component/image-product.png';

const Home = () => {
    return (
        <div className='Body-padding'>
            <div className='collect'>
                <h5>Collections</h5>
                <p>you can explore ans shop many differnt collection
                    from various barands here.</p>
                <button className='btn btn-outline-dark'>
                    Shop Now
                </button>
            </div>
            <div className='img'>
                <img src={image}></img>
            </div>
        </div>
    )
}

export default Home;
