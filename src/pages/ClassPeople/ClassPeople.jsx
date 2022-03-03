import axios from "axios";
import { memo, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classPage } from "../../redux/actions/actions";
import './ClassPeople.css'
import ClassPeopleCard from "./Components/ClassPeopleCard";

const ClassPeople = () => {

    const {classId} = useParams();
    const dispatch = useDispatch();
    const {id , accessToken , refreshToken} = useSelector(state => state.userReducer)

    const [students , setStudents] = useState([]);
    const [teachers , setTeachers] = useState([]);


    useEffect(() => {
        dispatch(classPage(true))
        return () => {
            dispatch(classPage(false))
        }
    },[])

    useEffect(() => {
        const getClassPeoples = async() => {
            if(id && accessToken && refreshToken && classId){
                const header = {
                    id : id,
                    accesstoken : accessToken , 
                    refreshtoken : refreshToken ,
                    classid : classId,
                }
                try {

                    const res = await axios(`${process.env.REACT_APP_API}/class/info`,{
                        headers : header,
                        method : 'GET'
                    });
    
                    if(res.status === 200){
                        setStudents(res.data.students)
                        setTeachers(res.data.teachers)
                    }
                    
                } catch (error) {
                    console.log({error});
                }
            }
        }

        getClassPeoples();

    },[id , accessToken , refreshToken , classId])

    return (
        <>
            <div className="class__people__full-div">
                <div className="class__people__inner-div">
                    <div className="class-people__admin-div">
                        <span className="class-people__role-header">Admin</span>
                        <div style = {{marginBottom : '10px'}} className="underline"></div>
                        <ClassPeopleCard
                            name = "Sushanta"
                        />
                    </div>
                    <div className="class-people__teachers-div">
                        <span className="class-people__role-header">Teachers</span>
                        <div style = {{marginBottom : '10px'}} className="underline"></div>
                        {
                            teachers && teachers.length > 0 && teachers.map((eachTeacher) => {
                                return(
                                    <ClassPeopleCard
                                        key = {eachTeacher.id}
                                        name = {eachTeacher.className && eachTeacher.className}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="class-people__students-div">
                        <span className="class-people__role-header">Students</span>
                        <div style = {{marginBottom : '10px'}} className="underline"></div>
                        {
                            students && students.length > 0 && students.map((eachStudent) => {
                                return(
                                    <ClassPeopleCard
                                        key = {eachStudent.id}
                                        name = {eachStudent.className && eachStudent.className}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(ClassPeople)
