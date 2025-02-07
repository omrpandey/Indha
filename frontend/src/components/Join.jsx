import React from 'react'
import './join.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Join=()=>{
    return(
        <>
       <div className="join">
        <div className="top">
            <img src="./assets/car.jpg" alt="" />
        </div>
        <div className="bottom">
            <h3>Join Hands for a Better Tomorrrow,Make a Differnce</h3>
            <p></p>
            <div className="flex">
                <div className="card">
                    <span>
                        Amazing opportunity in marketing and sales to gain practical experience in the digital world.
                    </span>
                    <div className="boxy">
                      <div className="boxyLeft">
                        <div className="tick">
                            <div className="boxyFirst">
                            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'> Online marketing coordinator</span>
                            </div>
                        </div>
                      </div>
                    </div>
                    
                </div>
               </div>
                    
            <p></p>
        </div>
       </div>
        </>
    )
}