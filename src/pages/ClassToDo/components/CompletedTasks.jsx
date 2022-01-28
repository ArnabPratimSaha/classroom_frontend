import { memo, useState } from 'react'
import './CompletedTasks.css'
import { FaRegDotCircle } from 'react-icons/fa'

const CompletedTasks = () => {

    const [completedTasksArray , setCompletedTasksArray] = useState([{
        title : 'Make a Hash Table with generic array',
        isSubmitted : true
    }]);

    return(
        <div className='completed-tasks__full-div'>
            {completedTasksArray && completedTasksArray.map((eachCompletedTask) => {
                return(
                    <div key = {1} className='each-completed-task__full-div'>
                        <span className='each-completed-task__title'>{eachCompletedTask.title && eachCompletedTask.title}</span>
                        <br/>
                        <span style = {{color : eachCompletedTask.isSubmitted ? 'green' : 'red'}} className='each-completed-task__is-completed'><FaRegDotCircle className='each-completed-task__icon' />{eachCompletedTask.isSubmitted ? "Submitted" : "Not Submitted"}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default memo(CompletedTasks)