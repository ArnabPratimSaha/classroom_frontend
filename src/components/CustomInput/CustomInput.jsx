import { forwardRef, memo } from "react"
import './CustomInput.css'

const CustomInput = ({type, placeholder, wrapperStyle, inputStyle, name},ref) => {

    

    return (
        <div style = {wrapperStyle ? wrapperStyle : {}} className="custom-input__wrapper">
            <input name = {name && name} ref = {ref} className="custom-input" style = {inputStyle ? inputStyle : {}} type={type ? type : 'text'} required/>
            <span className="custom-input__placeholder">{placeholder ? placeholder : 'placeholder'}</span>
            <div className="custom-input__bottom-border"></div>
        </div>
    )
}

export default memo(forwardRef(CustomInput))
