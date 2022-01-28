import { memo, useEffect } from "react"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { classPage } from "../../actions/actions";
import './ClassPeople.css'
import ClassPeopleCard from "./Components/ClassPeopleCard";

const ClassPeople = () => {

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
                        <ClassPeopleCard
                            name = "Sushanta"
                        />
                        <ClassPeopleCard
                            name = "Sushanta"
                        />
                    </div>
                    <div className="class-people__students-div">
                        <span className="class-people__role-header">Students</span>
                        <div style = {{marginBottom : '10px'}} className="underline"></div>
                        <ClassPeopleCard
                            name = "Sushanta"
                            rollNo = "19CS8023"
                        />
                        <ClassPeopleCard
                            name = "Sushanta"
                            rollNo = "19CS8023"
                        />
                        <ClassPeopleCard
                            name = "Sushanta"
                            rollNo = "19CS8023"
                        />
                        <ClassPeopleCard
                            name = "Sushanta"
                            rollNo = "19CS8023"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(ClassPeople)
