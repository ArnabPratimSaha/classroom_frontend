import { memo, useEffect } from "react"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { classPage } from '../../redux/actions/actions'
import './ClassPage.css'
import dummyCover from '../../images/dummyCover.jpg'
import { BsInfoLg } from 'react-icons/bs'
import Avatar from '../../components/Avatar/Avatar'
import PostCard from "../../components/PostCard/PostCard";
import LottiAnimation from "../../components/LottiAnimation/LottiAnimation";
import writePostLottie from '../../images/writePostLottie.json'

const ClassPage = () => {
    const {classId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(classPage(true))
        return () => {
            dispatch(classPage(false))
        }
    },[])

    

    return (
        <>
            <div className="class-feed__full-div">
                <div className="class-feed__inner-div">
                    <div className="class-feed__cover-pic__div">
                        <img className="class-feed__cover-pic" alt = 'dummy-cover' src = {dummyCover}/>
                        <div className="class-feed__heading-div">
                            <span className="class-feed__heading">Object Oriented Programming</span>
                        </div>
                        <div className="class-feed__info-button-div">
                            <button className="class-feed__info-button">
                                <BsInfoLg/>
                            </button>
                        </div>
                    </div>
                    <br/>
                    <div style = {{width : "60rem"}} className="underline"></div>
                    <br/>
                    <div className="class-feed__all-posts">
                        <PostCard
                            type = 'ASSIGNMENT'
                            assignmentTitle = 'Hashing'
                            uploadDate = {new Date()}
                            dueDate = {new Date()}
                        />
                        <PostCard
                            type = 'ASSIGNMENT'
                            assignmentTitle = 'Hashing'
                            uploadDate = {new Date()}
                            dueDate = {new Date()}
                        />
                        <PostCard
                            type = 'ASSIGNMENT'
                            assignmentTitle = 'Hashing'
                            uploadDate = {new Date()}
                            dueDate = {new Date()}
                        />
                        <PostCard
                            type = 'ASSIGNMENT'
                            assignmentTitle = 'Hashing'
                            uploadDate = {new Date()}
                            dueDate = {new Date()}
                        />
                        <PostCard
                            type = 'ASSIGNMENT'
                            assignmentTitle = 'Hashing'
                            uploadDate = {new Date()}
                            dueDate = {new Date()}
                        />
                        <PostCard
                            // type = 'ASSIGNMENT'
                            meetingTitle = 'Hashing'
                            uploadDate = {new Date()}
                            meetingScheduleDate = {new Date()}
                        />
                    </div>
                    <button className="new-post__button" style = {{backgroundColor : 'white'}}>
                        <LottiAnimation
                            lotti = {writePostLottie}
                        />
                    </button>
                </div>
            </div>
        </>
    )
}

export default memo(ClassPage)
