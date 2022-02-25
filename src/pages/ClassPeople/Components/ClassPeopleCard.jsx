import { memo } from "react"
import './ClassPeopleCard.css'
import Avatar from '../../../components/Avatar/Avatar'
import { BiDotsVerticalRounded } from 'react-icons/bi'

const ClassPeopleCard = ({avatarImage , name , rollNo}) => {
    return(
        <div className="class-people-card__full-div">
            <div className="class-people-card__avatar-div">
                <Avatar
                    image = {avatarImage && avatarImage}
                    height = '3rem'
                    width = '3rem'
                    borderColor = '#E0DFDC'
                />
            </div>
            <div className="class-people-card__info-div">
                <span className="class-people-card__name">{name && name}</span>
                <br/>
                <span className="class-people-card__roll-no">{rollNo && rollNo}</span>
            </div>
            <div className="class-people-card__dots-div">
                <BiDotsVerticalRounded/>
            </div>
        </div>
    )
}

export default memo(ClassPeopleCard)