import { memo, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { classPage } from '../../redux/actions/actions'
import './ClassPage.css'
import dummyCover from '../../images/dummyCover.jpg'
import { BsInfoLg } from 'react-icons/bs'
import Avatar from '../../components/Avatar/Avatar'
import axios from 'axios';
import PostCard from "../../components/PostCard/PostCard";
import LottiAnimation from "../../components/LottiAnimation/LottiAnimation";
import writePostLottie from '../../images/writePostLottie.json'
import NewAssignmentForm from "./components/NewAssignmentForm";

const ClassPage = () => {
    const { classId } = useParams();
    const dispatch = useDispatch();
    const newAssignmentFormRef = useRef();
    const navigate = useNavigate();

    const { isLoggedIn, accessToken, refreshToken, user, id } = useSelector(state => state.userReducer);
    
    const [classData , setClassData] = useState(null);
    const [assignmentsArray , setAssignmentsArray] = useState([]);

    useEffect(() => {
        dispatch(classPage(true))
        return () => {
            dispatch(classPage(false))
        }
    }, [])

    useEffect(() => {

        const func = async() => {
            if(!id || !refreshToken || !accessToken || !classId) return;

            try {
                const res = await axios({
                    method : 'GET',
                    url : `${process.env.REACT_APP_API}/class/info`,
                    headers : {
                        id : id,
                        accesstoken : accessToken,
                        refreshtoken : refreshToken,
                        classid : classId,
                    }
                });
    
                if(res.status === 200){
                    setClassData(res.data.classData);
                }
            } catch (error) {
                console.log({error});
            }
        }

        func();

    },[id , classId , accessToken , refreshToken])

    useEffect(() => {

        const func = async() => {

            if(!id || !refreshToken || !accessToken || !classId) return;

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
                    console.log(res.data.assignments.length);
                    setAssignmentsArray(res.data.assignments);
                }
            } catch (error) {
                console.log({error});
            }

        }

        func();

    },[id , classId , accessToken , refreshToken])


    useEffect(() => {
        console.log(assignmentsArray);
    },[assignmentsArray])

    return (
        <>
            <NewAssignmentForm
                ref={newAssignmentFormRef && newAssignmentFormRef}
                id={id && id}
                classId={classId && classId}
                accessToken={accessToken && accessToken}
                refreshToken={refreshToken && refreshToken}
            />
            <div className="class-feed__full-div">
                <div className="class-feed__inner-div">
                    <div className="class-feed__cover-pic__div">
                        <img className="class-feed__cover-pic" alt='dummy-cover' src={dummyCover} />
                        <div className="class-feed__heading-div">
                            <span className="class-feed__heading">{classData && classData.name}</span>
                        </div>
                        <div className="class-feed__info-button-div">
                            <button className="class-feed__info-button">
                                <BsInfoLg />
                            </button>
                        </div>
                    </div>
                    <br />
                    <div style={{ width: "60rem" }} className="underline"></div>
                    <br />
                    <div className="class-feed__all-posts">
                        {
                            assignmentsArray && assignmentsArray.length > 0 && assignmentsArray.map((eachAssignment) => {
                                return(
                                    <PostCard
                                        viewAssignmentButtonClickHandler = {() => {
                                            navigate(`/assignment/${classId}/${eachAssignment.id}`)
                                        }}
                                        key = {eachAssignment.id}
                                        type = 'ASSIGNMENT'
                                        assignmentTitle = {eachAssignment.title}
                                        uploadDate = {new Date(eachAssignment.createdAt)}
                                        dueDate = {eachAssignment.lastSubmittedDate && new Date(eachAssignment.lastSubmittedDate)}
                                    />
                                )
                            })
                        }
                        <PostCard
                            // type = 'ASSIGNMENT'
                            meetingTitle='Hashing'
                            uploadDate={new Date()}
                            meetingScheduleDate={new Date()}
                        />
                    </div>
                    <button
                        onClick={() => {
                            if (newAssignmentFormRef.current && newAssignmentFormRef.current.open) {
                                newAssignmentFormRef.current.open();
                            }
                        }}
                        className="new-post__button" style={{ backgroundColor: 'white' }}>

                        <LottiAnimation
                            lotti={writePostLottie}
                        />
                    </button>
                </div>
            </div>
        </>
    )
}

export default memo(ClassPage)
