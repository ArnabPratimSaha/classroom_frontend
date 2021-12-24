import React, { useRef } from 'react'
import IntroPageNavlink from './components/IntroPageNavlink'
import './IntroPageNavbar.css'

import { BsPatchQuestion } from 'react-icons/bs'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md'
import {FaRegIdCard} from 'react-icons/fa'
import {AiOutlineLogin} from 'react-icons/ai'
import Buttons from '../Buttons/Buttons'

function IntroPageNavbar() {

    const burgerButtonRef = useRef();
    const mobileNavbarRef = useRef();

    const BurgerButtonClickHandler = (e) => {

        if(burgerButtonRef && burgerButtonRef.current){

            if([...burgerButtonRef.current.classList].includes('open-intropage__navbar')){
                
                burgerButtonRef.current.classList.remove('open-intropage__navbar')
                mobileNavbarRef.current.style.display = 'none';

            }else{

                burgerButtonRef.current.classList.add('open-intropage__navbar')
                mobileNavbarRef.current.style.display = 'block';

            }
            
        }

    }

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
                        onClick={() => {
                            window.location = 'http://localhost:5000/auth';
                        }}
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
                <div onClick = {BurgerButtonClickHandler} className='intropagenavbar__burger-button__div'>
                    <div ref = {burgerButtonRef} className='intropagenavbar__burger-button'></div>
                </div>

                <div ref = {mobileNavbarRef} className='intropage__mobile-navbar'>
                    <div className='intropage__mobile-navbar__inner-div'>
                        <div className='intropage__mobile-navbar__navlinks-div'>
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
            </div>
        </div>
    )
}

export default IntroPageNavbar
