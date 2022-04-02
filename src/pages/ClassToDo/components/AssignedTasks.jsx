import { memo, useEffect, useState } from 'react'
import './AssignedTasks.css'
import { FaRegDotCircle } from 'react-icons/fa'

const AssignedTasks = () => {

    const [assignedTasksArray , setAssignedTasksArray] = useState([{
        title : "Make a Hash Table with generic array",
        due : new Date()
    },
    {
        title : "Make a Hash Table with generic array",
        due : new Date()
    }]);

    useEffect(() => {

        //req to fetch assigned tasks array

    },[])

    return(
        <div className='assigned-tasks__full-div'>
            {assignedTasksArray && assignedTasksArray.map((eachAssignedTask) => {
                return(
                    <div key = {Math.random()} className='each-assigned-task__full-div'>
                        <span className='each-assigned-task__title'>{eachAssignedTask.title && eachAssignedTask.title}</span>
                        <br/>
                        <span className='each-assigned-task__due-date'><FaRegDotCircle className='each-assigned-task__icon' />{"Due : " + eachAssignedTask.due.toLocaleString()}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default memo(AssignedTasks);