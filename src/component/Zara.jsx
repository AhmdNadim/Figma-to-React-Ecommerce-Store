import React from 'react'
import zara from './../component/zaracollect.png';
import zara1 from './../component/Zara_Logo 1.png';

const Zara = () => {
  return (
    <div>
        <img className='zara' src={zara}></img>
        <img className='zara1' src={zara1}></img>
        <div className='contain'>
            <h2>ZARA</h2>
            <p>Lustrous yet understated. The new evening
wear collection exclusively offered at the
reopened Giorgio Armani boutique in Los
Angeles.</p>
            <button className='btn btn-outline-dark'>See Collection</button>
        </div>
    </div>
  )
}

export default Zara;
