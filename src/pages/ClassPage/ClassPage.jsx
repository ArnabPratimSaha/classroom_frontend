import { memo } from "react"
import { useParams } from "react-router-dom"

const ClassPage = () => {
    const {classId} = useParams();

    return (
        <div>
            <span>Class id : {classId}</span>
        </div>
    )
}

export default memo(ClassPage)
