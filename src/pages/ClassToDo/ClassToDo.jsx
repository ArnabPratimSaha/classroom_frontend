import { memo, useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { classPage } from "../../actions/actions";
import './ClassToDo.css'
import AssignedTasks from "./components/AssignedTasks";
import CompletedTasks from "./components/CompletedTasks";

const ClassToDo = () => {
    const {classId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(classPage(true))
        return () => {
            dispatch(classPage(false))
        }
    },[])

    const [showCompletedTasks , setShowCompletedTasks] = useState(false);

    const showAssignedTaskHandler = (e) => {
        setShowCompletedTasks(false);
    }

    const showCompletedTaskHandler = (e) => {
        setShowCompletedTasks(true);
    }

    return (
        <>
            <div className="class__to-do__full-div">
                <div className="class__to-do__inner-div">
                    <div className="class__to-do__nav-div">
                        <button style = {{color : !showCompletedTasks && '#6264A7'}} onClick = {showAssignedTaskHandler} className="class__to-do__nav-buttons">Assigned</button>
                        <button style = {{color : showCompletedTasks && '#6264A7'}} onClick = {showCompletedTaskHandler} className="class__to-do__nav-buttons">Completed</button>
                    </div>
                    {/* <br/> */}
                    <div style = {{marginTop : '5px'}} className="underline"></div>
                    <br/>
                    <div className="class__to-do__content-div">
                        {showCompletedTasks ? <CompletedTasks/> : <AssignedTasks/>}
                    </div>
                </div>
            </div>
        </>
    )
}



export default memo(ClassToDo)
