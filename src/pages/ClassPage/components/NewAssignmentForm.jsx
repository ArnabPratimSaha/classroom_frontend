import { forwardRef, useRef, memo, useImperativeHandle } from "react";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Buttons from '../../../components/Buttons/Buttons';
import { MdOutlineAssignmentTurnedIn } from 'react-icons/md'
import "./NewAssignmentForm.css";
import axios from "axios";

const NewAssignmentForm = ({ id, accessToken, refreshToken, classId, onFormSubmitHandler }, ref) => {

    const fullDivRef = useRef();
    const titleRef = useRef();

    useImperativeHandle(ref , () => ({
        close : () => {
            if(fullDivRef.current){
                fullDivRef.current.style.display = 'none';
            }
        },
        open : () => {
            if(fullDivRef.current){
                fullDivRef.current.style.display = 'flex';
            }
        }
    }))

    const formOnSubmitHandler = async(e) => {
        e.preventDefault();

        if(!id || !accessToken || !refreshToken || !classId) return;

        const title = titleRef.current && titleRef.current.value.trim();
        const description = e.target.description.value.trim();
        const date_time = new Date(e.target.date_time.value);

        if(!title) return;

        const headers = {
            id : id,
            accesstoken : accessToken,
            refreshtoken : refreshToken,
            classid : classId
        }
        
        try {
            
            const res = await axios({
                url : `${process.env.REACT_APP_API}/assignment`,
                method : 'POST' , 
                headers : headers,
                data : {
                    title : title,
                    description : description,
                    submissiondate : date_time,
                }
            });

            if(res.status === 200){
                console.log({res});
                onFormSubmitHandler && onFormSubmitHandler();
                e.target.reset();
                if(ref.current && ref.current.close) ref.current.close();
            }

        } catch (error) {
            console.log({error});
        }
    }

    return (
        <>
            <div ref = {fullDivRef} className = "new-assignment__full-div">
                <div onClick = {() => {
                    ref.current.close();
                }} className="new-assignment__modal"></div>
                <form onSubmit={formOnSubmitHandler} className="new-assignment__form">
                    <span className="new-assignment__header">Create an assignment</span>
                    <br/>
                    <CustomInput
                        type = 'text'
                        placeholder= 'Title'
                        name = 'title'
                        ref = {titleRef}
                    />
                    <br/>
                    <textarea
                        name = 'description'
                        onInput = {(e) => {
                            e.target.style.height = '5px';
                            e.target.style.height = e.target.scrollHeight + 'px';
                        }}
                        placeholder="Description"
                        className="new-assignment__form-description"
                    />
                    <br/>
                    <br/>
                    <input name = 'date_time' type = 'datetime-local' className="new-assignment__date-time__picker" />
                    <br/>
                    <br/>
                    <Buttons
                        type = 'submit'
                        style = {{
                            padding : '0 10px',
                            height : '2.5rem',
                            width : '8rem'
                        }}
                        text = 'Assign'
                        icon = {<MdOutlineAssignmentTurnedIn style = {{marginRight : '10px' , fontSize : '1.4rem'}} />}
                    />
                </form>
            </div>
        </>
    );
};

export default memo(forwardRef(NewAssignmentForm));
