import { memo, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
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

    const [classData , setClassData] = useState(null);

    const { isLoggedIn, accessToken, refreshToken, user, id } = useSelector(state => state.userReducer);

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
                    console.log({res : res.data.name});
                }
            } catch (error) {
                console.log({error});
            }
        }

        func();

    },[id , classId , accessToken , refreshToken])


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
                            <span className="class-feed__heading">Object Oriented Programming</span>
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
                        <PostCard
                            type='ASSIGNMENT'
                            assignmentTitle='Hashing'
                            uploadDate={new Date()}
                            dueDate={new Date()}
                        />
                        <PostCard
                            type='ASSIGNMENT'
                            assignmentTitle='Hashing'
                            uploadDate={new Date()}
                            dueDate={new Date()}
                        />
                        <PostCard
                            type='ASSIGNMENT'
                            assignmentTitle='Hashing'
                            uploadDate={new Date()}
                            dueDate={new Date()}
                        />
                        <PostCard
                            type='ASSIGNMENT'
                            assignmentTitle='Hashing'
                            uploadDate={new Date()}
                            dueDate={new Date()}
                        />
                        <PostCard
                            type='ASSIGNMENT'
                            assignmentTitle='Hashing'
                            uploadDate={new Date()}
                            dueDate={new Date()}
                        />
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
