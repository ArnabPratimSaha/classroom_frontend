import { memo, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar';
import { IoAddOutline } from 'react-icons/io5'
import { BiRightArrow } from 'react-icons/bi'
import { BsPencil, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { FaGithubSquare } from 'react-icons/fa'

import './ProfilePage.css'
import InstituteCard from '../../components/InstituteCard/InstituteCard';
import ContactCards from './components/ContactCards';
import AddContactForm from './components/AddContactForm/AddContactForm';

const ProfilePage = () => {

    const contactFormRef = useRef();
    const { userId } = useParams();
    const { isLoggedIn, accessToken, refreshToken, user, id } = useSelector(state => state.userReducer);
    const [isMyPage, setIsMyPage] = useState(false);


    const [educationDetails, setEducationDetails] = useState([{
        instituteName: 'Kalyani University Experimental High School',
        Degree: 'Secondary',
        durationYear: '2010 - 2016'
    },
    {
        instituteName: 'Chakdaha Ramlal Academy',
        Degree: 'Higher Secondary',
        durationYear: '2016 - 2018'
    },
    {
        instituteName: 'National Institute of Technology, Durgapur',
        Degree: 'B.Tech',
        durationYear: '2019 - 2023'
    }]);

    useEffect(() => {

        if (!id || !userId) return;
        console.log({ user });
        setIsMyPage(id === userId);

    }, [id, userId, user])

    if (!id || !userId) {
        return (
            <>
                Loading ...
            </>
        )
    }

    const openAddContactForm = () => {
        if(contactFormRef && contactFormRef.current && contactFormRef.current.open){
            contactFormRef.current.open();
        }
    }

    return (
        <>
            <AddContactForm
                ref = {contactFormRef}
            />
            <div className='profile-page__full-div'>
                <div className='profile-page__inner-div'>
                    <div className='profile-page__upper-div'>
                        <div className='profile-page__cover-pic__div'></div>
                        <div className='profile-page__avatar-div'>
                            <Avatar
                                image={user && user.avatar && user.avatar}
                                height='100%'
                                width='100%'

                            />
                        </div>
                        <div className='profile-page__bio-div'>
                            {user && user.name && <span className='profile-page__name-span'>
                                {user.name}
                            </span>}
                            <div style={{ backgroundColor: 'black', height: '2px' }} className='underline' />
                        </div>
                        <br />
                        <div className='profile-page__about-div'>
                            <div className='profile-page__user-details__div'>
                                <div className='profile-page__user-details__upper-div'>
                                    <span style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '500',
                                        color: '#455265',
                                        // textDecoration : 'underline'
                                        // borderBottom : '2px solid #404040'
                                    }}>User Details</span>
                                    <BsPencil
                                        style={{
                                            color: '#404040',
                                            cursor: 'pointer',
                                            fontSize: '1.2rem',
                                            fontWeight: 'bold'
                                        }}
                                    />
                                    <IoAddOutline
                                        style={{
                                            color: '#404040',
                                            cursor: 'pointer',
                                            fontSize: '1.6rem',
                                            fontWeight: 'bold'
                                        }}
                                    />
                                </div>
                                <div className='underline' style={{ width: 'calc(100% + 20px)', transform: 'translateX(-10px)', marginTop: '10px' }} />
                                <br />
                                <div style={{ marginLeft: '15px' }}>
                                    <span style={{ fontWeight: '500', fontSize: '1.1rem' }}>Email</span>
                                    <br />
                                    <span style={{ marginBottom: '15px', display: 'inline-flex', alignItems: 'flex-end', color: '#F89506' }}><BiRightArrow style={{ fontWeight: '100', marginRight: '5px' }} /><a style={{ color: '#F89506' }} href='mailto:sushantasaren2000@gmai.com'>sushantasaren2000@gmail.com</a></span>
                                    <br />
                                    <span style={{ fontWeight: '500', fontSize: '1.1rem' }}>City</span>
                                    <br />
                                    <span style={{ display: 'flex', marginBottom: '10px', color: '#404030' }}> Payradanga</span>
                                    <span style={{ fontWeight: '500', fontSize: '1.1rem' }}>Country</span>
                                    <br />
                                    <span style={{ marginBottom: '15px', color: '#404030' }}> India</span>
                                    <br />
                                </div>
                            </div>
                            <br />
                            <div className='profile-page__education-div'>
                                <div className='profile-page__education-div__upper-div'>
                                    <span style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '500',
                                        color: '#455265',
                                        // textDecoration : 'underline'
                                    }}>Education</span>
                                    <BsPencil
                                        style={{
                                            color: '#404040',
                                            cursor: 'pointer',
                                            fontSize: '1.2rem',
                                            fontWeight: 'bold'
                                        }}
                                    />
                                    <IoAddOutline
                                        style={{
                                            color: '#404040',
                                            cursor: 'pointer',
                                            fontSize: '1.6rem',
                                            fontWeight: 'bold'
                                        }}
                                    />
                                </div>
                                <div className='underline' style={{ width: 'calc(100% + 20px)', transform: 'translateX(-10px)', marginTop: '10px' }} />
                                <br />
                                <div>
                                    {
                                        educationDetails && educationDetails.length > 0 && educationDetails.map((eachEducation, index) => {
                                            return (
                                                <div key={index}>
                                                    <InstituteCard
                                                        education={eachEducation}
                                                        index={index}
                                                    />
                                                    {index < educationDetails.length - 1 && <div className='underline' />}
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            <br />
                            <div className='profile-page__course-undertaken__div'>
                                <div className='profile-page__course-undertaken__upper-div'>
                                    <span style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '500',
                                        color: '#455265',
                                        // textDecoration : 'underline'
                                    }}>Courses Undertaken</span>
                                    <BsPencil
                                        style={{
                                            color: '#404040',
                                            cursor: 'pointer',
                                            fontSize: '1.2rem',
                                            fontWeight: 'bold'
                                        }}
                                    />
                                </div>
                                <div className='underline' style={{ width: 'calc(100% + 20px)', transform: 'translateX(-10px)', marginTop: '10px' }} />
                                <br />
                                <div>

                                </div>
                            </div>
                            <br />
                            <div className='profile-page__interest-contact__div'>
                                <div className='profile-page__interest-div'>
                                    <div className='profile-page__contact__upper-div'>
                                        <span style={{
                                            fontSize: '1.4rem',
                                            fontWeight: '500',
                                            color: '#455265',
                                            // textDecoration : 'underline'
                                        }}>Interest</span>
                                        <BsPencil
                                            style={{
                                                color: '#404040',
                                                cursor: 'pointer',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold'
                                            }}
                                        />
                                        <IoAddOutline
                                            style={{
                                                color: '#404040',
                                                cursor: 'pointer',
                                                fontSize: '1.6rem',
                                                fontWeight: 'bold'
                                            }}
                                        />
                                    </div>
                                    <div className='underline' style={{ width: 'calc(100% + 20px)', transform: 'translateX(-10px)', marginTop: '10px' }} />
                                    <br />
                                </div>
                                <div className='profile-page__contact-details__div'>
                                    <div className='profile-page__contact__upper-div'>
                                        <span style={{
                                            fontSize: '1.4rem',
                                            fontWeight: '500',
                                            color: '#455265',
                                            // textDecoration : 'underline'
                                        }}>Contact</span>
                                        <BsPencil
                                            onClick = {openAddContactForm}
                                            style={{
                                                color: '#404040',
                                                cursor: 'pointer',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold'
                                            }}
                                        />
                                        <IoAddOutline
                                            style={{
                                                color: '#404040',
                                                cursor: 'pointer',
                                                fontSize: '1.6rem',
                                                fontWeight: 'bold'
                                            }}
                                        />
                                    </div>
                                    <div className='underline' style={{ width: 'calc(100% + 20px)', transform: 'translateX(-10px)', marginTop: '10px' }} />
                                    <br />
                                    <div className='profile-page__contact__lower-div' >
                                        <ContactCards
                                            link='mailto:sushantasaren2000@gmail.com'
                                            text='Gmail'
                                            icon={<SiGmail />}
                                        />
                                        <ContactCards
                                            link='github.com/i9f3ct3d'
                                            text='Github'
                                            icon={<FaGithubSquare style={{
                                                color: '#404040'
                                            }} />}
                                            style={{
                                                backgroundColor: '#030A0D',
                                                borderColor: '#030A0D'
                                            }}
                                        />
                                        <ContactCards
                                            link='github.com/i9f3ct3d'
                                            text='LinkedIn'
                                            icon={<BsLinkedin style={{
                                                color: '#0866C3'
                                            }} />}
                                            style={{
                                                backgroundColor: '#0866C3',
                                                borderColor: '#0866C3'
                                            }}
                                        />
                                        <ContactCards
                                            link='github.com/i9f3ct3d'
                                            text='Twitter'
                                            icon={<BsTwitter style={{
                                                color: '#0866C3'
                                            }} />}
                                            style={{
                                                backgroundColor: '#0866C3',
                                                borderColor: '#0866C3'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(ProfilePage)