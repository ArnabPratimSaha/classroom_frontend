import { memo, useRef } from "react";
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import DropDownDiv from "../TopNavBar/components/DropDownDiv";
import "./ClassCard.css";

const ClassCard = ({
    classDP,
    classCoverPicture,
    department,
    className,
    adminName,
    classId
}) => {

    const navigate = useNavigate()
    const dropDownDivRef = useRef();
    const dropDownDivItemArray = [<span onClick={() => {navigate(`/class/${classId}`)}} >Visit</span>,<span onClick={() => {classArchiveHandler()}} >Archive</span> , <span onClick={() => {classUnEnrollHandler()}} >UnEnroll</span> , <span>Report</span>];

    const classUnEnrollHandler = () => {

    }

    const classArchiveHandler = () => {
        
    }

    return (
        <div className="class-card__full-div">
            <div className="class-card__upper-div">
                <span className="class-card__class-name">
                    {className && className}
                </span>
                <div className="class-card__class-picture__div">
                    <Avatar image={classDP && classDP} height="100%" width="100%" />
                </div>
            </div>
            <div className="class-card__lower-div">
                <div className="class-card__admin-div">
                    <span style = {{ fontFamily : 'Barlow Condensed' , fontWeight : '400' , color : 'grey' , fontSize : '1.1rem'}} >Admin</span>
                    <br />
                    <span className="class-card__admin-name">{adminName && adminName}</span>
                </div>
                <div
                    style={{
                        width: "calc(100% + 20px)",
                        transform: "translateX(-10px)",
                    }}
                    className="underline"
                ></div>
                <div className="class-card__department-div">
                    <span style = {{ fontFamily : 'Barlow Condensed' , fontWeight : '400' , color : 'grey' , fontSize : '1.1rem'}}>Department</span>
                    <br />
                    <span className="class-card__department-name">
                        {department && department}
                    </span>
                </div>
            </div>
            <div className="class-card__dots-div">
                <div onClick = {() => {
                    if(dropDownDivRef && dropDownDivRef.current && dropDownDivRef.current.open){
                        dropDownDivRef.current.open();
                    }
                }} className="class-card__dots-icon-div">
                    <BiDotsVerticalRounded/>
                </div>
                <DropDownDiv
                    ref = {dropDownDivRef}
                    itemArray = {dropDownDivItemArray}
                />
            </div>
        </div>
    );
};

export default memo(ClassCard);
