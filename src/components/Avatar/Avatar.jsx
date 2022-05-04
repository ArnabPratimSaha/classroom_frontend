import { Children, memo } from 'react'
import './Avatar.css'
import noPicImage from '../../images/noPic.jpg'

const noPic = 'https://img.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg'

const Avatar = ({ image, onClick, style, height, width, borderColor, onBlur }) => {

    return (
        <div style={{ height: height && height, width: width && width, borderColor: borderColor && borderColor }} onClick={() => { onClick && onClick() }} onBlur={() => onBlur && onBlur()} className='avatar__full-div'>
            <img style={{ ...style }} alt='avatar' src={image || noPicImage} className='avatar-image' />
        </div>
    )
}

export default memo(Avatar)
