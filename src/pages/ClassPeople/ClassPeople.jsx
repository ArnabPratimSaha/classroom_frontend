import { memo, useEffect } from "react"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { classPage } from "../../actions/actions";
import './ClassPeople.css'

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
                    
                </div>
            </div>
        </>
    )
}

export default memo(ClassPeople)
