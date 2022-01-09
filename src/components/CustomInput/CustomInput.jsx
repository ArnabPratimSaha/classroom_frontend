import { memo } from "react"
import './CustomInput.css'

const CustomInput = ({type, placeholder, wrapperStyle, inputStyle}) => {

    

    return (
        <div style = {wrapperStyle ? wrapperStyle : {}} className="custom-input__wrapper">
            <input className="custom-input" style = {inputStyle ? inputStyle : {}} type={type ? type : 'text'} />
            <span className="custom-input__placeholder">{placeholder ? placeholder : 'placeholder'}</span>
        </div>
    )
}

export default memo(CustomInput)
