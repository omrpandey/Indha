import React from 'react'
import './join.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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
                        <span className="tick">
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                        <div> Online Marketing Coordinator</div></span>
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                        <div> Online Marketing Coordinator</div></span>
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                        <div> Online Marketing Coordinator</div></span>
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                        <div> Online Marketing Coordinator</div></span>
                        </span>
                        
                        <span className="img">
                            <img src="./assets/cccc1.png" alt="img" srcset="" />
                        </span>
                    </div>
                    
                </div>
                <div className="card">
                    <span>
                    Develop and hone your business skills while
                    helping brilliant businesses grow
                    </span>
                    <div className="boxy">
                        <span className="tick">
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                        <div> Human Resource  Coordinator</div></span>
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                        <div> Finance  Coordinatator</div></span>
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                        <div> Project management</div></span>
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                        <div> Informations</div></span>
                        </span>
                        
                        <span className="img">
                            <img src="./assets/cccc1.png" alt="img" srcset="" />
                        </span>
                    </div>
                    
                </div>
                <div className="card">
                    <span>
                    Use your technical expertise to help 
                    build the capabilities
                    </span>
                    <div className="boxy">
                        <span className="tick">
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                        <div> Software Developer</div></span>
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                        <div> Mobile Developer</div></span>
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                        <div> Website Developer</div></span>
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                        <div> Graphics Designer</div></span>
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                        <div> UI/UX Developer</div></span>
                   
                        </span>
                        
                        <span className="img">
                            <img src="./assets/cccc1.png" alt="img" srcset="" />
                        </span>
                    </div>
                    
                </div>
                <div className="card">
                    <span>
                    Help engineer the organization to innovate
                    and improve the products and processes
                    </span>
                    <div className="boxy">
                        <span className="tick">
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                        <div> Chemical Enginerring</div></span>
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                        <div> Eletrical Enginerring</div></span>
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                        <div> Texttile Engineering</div></span>
                        <span><FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                        <div>Product Designer</div></span>
                        </span>
                        
                        <span className="img">
                            <img src="./assets/cccc1.png" alt="img" srcset="" />
                        </span>
                    </div>
                    
                </div>

            </div>
            <p></p>
        </div>
       </div>
        </>
    )
}