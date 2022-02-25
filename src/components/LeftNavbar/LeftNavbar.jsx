import { memo, useRef, useState } from "react";
import NavLinks from "./components/NavLinks";
import "./LeftNavbar.css";

import { AiOutlineHome, AiOutlineCalendar } from "react-icons/ai";
import { ImFilesEmpty } from "react-icons/im";
import { SiGooglescholar } from "react-icons/si";
import { BsCaretDown } from "react-icons/bs";
import { Outlet } from "react-router-dom";

const ClassAvatar = ({class_name , style}) => {
    return(
        <div style={style && style} className="class-avatar__full-div">
            <span className="class-avatar__starting-letter">{class_name && class_name[0]}</span>
        </div>
    )
}

const LeftNavbar = () => {

    const [isOpened , setIsOpened] = useState(false);
    const burgerButtonRef = useRef();

    const hamburgerButtonClickHandler = () => {

        burgerButtonRef.current.classList.toggle('open-intropage__navbar')
        setIsOpened(prev => !prev)

    }

    return (
        <div style={{ width: isOpened && '17rem', left: isOpened && '0' }} className="leftnavbar__fulldiv">
            <div style={{ left: isOpened && '8px' }} onClick={() => { hamburgerButtonClickHandler() }} className='leftnavbar__burger-button__div'>
                <div ref={burgerButtonRef} className='leftnavbar__burger-button'></div>
            </div>
            <div className="leftnavbar__navlinks__outer-div">
                <div className="leftnavbar__navlinks__inner-div">
                    <NavLinks
                        icon={<AiOutlineHome />}
                        text="Home"
                        to="/home"
                        activeStyle = {!isOpened &&{backgroundColor : 'transparent' , boxShadow : 'none'}}
                    />
                    <NavLinks
                        icon={<AiOutlineCalendar />}
                        text="Calendar"
                        to="/calendar"
                        activeStyle = {!isOpened &&{backgroundColor : 'transparent' , boxShadow : 'none'}}
                    />
                    <NavLinks
                        icon={<ImFilesEmpty />}
                        text="Private Files"
                        to="/privatefiles"
                        activeStyle = {!isOpened &&{backgroundColor : 'transparent' , boxShadow : 'none'}}
                    />
                </div>
                <div className="underline"></div>
                <div className="leftnavbar__mycourse-button">
                    <SiGooglescholar
                        style={{
                            fontSize: "1.6rem",
                        }}
                    />
                    <span className="leftnavbar__mycourse-button__span">My Courses</span>
                    <BsCaretDown
                        style={{
                            fontSize: "1.6rem",
                        }}
                        className="leftnavbar__mycourse__dropdown-icon"
                    />
                </div>
                <div className="leftnavbar__enrolled-classes__inner-div">
                    <NavLinks
                        icon={<ClassAvatar class_name = 'C++' />}
                        text="C++"
                        to="/home"
                        style = {{
                            paddingLeft : '12px'
                        }}
                        activeStyle = {!isOpened &&{backgroundColor : 'transparent' , boxShadow : 'none'}}
                    />
                    <NavLinks
                        icon={<ClassAvatar style = {{backgroundColor : '#607D8B'}} class_name = 'OOP' />}
                        text="OOP"
                        to="/calendar"
                        style = {{
                            paddingLeft : '12px'
                        }}
                        activeStyle = {!isOpened &&{backgroundColor : 'transparent' , boxShadow : 'none'}}
                    />
                    <NavLinks
                        icon={<ClassAvatar class_name = 'SAS' />}
                        text="SAS"
                        to="/privatefiles"
                        style = {{
                            paddingLeft : '12px'
                        }}
                        activeStyle = {!isOpened &&{backgroundColor : 'transparent' , boxShadow : 'none'}}
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(LeftNavbar);
