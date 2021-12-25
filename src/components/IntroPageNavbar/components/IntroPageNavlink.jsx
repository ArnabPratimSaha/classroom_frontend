import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import './IntroPageNavlink.css'

function IntroPageNavlink({linkText , linkStyle , linkWrapperStyle , link , linkIcon}) {

    const linkRef = useRef();

    const linkOnClickHandler = () => {

        linkRef.current.click();

    }

    return (
        <div style={linkWrapperStyle} onClick = {linkOnClickHandler} className='intropagenavlink__full-div'>
            <Link onClick={() => {console.log('clicked')}} style = {{display : 'none'}} ref = {linkRef} to = {link} />
            <div style={linkStyle} className='intropagenavlink__inner-div'>
                <div className='intropagenavlink__link-icon'>
                    {linkIcon}
                </div>
                <span className='intropagenavlink__link-text'>{linkText}</span>
            </div>
        </div>
    )
}

export default IntroPageNavlink
