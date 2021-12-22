import React from 'react'
import { Link } from 'react-router-dom';
import './IntroPageNavlink.css'

function IntroPageNavlink({linkText , linkStyle , linkWrapperStyle , link , linkIcon}) {

    const linkOnClickHandler = () => {

        window.location = link;

    }

    return (
        <Link to = {link} style={linkWrapperStyle} onClick = {linkOnClickHandler} className='intropagenavlink__full-div'>
            <div style={linkStyle} className='intropagenavlink__inner-div'>
                <div className='intropagenavlink__link-icon'>
                    {linkIcon}
                </div>
                <span className='intropagenavlink__link-text'>{linkText}</span>
            </div>
        </Link>
    )
}

export default IntroPageNavlink
