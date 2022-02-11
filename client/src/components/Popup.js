import React from 'react'
import './Popup.css'

function Popup(props) {
  // <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
  return (props.trigger) ? (
    <div className="popup">
        <div className='popup-inner'>
           
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup