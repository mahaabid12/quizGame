import React from 'react'
import './help.css'

function Help(props) {
    return (
        <div className="overlay">
        <div className="popup">
            <button className="close" onClick={()=>props.setHelp(false)}> &times;</button>
        </div>
            
        </div>
    )
}

export default Help
