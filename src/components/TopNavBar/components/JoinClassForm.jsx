import { forwardRef, memo } from "react"
import CustomInput from "../../CustomInput/CustomInput"
import './JoinClassForm.css'
import Buttons from "../../Buttons/Buttons"
import { SiNike } from 'react-icons/si'

const JoinClassForm = ({},ref) => {

    const joinClassFormOnSubmitHandler = (e) => {
        
        e.preventDefault();
        const enteredCode = e.target.codeInput.value;
        if(!enteredCode || enteredCode.trim().length === 0){
            // empty value can't be submitted
            return;
        }

        // axios request

    }

    return (
        <form onSubmit={(e) => {
            joinClassFormOnSubmitHandler(e)
        }} ref = {ref} className="join-class__form">
            <span className="join-class__header">Join a Class</span>
            <br/>
            <span className="join-class__code-info">Enter the unique code provided by your teacher in order to join the class</span>
            <br/>
            <br/>
            <CustomInput
                name = 'codeInput'
                type = 'text'
                placeholder = 'Code'
            />
            <br/>
            <div className="join-class__submit-button__div">
                <Buttons
                    type = 'submit'
                    text = 'Join'
                    icon = {<SiNike style = {{transform : 'translateY(2px)'}} />}
                    style={{
                        backgroundColor : 'rgb(66, 133, 244, 0.5)',
                        height : '2.5rem',
                        width : '7.5rem',
                        borderColor : 'rgb(66, 133, 244, 0.5)',
                    }}
                />
            </div>
        </form>
    )
}

export default memo(forwardRef(JoinClassForm))
