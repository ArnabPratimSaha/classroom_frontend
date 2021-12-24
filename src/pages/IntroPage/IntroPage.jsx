import React, { memo } from 'react'
import Buttons from '../../components/Buttons/Buttons';
import IntroPageNavbar from '../../components/IntroPageNavbar/IntroPageNavbar';
import LottiAnimation from '../../components/LottiAnimation/LottiAnimation';
import intropageLotti1 from '../../images/80356-online-learning.json'

import {AiOutlineLogin} from 'react-icons/ai'
import {IoPersonAddOutline} from 'react-icons/io5'

import AssignmentLotti from '../../images/assignmentsLotti.json'
import OnlineClassroomLotti from '../../images/onlineClassroom.json'
import ChatFeatureLotti from '../../images/chatbubblesLotti.json'

import ChatsDescriptionLotti from '../../images/chatFeatureLotti.json'
import OnlineClassroomDescriptionLotti from '../../images/onlineClassroomDescriptionLotti.json'
import AssignmentDescriptionLotti from '../../images/assignmentDescriptionLotti.json'

import './IntroPage.css';
import Features from './components/Features';
import FeatureDescription from './components/FeatureDescription';

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
                            <div className='intropage__upper-div__right-div__tagline2-div'>
                                <span className='intropage__upper-div__right-div__tagline2'>Pack your whole institute in a tiny screen</span>
                            </div>
                            <div className='intropage__upper-div__right-div__buttons-div'>
                                <Buttons
                                    icon = {<IoPersonAddOutline/>}
                                    text = 'Get Started'
                                    className='intropage__button__signup'
                                    onClick = {() => {
                                        window.location = 'http://localhost:5000/auth';
                                    }}
                                />
                                <Buttons
                                    icon = {<AiOutlineLogin/>}
                                    text = 'Sign in'
                                    onClick = {() => {
                                        window.location = 'http://localhost:5000/auth';
                                    }}
                                    className='intropage__button__login'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='intropage__features-div'>
                    {/* <span className='intropage__features-span'>Features</span> */}
                    <div className='intropage__features-inner-div'>
                        <Features
                            lotti = {OnlineClassroomLotti}
                            text = 'Virtual Classrooms'
                            onClick={() => {
                                    document.getElementById('feature-description__1').scrollIntoView({
                                        behavior : 'smooth'
                                    })
                            }}
                        />
                        <Features
                            lotti = {AssignmentLotti}
                            text = 'Assignments & Exams'
                            onClick={() => {
                                    document.getElementById('feature-description__2').scrollIntoView({
                                        behavior : 'smooth'
                                    })
                            }}
                        />
                        <Features
                            lotti = {ChatFeatureLotti}
                            text = 'Asking for help'
                            lottiStyle = {{
                                transform : 'translateY(-15px)'
                            }}
                            onClick={() => {
                                    document.getElementById('feature-description__3').scrollIntoView({
                                        behavior : 'smooth'
                                    })
                            }}
                        />
                    </div>
                </div>

                <div className='intropage__features-description-div'>
                    <FeatureDescription
                        id = 'feature-description__1'
                        lotti={OnlineClassroomDescriptionLotti}
                        isLottiInLeft = {false}
                        title = 'Virtual Classrooms'
                    />
                    <br/>
                    <FeatureDescription
                        id = 'feature-description__2'
                        style = {{
                            flexDirection : 'row-reverse'
                        }}
                        isTextInLeft = {true}
                        lotti={AssignmentDescriptionLotti}
                        color = 'orange'
                        title = 'Assignments & Exams'
                    />
                    <br/>
                    <FeatureDescription
                        id = 'feature-description__3'
                        isLottiInLeft = {false}
                        color = '#3155BE'
                        lotti={ChatsDescriptionLotti}
                        title = 'Asking for help'
                    />
                </div>

            </div>
        </div>
    )
}

export default memo(IntroPage)
