import React from 'react'
import './popup.css'

function popup(props) {

    return (
        
        <div className="speech-bubble">
            {props.begin ? <p className="speech-text"> Please Enter Your {props.missed}</p> :
            props.success ? 
            <p className="speech-text"> {props.name}أحسنت</p>
            : <p className="speech-text">لابأس يمكنك الأفضل {props.name}</p>
        }
        </div>
            
   
    
   
    )
}

export default popup
