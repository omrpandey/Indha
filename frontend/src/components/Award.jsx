import React from 'react'
import './award.css'
export const Award=()=>{
    return(
        <>
    <div className="award">
        
                <div className="award-top">
                    <h3>Award Winning</h3>
                    <img src="./assets/ss.webp" alt="Store Banner" />
                </div>
                <div className="award-bottom">
                <div className="award-image">
                        <img src="./assets/award1.webp" alt="" />
                    </div>  
                    <div className="award-image">
                        <img src="./assets/aw2.webp" alt="" />
                    </div>
                    <div className="award-image">
                        <img src="./assets/aw3.webp" alt="" />
                    </div>
                    <div className="award-image">
                        <img src="./assets/aw4.webp" alt="" />
                    </div>
                </div>
                </div>
        </>
    )
}