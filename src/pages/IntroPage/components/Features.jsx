import React from 'react'
import LottiAnimation from '../../../components/LottiAnimation/LottiAnimation'
import './Features.css'

// Virtual Classrooms , Assignments & Exams , Chats

function Features({text , lotti , lottiStyle , onClick}) {



    return (
        <div onClick={() => {

            onClick && onClick();

        }} className='features__full-div'>
            <div style={lottiStyle && lottiStyle} className='features__icon-div'>
                <LottiAnimation
                    lotti = { lotti && lotti }
                    height = '10rem'
                />
            </div>
            <div className='features__text-div'>
                <span className='features__text'>{text && text}</span>
            </div>
        </div>
    )
}

export default Features

