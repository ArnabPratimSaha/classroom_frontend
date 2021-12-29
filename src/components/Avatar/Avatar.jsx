import { memo } from 'react'
import './Avatar.css'

const Avatar = ({image , onClick , style }) => {

    return (
        <div onClick={() => {onClick && onClick()}} className='avatar__full-div'>
            <img style={style && style} alt = 'avatar' src = {image && image} className='avatar-image'/>
        </div>
    )
}

export default memo(Avatar)
