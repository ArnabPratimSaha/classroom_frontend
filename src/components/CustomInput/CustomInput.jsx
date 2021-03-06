import { forwardRef, memo } from "react"
import './CustomInput.css'

const CustomInput = ({type, placeholder, wrapperStyle, inputStyle, name, onChange, icon},ref) => {

    

    return (
        <div style = {wrapperStyle ? wrapperStyle : {}} className="custom-input__wrapper">
            <div className="custom-input-div">
                <input name = {name && name} ref = {ref} onChange={(e)=>onChange && onChange(e.target.value)} className="custom-input" style = {inputStyle ? inputStyle : {}} type={type ? type : 'text'} required/>
                <span className="custom-input__placeholder">{placeholder ? placeholder : 'placeholder'}</span>
                {icon}
            </div>
            <div className="custom-input__bottom-border"></div>
        </div>
    )
}

export default memo(forwardRef(CustomInput))
