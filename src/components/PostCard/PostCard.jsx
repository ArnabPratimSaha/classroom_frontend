import { memo } from 'react'
import Avatar from '../Avatar/Avatar'
import Buttons from '../Buttons/Buttons'
import './PostCard.css'
import { BsTelephone } from 'react-icons/bs'
import { BiDotsVerticalRounded } from 'react-icons/bi'

const PostCard = ({type , assignmentTitle , uploadDate , dueDate               , meetingTitle , meetingScheduleDate}) => {

    const getMonthName = (date) => {
        const month = date.getMonth() + 1;

        switch(month){
            case 1 : {
                return 'Jan';
            }
            case 2 : {
                return 'Feb';
            }
            case 3 : {
                return 'Mar';
            }
            case 4 : {
                return 'Apr';
            }
            case 5 : {
                return 'May';
            }
            case 6 : {
                return 'Jun';
            }
            case 7 : {
                return 'Jul';
            }
            case 8 : {
                return 'Aug';
            }
            case 9 : {
                return 'Sep';
            }
            case 10 : {
                return 'Oct';
            }
            case 11 : {
                return 'Nov';
            }
            case 12 : {
                return 'Dec';
            }
            default : return 'undefined'
        }
    }

    if(type === 'ASSIGNMENT'){
        return(
            <div className='postcard__assignment__full-div'>
                <div className='postcard__assignment__avatar-div'>
                    <Avatar
                        height = '3rem'
                        width = '3rem'
                    />
                </div>
                <div className='postcard__assignment__content-div'>
                    <div className='postcard__assignment__upper-div'>
                        <span className='postcard__assignment__header'>ASSIGNMENT</span>
                        {uploadDate && <span className='postcard__assignment__upload-date'>{uploadDate.getDate().toString() + "-" + (uploadDate.getMonth() < 9 ? ("0" + (uploadDate.getMonth() + 1).toString()) : (uploadDate.getMonth() + 1).toString()) + "-" + uploadDate.getFullYear().toString() + " || " + uploadDate.getHours().toString() + ":" + uploadDate.getMinutes().toString()}</span>}
                    </div>
                    <div className='postcard__assignment__lower-div'>
                        <div className='postcard__assignment-title__div'>
                            <span className='postcard__assignment-title'>{assignmentTitle && assignmentTitle}</span>
                        </div>
                        {/* <div style = {{}} className='underline'></div> */}
                        <br/>
                        {dueDate && <span className='postcard__assignment-due-date'>{"Due : " + getMonthName(dueDate) + " " + dueDate.getDate().toString()}</span>}
                        <br/>
                        <br/>
                        <div style = {{width : 'calc(100% + 20px)' , transform : 'translateX(-10px)'}} className='underline'></div>
                        <br/>
                        <Buttons
                            style = {{
                                height : '2.5rem',
                                width : '10rem',
                                backgroundColor : 'rgba(25,103,210,0.1)',
                                color : 'rgb(25,103,210)',
                                borderColor : 'rgb(25,103,210)',
                            }}
                            text = 'View assignment'
                        />
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className='postcard__meeting__full-div'>
            <div className='postcard__meeting__avatar-div'>
                <Avatar
                    height = '3rem'
                    width = '3rem'
                />
            </div>
            <div className='postcard__meeting__content-div'>
                <div className='postcard__meeting__upper-div'>
                    <span className='postcard__meeting__header'>MEETING</span>
                    {uploadDate && <span className='postcard__meeting__upload-date'>{uploadDate.getDate().toString() + "-" + (uploadDate.getMonth() < 9 ? ("0" + (uploadDate.getMonth() + 1).toString()) : (uploadDate.getMonth() + 1).toString()) + "-" + uploadDate.getFullYear().toString() + " || " + uploadDate.getHours().toString() + ":" + uploadDate.getMinutes().toString()}</span>}
                </div>
                <div className='postcard__meeting__lower-div'>
                    <div className='postcard__meeting__lower__left-div'>
                        <div className='postcard__meeting__icon-div'>
                            <BsTelephone/>
                        </div>
                        <div className='postcard__meeting__title-div'>
                            <span className='postcard__meeting__title'>{meetingTitle && meetingTitle}</span>
                            <br/>
                            {meetingScheduleDate && <span className='postcard__meeting__scheduled-date'>{getMonthName(meetingScheduleDate) + " " + meetingScheduleDate.getDate() + " at " + meetingScheduleDate.getHours().toString() + ":" + meetingScheduleDate.getMinutes().toString()}</span>}
                        </div>
                    </div>
                    <div className='postcard__meeting__lower__right-div'>
                        <BiDotsVerticalRounded/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(PostCard)