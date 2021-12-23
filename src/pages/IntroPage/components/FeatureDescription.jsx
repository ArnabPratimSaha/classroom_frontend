import React, { memo, useEffect, useRef } from 'react'
import LottiAnimation from '../../../components/LottiAnimation/LottiAnimation'
import './FeatureDescription.css'

function FeatureDescription({lotti , description , style , color , isTextInLeft}) {

    const ref = useRef();
    const textRef = useRef();

    const observer = new IntersectionObserver(
        ([entry]) => {
            if(entry.isIntersecting){
                textRef.current.style.opacity = 1;
                textRef.current.style.transform = 'translateX(0) scale(1)';
            }

        }
      )
    
      useEffect(() => {
        observer.observe(textRef.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
      }, [])

    return (
        <div ref = {ref} style = {style && style} className='feature-description__full-div'>
            <div className='feature-description__lotti-div'>

                <LottiAnimation

                    className = 'feature-description__lotti'
                    lotti = {lotti && lotti}

                />

            </div>
            <div ref = {textRef} style={{borderColor : color && color , color : color && color , transform : `translateX(${isTextInLeft ? '-' : '+'}30px) scale(0.9)` , transformOrigin : `${isTextInLeft ? 'bottom left' : 'bottom right'}`}} className='feature-description__text-div'>
                <span className='feature-description__text'>

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book

                </span>
                <div style = {{backgroundColor : color && color}} className='feature-description__text-div__before'></div>
                <div style = {{backgroundColor : color && color}} className='feature-description__text-div__after'></div>
            </div>
        </div>
    )
}

export default memo(FeatureDescription);
