import React from 'react'
import './Buttons.css'

function Buttons({icon,text,style,onClick,className,type}) {

    return (
        <button type = {type && type} onClick={(e) => { onClick && onClick(e)}} style={style} className={`buttons__full-div ${className && className}`}>
            <div className='buttons_icon-div'>
                {icon}
            </div>
            <span className='buttons_text'>{text}</span>
        </button>
    )
}

export default Buttons
