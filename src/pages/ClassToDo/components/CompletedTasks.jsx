import { memo } from 'react'
import './CompletedTasks.css'
import { FaRegDotCircle } from 'react-icons/fa'

const CompletedTasks = ({assignment, id, onClick}) => {

    return (
        <div onClick={() => {
            onClick && onClick()
        }} key={Math.random()} className='each-completed-task__full-div'>
            <span className='each-completed-task__title'>{assignment && assignment.title}</span>
            <br />
            <span
                style = {{color : (assignment && assignment.submittedStudent && assignment.submittedStudent.includes(id)) ? 'green' : 'red'}} 
                className='each-completed-task__is-completed'><FaRegDotCircle className='each-completed-task__icon' />
                {(assignment && assignment.submittedStudent && assignment.submittedStudent.includes(id)) ? "Submitted" : "Not Submitted"}
            </span>
        </div>
    )
}

export default memo(CompletedTasks)