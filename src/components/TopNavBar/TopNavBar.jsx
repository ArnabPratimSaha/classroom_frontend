import { memo, useEffect, useRef, useState } from "react";
import TopNavbarNavlinks from "./components/TopNavbarNavlinks";
import "./TopNavBar.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdRssFeed } from "react-icons/md";
import { BsPen, BsPeople } from "react-icons/bs";
import Avatar from "../Avatar/Avatar";
import DropDownDiv from "./components/DropDownDiv";
import CreateClassForm from "./components/CreateClassForm";
import JoinClassForm from "./components/JoinClassForm";
import { useSelector } from "react-redux";
import { useMatch } from "react-router-dom";


const TopNavBar = () => {
    const dropDownRef = useRef();
    const createClassFormRef = useRef();
    const joinClassFormRef = useRef();
    const modalRef = useRef();
    const isClassPage = useSelector(state => state.isClassPage)

    const classFeedMatch = useMatch('/class/:classId')
    const classTodoMatch = useMatch('/class-todo/:classId')
    const classPeopleMatch = useMatch('/class-people/:classId')

    const [classId , setClassId] = useState(null)

    useEffect(() => {

        if(classFeedMatch && classFeedMatch.params && classFeedMatch.params.classId){
            setClassId(classFeedMatch.params.classId)
        }else if(classTodoMatch && classTodoMatch.params && classTodoMatch.params.classId){
            setClassId(classTodoMatch.params.classId)
        }else if(classPeopleMatch && classPeopleMatch.params && classPeopleMatch.params.classId){
            setClassId(classPeopleMatch.params.classId)
        }

    },[classFeedMatch , classTodoMatch , classPeopleMatch])

    const addOrJoinClassButtonClickHandler = () => {
        if (dropDownRef && dropDownRef.current && dropDownRef.current.open) {
            // dropDownRef.current.classList.toggle("open-drop-down__div");
            dropDownRef.current.open();
        }
    };

    const createClassButtonClickHandler = () => {
        if(modalRef && modalRef.current){
            modalRef.current.style.display = 'block';
        }

        if(createClassFormRef && createClassFormRef.current){
            createClassFormRef.current.style.display = 'block'
        }
    }

    const joinClassButtonClickHandler = () => {
        if(modalRef && modalRef.current){
            modalRef.current.style.display = 'block';
        }

        if(joinClassFormRef && joinClassFormRef.current){
            joinClassFormRef.current.style.display = 'block'
        }
    }

    const modalClickHandler = () => {

        if(modalRef && modalRef.current){
            modalRef.current.style.display = 'none';
        }

        if(createClassFormRef && createClassFormRef.current){
            createClassFormRef.current.style.display = 'none'
        }

        if(joinClassFormRef && joinClassFormRef.current){
            joinClassFormRef.current.style.display = 'none'
        }

    }

    return (
        <>
        <div className="top-navbar__full-div">
            <div className="top-navbar__logo-div">
                O-Class
            </div>

            {isClassPage && <div className="top-navbar__navlinks-div">
                <TopNavbarNavlinks
                    text="Class Feed"
                    to={`/class/${classId && classId}`}
                    icon={<MdRssFeed />}
                />
                <TopNavbarNavlinks
                    text="To-Do"
                    to={`/class-todo/${classId && classId}`}
                    icon={<BsPen />}
                />
                <TopNavbarNavlinks
                    text="People"
                    to={`/class-people/${classId && classId}`}
                    icon={<BsPeople />}
                />
            </div>}

            <div className="top-navbar__right-div">
                <div className="top-navbar__join-create-class__div">
                    <IoAddCircleOutline
                        className="top-navbar__join-create-class__icon"
                        onClick={addOrJoinClassButtonClickHandler}
                    />
                    <DropDownDiv
                        ref={dropDownRef}
                        itemArray={[<span onClick={() => {joinClassButtonClickHandler()}} key={1}>Join Class</span>, <span onClick={() => {createClassButtonClickHandler()}} key={2}>Create Class</span>]}
                    />
                </div>
                <Avatar height="3.5rem" width="3.5rem" />
            </div>
        </div>
            <div ref = {modalRef} onClick={() => {modalClickHandler()}} className="top-navbar__modal"></div>
            <CreateClassForm
                ref = {createClassFormRef}
            />
            <JoinClassForm
                ref = {joinClassFormRef}
            />
        </>
    );
};

export default memo(TopNavBar);
