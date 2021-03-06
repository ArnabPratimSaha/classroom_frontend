import { memo, useEffect, useRef, useState } from "react";
import TopNavbarNavlinks from "./components/TopNavbarNavlinks";
import "./TopNavBar.css";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { AiOutlineLogout, AiFillSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdRssFeed } from "react-icons/md";
import { BsPen, BsPeople } from "react-icons/bs";
import Avatar from "../Avatar/Avatar";
import DropDownDiv from "./components/DropDownDiv";
import CreateClassForm from "./components/CreateClassForm";
import JoinClassForm from "./components/JoinClassForm";
import { useSelector } from "react-redux";
import { Navigate, useMatch, useNavigate } from "react-router-dom";
const noPic =
    "https://cdn.imgbin.com/14/14/14/imgbin-avatar-beard-icon-bearded-uncle-u7a1CeQFm4JCA4v8a97sbEgsa.jpg";

const TopNavBar = ({ }) => {
    const { isLoggedIn, accessToken, refreshToken, user, id } = useSelector(
        (state) => state.userReducer
    );
    const dropDownRef = useRef();
    const createClassFormRef = useRef();
    const joinClassFormRef = useRef();
    const modalRef = useRef();
    const profilePicDropDownRef = useRef();
    const navigate = useNavigate();

    const isClassPage = useSelector((state) => state.isClassPage);
    const classFeedMatch = useMatch("/class/:classId");
    const classTodoMatch = useMatch("/class-todo/:classId");
    const classPeopleMatch = useMatch("/class-people/:classId");

    const [classId, setClassId] = useState(null);
    // const [isUserCardVisible, setIsUserCardVisible] = useState(false);
    const [isClassButtonClick, setIsClassButtonClick] = useState(false);

    useEffect(() => {
        if (
            classFeedMatch &&
            classFeedMatch.params &&
            classFeedMatch.params.classId
        ) {
            setClassId(classFeedMatch.params.classId);
        } else if (
            classTodoMatch &&
            classTodoMatch.params &&
            classTodoMatch.params.classId
        ) {
            setClassId(classTodoMatch.params.classId);
        } else if (
            classPeopleMatch &&
            classPeopleMatch.params &&
            classPeopleMatch.params.classId
        ) {
            setClassId(classPeopleMatch.params.classId);
        }
    }, [classFeedMatch, classTodoMatch, classPeopleMatch]);
    useEffect(() => {
        if (isClassButtonClick && dropDownRef.current && dropDownRef.current.open) {
            dropDownRef.current.open();
        } else if (
            !isClassButtonClick &&
            dropDownRef.current &&
            dropDownRef.current.close
        ) {
            dropDownRef.current.close();
        }
    }, [isClassButtonClick]);

    const createClassButtonClickHandler = () => {
        if (modalRef && modalRef.current) {
            modalRef.current.style.display = "block";
        }

        if (createClassFormRef && createClassFormRef.current) {
            createClassFormRef.current.style.display = "block";
        }
    };

    const joinClassButtonClickHandler = () => {
        if (modalRef && modalRef.current) {
            modalRef.current.style.display = "block";
        }

        if (joinClassFormRef && joinClassFormRef.current) {
            joinClassFormRef.current.style.display = "block";
        }
    };

    const modalClickHandler = () => {
        if (modalRef.current) {
            modalRef.current.style.display = "none";
        }

        if (createClassFormRef.current) {
            createClassFormRef.current.style.display = "none";
        }

        if (joinClassFormRef.current) {
            joinClassFormRef.current.style.display = "none";
        }
    };
    const handleLogout = async () => {
        try {
            // (await logOut())&&navigate('/')
        } catch (error) { }
    };
    return (
        <>
            <div className="top-navbar__full-div">
                <div className="top-navbar__logo-div">O-Class</div>

                {isClassPage && (
                    <div className="top-navbar__navlinks-div">
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
                    </div>
                )}

                <div className="top-navbar__right-div">
                    <button
                        className="top-navbar__join-create-class__div"
                        onBlur={() => {
                            setIsClassButtonClick(false);
                        }}
                    >
                        {!isClassButtonClick ? (
                            <IoAddCircleOutline
                                className="top-navbar__join-create-class__icon"
                                onClick={() => {
                                    setIsClassButtonClick((s) => !s);
                                }}
                            />
                        ) : (
                            <IoRemoveCircleOutline
                                className="top-navbar__join-create-class__icon"
                                onClick={() => {
                                    dropDownRef.current.open();
                                    setIsClassButtonClick((s) => !s);
                                }}
                            />
                        )}
                        <DropDownDiv
                            ref={dropDownRef}
                            itemArray={[
                                <span
                                    onClick={() => {
                                        joinClassButtonClickHandler();
                                    }}
                                    key={1}
                                >
                                    Join Class
                                </span>,
                                <span
                                    onClick={() => {
                                        createClassButtonClickHandler();
                                    }}
                                    key={2}
                                >
                                    Create Class
                                </span>,
                            ]}
                        />
                    </button>
                    <button
                        className="top-navbar__user-info"
                        onBlur={() => {
                            profilePicDropDownRef.current.close();
                        }}
                    >
                        <Avatar
                            image={user.avatar}
                            height="3rem"
                            width="3rem"
                            onClick={() => {
                                profilePicDropDownRef.current.open();
                            }}
                        />

                        <DropDownDiv
                            style={{
                                minWidth: "12rem",
                                width: "fit-content",
                                height: "fit-content",
                            }}
                            ref={profilePicDropDownRef}
                            itemArray={[
                                // <div className="top-navbar__user-card__username" ><span>{user && user.name}</span></div>,
                                <div onClick = {() => {id && navigate(`/profilepage/${id}`)}} className="top-navbar__user-card__link">
                                    <CgProfile style={{ marginRight: "10px" }} />
                                    Profile
                                </div>,
                                <div className="top-navbar__user-card__link">
                                    <AiFillSetting style={{ marginRight: "10px" }} />
                                    Settings
                                </div>,
                                <div
                                    style={{ color: "red" }}
                                    className="top-navbar__user-card__link"
                                >
                                    <AiOutlineLogout style={{ marginRight: "10px" }} />
                                    Logout
                                </div>,
                            ]}
                        />
                    </button>
                </div>
            </div>
            <div
                ref={modalRef}
                onClick={() => {
                    modalClickHandler();
                }}
                className="top-navbar__modal"
            ></div>
            <CreateClassForm
                ref={createClassFormRef}
                id={id}
                accessToken={accessToken}
                refreshToken={refreshToken}
            />
            <JoinClassForm ref={joinClassFormRef} />
        </>
    );
};

export default memo(TopNavBar);
