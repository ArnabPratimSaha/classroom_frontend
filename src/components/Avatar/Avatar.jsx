import { memo } from 'react'
import './Avatar.css'

const noPic = 'https://cdn.imgbin.com/14/14/14/imgbin-avatar-beard-icon-bearded-uncle-u7a1CeQFm4JCA4v8a97sbEgsa.jpg'

const Avatar = ({image , onClick , style , height , width}) => {

    return (
        <div style = {{ height : height && height , width : width && width}} onClick={() => {onClick && onClick()}} className='avatar__full-div'>
            <img style={style && style} alt = 'avatar' src = {image ? image : noPic} className='avatar-image'/>
        </div>
    )
}

export default memo(Avatar)
