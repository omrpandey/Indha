import React from 'react'
import './productui.css'
export const Productui=()=>{
return(
    <>
  <div className="ui">
    <div className="ui-left">
        <img src="./assets/nw3.png" alt="" />
    </div>

    <div className="ui-right">
        <div className="ui-title">
            <h3>The Best Headphones Ever</h3>
            
        </div>
        <div className="ui-desc">
        <p className='diff'>Product Id: <span className="val">001</span></p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus aliquid perspiciatis eum nostrum, soluta nulla doloribus in nobis voluptatem quaerat.</p>
        </div>

        <div className="ui-size">
            <ul>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>EXL</li>
            </ul>
        </div>
        <div className="add-cart">
            <button className="ui-btn">
                Buy Now!
            </button>
            <button className="ui-save">
                Add to Wishlist
            </button>
        </div>
    </div>
  </div>

    </>
)
}