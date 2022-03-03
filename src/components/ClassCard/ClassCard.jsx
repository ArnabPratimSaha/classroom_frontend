import axios from "axios";
import { memo, useRef } from "react";
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { useSelector } from "react-redux";
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
        classId,
        parentRef,
        classData
    }) => {
    
    const userState = useSelector(state=>state.userReducer);

    const navigate = useNavigate()
    const dropDownDivRef = useRef();
    const dropDownDivItemArray = [
        <span style = {{pointerEvents : "none"}} onClick={()=>navigate(`/class/${classId}`)} >Visit</span>, 
        <span onClick={() => { classArchiveHandler() }} >Archive</span>, 
        <span style = {{pointerEvents : "none"}} onClick={() => { classUnEnrollHandler() }} >UnEnroll</span>, 
        <span >Report</span>
    ];
    const classUnEnrollHandler = async() => {
        
        const accessToken = userState.accessToken;
        const refreshToken = userState.refreshToken;
        const id = userState.id;

        const headers = {
            id : id,
            accesstoken : accessToken,
            refreshtoken : refreshToken,
            classid : classId,
        }

        try {
            
            const res = await axios(`${process.env.REACT_APP_API}/student/leave`,{
                headers : headers,
                method : 'DELETE'
            })

            if(res.status === 200){
                
            }

        } catch (error) {
            console.log({error});
            // navigate to error page or show a error
        }

    }

    const classArchiveHandler = () => {

    }

    return (
        <div ref={parentRef} className="class-card__full-div" >
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
                    <span style={{ fontFamily: 'Barlow Condensed', fontWeight: '400', color: 'grey', fontSize: '1.1rem' }} >Admin</span>
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
                    <span style={{ fontFamily: 'Barlow Condensed', fontWeight: '400', color: 'grey', fontSize: '1.1rem' }}>Department</span>
                    <br />
                    <span className="class-card__department-name">
                        {department && department}
                    </span>
                </div>
            </div>
            <div className="class-card__dots-div">
                <button 
                    onClick={()=>{
                        if (dropDownDivRef.current) {
                            dropDownDivRef.current.isOpen?dropDownDivRef.current.close():dropDownDivRef.current.open()
                        }
                    }}
                    onBlur={() => {
                        if (dropDownDivRef.current && dropDownDivRef.current.close) {
                            dropDownDivRef.current.close();
                        }
                    }}
                    className="class-card__dots-icon-div">
                    <BiDotsVerticalRounded />
                    <DropDownDiv
                        ref={dropDownDivRef}
                        itemArray={dropDownDivItemArray}
                    />
                </button>
            </div>
        </div>
    );
};

export default memo(ClassCard);
