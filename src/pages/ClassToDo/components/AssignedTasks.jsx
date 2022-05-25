import { memo } from 'react'
import './AssignedTasks.css'
import { FaRegDotCircle } from 'react-icons/fa'

const AssignedTasks = ({assignment, onClick}) => {

    return (
        <div onClick={() => {
            onClick && onClick();
        }} key={Math.random()} className='each-assigned-task__full-div'>
            <span className='each-assigned-task__title'>{assignment && assignment.title}</span>
            <br />
            <span className='each-assigned-task__due-date'><FaRegDotCircle className='each-assigned-task__icon' />{`Due : ${assignment && new Date(assignment.lastSubmittedDate).toLocaleDateString()}`}</span>
        </div>
    )
}

export default memo(AssignedTasks);