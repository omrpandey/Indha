import React from 'react'
import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
export const Main=()=>{
    return(
        <>
     <div className="left">
        <div className="logo">
            <img src="./assets/indha2.jpg" alt="" srcset="" />
        </div>
        <div className="tools">
            <h2>Admin Tools</h2>
            <div className="list">
                <span className="first">
                    <span className="icon">
<FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                    </span>
                    <span className="data">Dashboard</span>
                </span>
            </div>
        </div>
     </div>
        </>
    )
}