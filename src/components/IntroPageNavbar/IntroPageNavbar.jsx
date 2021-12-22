import React from 'react'
import IntroPageNavlink from './components/IntroPageNavlink'
import './IntroPageNavbar.css'

import { BsPatchQuestion } from 'react-icons/bs'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md'
import {FaRegIdCard} from 'react-icons/fa'
import {AiOutlineLogin} from 'react-icons/ai'
import Buttons from '../Buttons/Buttons'

function IntroPageNavbar() {
    return (
        <div className='intropagenavbar__full-div'>
            <div className='intropagenavbar__upper-div'>
                <div className='intropagenavbar__logo-div'>
                    <span>LOGO</span>
                </div>
                <div className='intropagenavbar__signin-div'>
                    <Buttons
                        icon = {<AiOutlineLogin/>}
                        text = 'Sign in'
                    />
                </div>
            </div>
            <div className='intropagenavbar__lower-div'>
                <div className='intropagenavbar__site-name-div'>
                    <span className='intropagenavbar__site-name'>
                        O-Class
                    </span>
                </div>
                <div className='intropagenavbar__navlinks-div'>
                    <IntroPageNavlink
                        link = 'whyus'
                        linkText = 'Why Us'
                        linkIcon = {<BsPatchQuestion/>}
                    />
                    <IntroPageNavlink
                        link = 'products'
                        linkText = 'Other Products'
                        linkIcon={<MdOutlineProductionQuantityLimits/>}
                    />
                    <IntroPageNavlink
                        link = 'about'
                        linkText = 'About Us'
                        linkIcon={<FaRegIdCard/>}
                    />
                </div>
            </div>
        </div>
    )
}

export default IntroPageNavbar
