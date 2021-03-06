import axios from "axios";
import { memo, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { classPage } from "../../redux/actions/actions";
import './ClassToDo.css'
import AssignedTasks from "./components/AssignedTasks";
import CompletedTasks from "./components/CompletedTasks";

const ClassToDo = () => {
    const {classId} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id , accessToken , refreshToken } = useSelector(state => state.userReducer);
    const [showCompletedTasks , setShowCompletedTasks] = useState(false);
    const [allAssignments, setAllAssignments] = useState([]);

    useEffect(() => {
        dispatch(classPage(true))
        return () => {
            dispatch(classPage(false))
        }
    },[])


    const showAssignedTaskHandler = (e) => {
        setShowCompletedTasks(false);
    }

    const showCompletedTaskHandler = (e) => {
        setShowCompletedTasks(true);
    }

    useEffect(() => {

        const func = async() => {
            if(!classId || !id || !accessToken || !refreshToken) return;

            try {
                const res = await axios({
                    method : 'GET',
                    url : `${process.env.REACT_APP_API}/assignment/allassignments`,
                    headers : {
                        id : id,
                        accesstoken : accessToken,
                        refreshtoken : refreshToken,
                        classid : classId,
                    }
                });
    
                if(res.status === 200){
                    console.log(res.data.assignments);
                    setAllAssignments(res.data.assignments);
                }
                
            } catch (error) {
                console.log({error});
            }

        }

        func();

    } , [classId , id , accessToken , refreshToken])

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
                        {/* {showCompletedTasks ? <CompletedTasks/> : <AssignedTasks/>} */}
                        {
                            allAssignments && allAssignments.length > 0 && allAssignments.map((e) => {
                                return new Date() >= new Date(e.lastSubmittedDate)  ?  (showCompletedTasks && <CompletedTasks onClick = {() => {
                                    navigate(`/assignment/${classId}/${e.id}`)
                                }} key = {e._id} assignment = {e} />) : (!showCompletedTasks && <AssignedTasks onClick = {() => {
                                    navigate(`/assignment/${classId}/${e.id}`)
                                }} key = {e._id} assignment = {e} />)
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}



export default memo(ClassToDo)
