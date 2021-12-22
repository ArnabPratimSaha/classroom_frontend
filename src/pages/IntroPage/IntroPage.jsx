import React, { memo } from 'react'
import Buttons from '../../components/Buttons/Buttons';
import IntroPageNavbar from '../../components/IntroPageNavbar/IntroPageNavbar';
import LottiAnimation from '../../components/LottiAnimation/LottiAnimation';
import intropageLotti1 from '../../images/80356-online-learning.json'

import {AiOutlineLogin} from 'react-icons/ai'
import {IoPersonAddOutline} from 'react-icons/io5'

import './IntroPage.css';

function IntroPage() {
    return (
        <div className='intropage__full-div'>
            <IntroPageNavbar/>
            <div className='intropage__inner-div'>
                <div className='intropage__upper-div'>
                    <div className='intropage__upper-div__left-div'>
                        <LottiAnimation
                            lotti = {intropageLotti1}
                            height = '100%'
                            width = '100%'
                        />
                    </div>
                    <div className='intropage__upper-div__right-div'>
                        <div className='intropage__upper-div__right-inner-div'>
                            <div className='intropage__upper-div__right-div__site-name-div'>
                                <span className='intropage__upper-div__right-div__site-name'>O-Class</span>
                            </div>
                            <div className='intropage__upper-div__right-div__tagline-div'>
                                <span className='intropage__upper-div__right-div__tagline'>
                                    You learn best when we are together
                                </span>
                            </div>
                            <div className='intropage__upper-div__right-div__buttons-div'>
                                <Buttons
                                    icon = {<IoPersonAddOutline/>}
                                    text = 'Get Started'
                                    className='intropage__button__signup'
                                />
                                <Buttons
                                    icon = {<AiOutlineLogin/>}
                                    text = 'Sign in'
                                    className='intropage__button__login'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(IntroPage)
