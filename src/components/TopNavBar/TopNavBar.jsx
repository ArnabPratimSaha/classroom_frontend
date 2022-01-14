import { memo, useRef } from "react";
import TopNavbarNavlinks from "./components/TopNavbarNavlinks";
import "./TopNavBar.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdRssFeed } from "react-icons/md";
import { BsPen, BsPeople } from "react-icons/bs";
import Avatar from "../Avatar/Avatar";
import DropDownDiv from "./components/DropDownDiv";
import CreateClassForm from "./components/CreateClassForm";
import JoinClassForm from "./components/JoinClassForm";


const TopNavBar = () => {
    const dropDownRef = useRef();
    const createClassFormRef = useRef();
    const joinClassFormRef = useRef();
    const modalRef = useRef();

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

            <div className="top-navbar__navlinks-div">
                <TopNavbarNavlinks
                    text="Class Feed"
                    to="/home"
                    icon={<MdRssFeed />}
                />
                <TopNavbarNavlinks
                    text="To-Do"
                    to="/todo"
                    icon={<BsPen />}
                />
                <TopNavbarNavlinks
                    text="People"
                    to="/people"
                    icon={<BsPeople />}
                />
            </div>

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
