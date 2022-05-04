import { memo } from 'react'
import './InstituteCard.css'
import { BiBuildingHouse, BiBuildings } from 'react-icons/bi'
import { RiBuildingLine } from 'react-icons/ri'


const InstituteCard = ({education, index}) => {

    const IconArray = [<BiBuildings
        className='education-card__icon'
    />,
    <BiBuildingHouse
        style={{
            color: '#1DA1F2'
        }}
        className='education-card__icon'
    />,
    <RiBuildingLine
        style={{
            color: '#F89506'
        }}
        className='education-card__icon'
    />];

    return (
        <div className='education-card__full-div'>
            {IconArray[index % IconArray.length]}
            <div className='education-card__details-div'>
                <span style={{ fontWeight: '500' }} className='education-card__details-spans'>{education && education.instituteName}</span>
                <span className='education-card__details-spans'>{education && education.Degree}</span>
                <span className='education-card__details-spans'>{education && education.durationYear}</span>
            </div>
        </div>
    )
}

export default memo(InstituteCard)