import { memo } from "react"
import './CustomInput.css'

const CustomInput = ({type, placeholder, wrapperStyle, inputStyle}) => {

    

    return (
        <div style = {wrapperStyle ? wrapperStyle : {}} className="custom-input__wrapper">
            <input className="custom-input" style = {inputStyle ? inputStyle : {}} type={type ? type : 'text'} required/>
            <span className="custom-input__placeholder">{placeholder ? placeholder : 'placeholder'}</span>
            <div className="custom-input__bottom-border"></div>
        </div>
    )
}

export default memo(CustomInput)
