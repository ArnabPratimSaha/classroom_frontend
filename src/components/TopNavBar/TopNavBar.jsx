import { memo, useRef } from "react";
import TopNavbarNavlinks from "./components/TopNavbarNavlinks";
import "./TopNavBar.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdRssFeed } from "react-icons/md";
import { BsPen, BsPeople } from "react-icons/bs";
import Avatar from "../Avatar/Avatar";
import DropDownDiv from "./components/DropDownDiv";


const TopNavBar = () => {
    const dropDownRef = useRef();

    const addOrJoinClassButtonClickHandler = () => {
        if (dropDownRef && dropDownRef.current) {
            dropDownRef.current.classList.toggle("open-drop-down__div");
        }
    };

    return (
        <div className="top-navbar__full-div">
            <div className="top-navbar__logo-div"></div>

            <div className="top-navbar__navlinks-div">
                <TopNavbarNavlinks text="Class Feed" to="/home" icon={<MdRssFeed />} />
                <TopNavbarNavlinks text="To-Do" to="/todo" icon={<BsPen />} />
                <TopNavbarNavlinks text="People" to="/people" icon={<BsPeople />} />
            </div>

            <div className="top-navbar__right-div">
                <div className="top-navbar__join-create-class__div">
                    <IoAddCircleOutline
                        className="top-navbar__join-create-class__icon"
                        onClick={addOrJoinClassButtonClickHandler}
                    />
                    {/* <div
                        ref={dropDownRef}
                        className="top-navbar__join-create-class__drop-down__div"
                    >
                        <div className="top-navbar__join-create-class__drop-down__items">
                            Join Class
                        </div>
                        <div className="top-navbar__join-create-class__drop-down__items">
                            Create Class
                        </div>
                    </div> */}
                    <DropDownDiv
                        ref = {dropDownRef}
                        itemArray = {[<span key = {1}>Join Class</span> , <span key = {2}>Create Class</span>]}
                    />
                </div>
                <Avatar height="3.5rem" width="3.5rem" />
            </div>
        </div>
    );
};

export default memo(TopNavBar);
