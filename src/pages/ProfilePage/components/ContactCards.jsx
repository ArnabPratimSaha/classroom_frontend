import { memo } from 'react'
import './ContactCards.css'

const ContactCards = ({icon, text, link, style}) => {
    return (
        <a href={`${link && link}`} style = {style && style} className='contact-card__div'>
            <div className='contact-card__icon-div'>
                {icon && icon}
            </div>
            <div className='contact-card__text-div'>
                <span className='contact-card__text'>{text && text}</span>
            </div>
        </a>
    )
}

export default memo(ContactCards)