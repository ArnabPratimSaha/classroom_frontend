import { forwardRef, memo, useImperativeHandle, useRef, useState } from 'react'
import './AddContactForm.css'

import Buttons from '../../../../components/Buttons/Buttons'
import { FaGithubSquare } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { IoAdd } from 'react-icons/io5'

const AddContactForm = ({},ref) => {

    const [additionalSocialLinks, setAdditionalSocialLinks] = useState([]);
    const formDivRef = useRef();
    const modalRef = useRef();

    useImperativeHandle(ref , () => ({
        open : () => {
            console.log('clicked');
            if(formDivRef && formDivRef.current && modalRef && modalRef.current){
                formDivRef.current.style.display = 'block';
                modalRef.current.style.display = 'block';
            }
        }
    }))

    return (
        <>
            <div className='modal' ref = {modalRef} onClick = {() => {
                if(formDivRef && formDivRef.current && modalRef && modalRef.current){
                    formDivRef.current.style.display = 'none';
                    modalRef.current.style.display = 'none'
                }
            }} />
            <div ref = {formDivRef} className='add-contact-details-form__div'>
                <span style={{
                    fontSize: '1.4rem',
                    fontWeight: '500',
                    color: '#455265',
                }}>Add Contact Details</span>
                <div style={{
                    width: 'calc(100% + 20px)',
                    transform: 'translateX(-10px)',
                    marginTop: '10px',
                    height: '0.5px'
                }} className='underline' />
                <br />
                <form className='add-contact__form'>
                    <SiGmail
                        className='add-contact__icons'
                    />
                    <input className='add-contact__input' placeholder='Gmail address' />
                    <FaGithubSquare
                        className='add-contact__icons'
                    />
                    <input className='add-contact__input' placeholder='Github link' />
                    <BsLinkedin
                        className='add-contact__icons'
                    />
                    <input className='add-contact__input' placeholder='LinkedIn link' />
                    <BsTwitter
                        className='add-contact__icons'
                    />
                    <input className='add-contact__input' placeholder='Twitter link' />
                    {
                        additionalSocialLinks && additionalSocialLinks.length > 0 && additionalSocialLinks.map((eachLinks, index) => {
                            return (
                                eachLinks
                            );
                        })
                    }
                </form>
                <br />
                <div style={{ width: 'calc(100% + 20px)', transform: 'translateX(-10px)' }} className='underline' />
                <br />
                <Buttons
                    onClick={() => {
                        setAdditionalSocialLinks(prev => {
                            return [...prev, <div key={prev.length}>
                                <BsTwitter
                                    className='add-contact__icons'
                                />
                                <input className='add-contact__input' placeholder='Twitter link' />
                            </div>]
                        })
                    }}
                    icon={<IoAdd style={{ fontSize: '1.2rem' }} />}
                    text={<span style={{ fontSize: '1.2rem', fontWeight: '300' }}>Add a social link</span>}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#455265',
                        borderColor: '#455265',
                        width: '10rem',
                        height: '2rem',
                        padding: '0 10px 2px 10px'
                    }}
                />
            </div>
        </>
    )
}

export default memo(forwardRef(AddContactForm))