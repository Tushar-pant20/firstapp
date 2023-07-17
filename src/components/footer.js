import React from 'react';
import "./footer.css";
function Footer() {
  return (
    <>
        <div className='wrapper'>
            <div className='row'>
                <button className='btn'>Google Play</button>
                <button className='btn'>Apple Store</button>
            </div>

            <div className='copyright'>
                @tusharpant copyright 2023 
            </div>
        </div> 
    </>
  )
}

export default Footer