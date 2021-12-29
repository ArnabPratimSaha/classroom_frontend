import React, { memo } from 'react'
import './TopNavbarNavlinks.css'
import { NavLink } from 'react-router-dom'

const defaultActiveStyle = {
    borderBottomColor : '#1967D2' , color : '#1967D2'
}

const TopNavbarNavlinks = ({text , to , icon , activeStyle}) => {
    
    return (
        <NavLink style={({isActive}) => isActive ? (activeStyle ? activeStyle : defaultActiveStyle) : undefined} to = {to && to} className='top-navbar__navlinks__full-div'>
            <div className='top-navbar__navlinks__icon-div'>
                {icon && icon}
            </div>
            <div className='top-navbar__navlinks__text-div'>
                <span className='top-navbar__navlinks__text'>{text && text}</span>
            </div>
        </NavLink>
    )
}

export default memo(TopNavbarNavlinks)
