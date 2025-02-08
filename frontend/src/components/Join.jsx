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
                    <span className='jTitle'>
                        Amazing opportunity in marketing and sales to gain practical experience in the digital world.
                    </span>
                    <div className="boxy">
                      
                        <div className="tick">
                            <div className="boxyFirst">
                            <FontAwesomeIcon className='boxyIco' icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'> Online marketing coordinator</span>
                            </div>
                            <div className="boxyFirst">
                            <FontAwesomeIcon  className='boxyIco' icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'> Market Research and Analyst</span>
                            </div>
                            <div className="boxyFirst">
                            <FontAwesomeIcon  className='boxyIco' icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'> Bussiness Development Executive</span>
                            </div>
                            <div className="boxyFirst">
                            <FontAwesomeIcon  className='boxyIco' icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'>Bussiness Adminstrator</span>
                            </div>
                        </div>
                        <div className="rightImage">
                           <span className="img">
                           <img src="./assets/cccc1.png" alt=""  height="250px" width={"250px"}/>
                           </span>
                        </div>
                      
                    </div>
                    
                </div>
              
                <div className="card">
                    <span className='jTitle'>
                        Amazing opportunity in marketing and sales to gain practical experience in the digital world.
                    </span>
                    <div className="boxy">
                      
                        <div className="tick">
                            <div className="boxyFirst">
                            <FontAwesomeIcon className='boxyIco' icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'> Human Resources coordinator</span>
                            </div>
                            <div className="boxyFirst">
                            <FontAwesomeIcon  className='boxyIco' icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'> Finance</span>
                            </div>
                            <div className="boxyFirst">
                            <FontAwesomeIcon  className='boxyIco' icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'> Project Management</span>
                            </div>
                            <div className="boxyFirst">
                            <FontAwesomeIcon  className='boxyIco' icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'>Informations</span>
                            </div>
                        </div>
                        <div className="rightImage">
                           <span className="img">
                           <img src="./assets/HRM.jpg" alt=""  height="200px" width={"200px"}/>
                           </span>
                        </div>
                      
                    </div>
                    
                </div>
                <div className="card">
                    <span className='jTitle'>
                        Amazing opportunity in marketing and sales to gain practical experience in the digital world.
                    </span>
                    <div className="boxy">
                      
                        <div className="tick">
                            <div className="boxyFirst">
                            <FontAwesomeIcon className='boxyIco' icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'> Software Developer</span>
                            </div>
                            <div className="boxyFirst">
                            <FontAwesomeIcon  className='boxyIco' icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'> Mobile Developer</span>
                            </div>
                            <div className="boxyFirst">
                            <FontAwesomeIcon  className='boxyIco' icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'>Web Developer</span>
                            </div>
                            <div className="boxyFirst">
                            <FontAwesomeIcon  className='boxyIco' icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'>Content Writer</span>
                            </div>
                            <div className="boxyFirst">
                            <FontAwesomeIcon  className='boxyIco' icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'>Graphic Designer</span>
                            </div>
                        
                           
                        </div>
                        <div className="rightImage">
                           <span className="img">
                           <img src="./assets/cccc2.png" alt=""  height="250px" width={"250px"}/>
                           </span>
                        </div>
                      
                    </div>
                    
                </div>
                <div className="card">
                    <span className='jTitle'>
                        Amazing opportunity in marketing and sales to gain practical experience in the digital world.
                    </span>
                    <div className="boxy">
                      
                        <div className="tick">
                            <div className="boxyFirst">
                            <FontAwesomeIcon className='boxyIco' icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'> Online marketing coordinator</span>
                            </div>
                            <div className="boxyFirst">
                            <FontAwesomeIcon  className='boxyIco' icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'> Market Research and Analyst</span>
                            </div>
                            <div className="boxyFirst">
                            <FontAwesomeIcon  className='boxyIco' icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'> Bussiness Development Executive</span>
                            </div>
                            <div className="boxyFirst">
                            <FontAwesomeIcon  className='boxyIco' icon={faCheck} style={{ color: "green" }} />
                            <span className='join_txt'>Bussiness Adminstrator</span>
                            </div>
                        </div>
                        <div className="rightImage">
                           <span className="img">
                           <img src="./assets/cccc3.jpg" alt=""  height="200px" width={"200px"}/>
                           </span>
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