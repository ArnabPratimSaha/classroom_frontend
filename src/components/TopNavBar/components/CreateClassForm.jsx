import { forwardRef, memo, useEffect, useRef, useState } from "react"
import CustomInput from "../../CustomInput/CustomInput";
import './CreateClassForm.css'
import Buttons from '../../Buttons/Buttons'
import { SiNike } from 'react-icons/si'
import { IoIosArrowRoundBack } from 'react-icons/io'

const CreateClassForm = ({},ref) => {

    const imagePreviewRef = useRef();
    const pickFileRef = useRef();
    const checkBoxRef = useRef();
    const classNameRef = useRef();
    const classCodeRef = useRef();
    const departmentRef = useRef();
    const sectionRef = useRef();

    const [file , setFile] = useState(null);
    const [preview , setPreview] = useState(null);


    useEffect(() => {

        if(file){

            const fileReader = new FileReader();
            fileReader.onload = () => {
                setPreview(fileReader.result)
            }

            fileReader.readAsDataURL(file)

        }

    },[file])

    const nextButtonOnClickHandler = (buttonNo) => {
        switch(buttonNo){
            case 1 :{
                if(checkBoxRef && checkBoxRef.current && checkBoxRef.current.checked){
                    const nextElement = document.getElementById('create-class__carousel-item__div2');
                    if(nextElement){
                        nextElement.scrollIntoView({
                            behavior : 'smooth'
                        })
                    }
                }
                break;
            }
            case 2 : {
                if(classNameRef && classNameRef.current && classCodeRef && classCodeRef.current && departmentRef && departmentRef.current && sectionRef && sectionRef.current){
                    
                    const className = classNameRef.current.value;
                    const classCode = classCodeRef.current.value;
                    const department = departmentRef.current.value;
                    const section = sectionRef.current.value;

                    console.log({
                        className , classCode , department , section
                    });

                    if(!className || className.length === 0 || 
                        !classCode || classCode.length === 0 || 
                        !department || department.length === 0 || 
                        !section || section.length === 0){

// < ------------------ generate an error saying that area can't be left empty -------------------- >
                            return;
                        }

                    const nextElement = document.getElementById('create-class__carousel-item__div3');
                    if(nextElement){
                        nextElement.scrollIntoView({
                            behavior : 'smooth'
                        })
                    }
                }
                break;
            }
            default : {
                return;
            }
        }
    }

    const backButtonOnClickHandler = (buttonNo) => {
        if(buttonNo <= 1) return;
        const prevElement = document.getElementById(`create-class__carousel-item__div${buttonNo - 1}`)
        if(prevElement){
            prevElement.scrollIntoView({
                behavior : 'smooth'
            })
        }
    }

    const formOnSubmitHandler = async(e) => {
        e.preventDefault();
        
        const isChecked = checkBoxRef.current.isChecked;
        const className = classNameRef.current.value;
        const classCode = classCodeRef.current.value;
        const department = departmentRef.current.value;
        const section = sectionRef.current.value;
        const coverImage = preview;

        if(!isChecked){
            // error occurred
            return;
        }
        
        if(!className || className.length === 0 || 
            !classCode || classCode.length === 0 || 
            !department || department.length === 0 || 
            !section || section.length === 0){
                // error occurred
                return;
        }

        const formData = new FormData();
        formData.append('className' , className)
        formData.append('classCode' , classCode)
        formData.append('department' , department)
        formData.append('section' , section)
        coverImage && formData.append('coverImage' , coverImage);

        // axios request to backend 

        


        console.log('Form on submit');
    }

    return (
        <div ref = {ref} className="top-navbar__create-class__div">
                <form encType="multipart/form-data" onSubmit = {(e) => {formOnSubmitHandler(e)}} className="top-navbar__create-class__inner-div">
                    <div id = 'create-class__carousel-item__div1' className="create-class__carousel-item__div top-navbar__create-class__terms_conditions__div">
                        <span className="top-navbar__create-class__terms_conditions__header">Terms & Conditions :</span>
                        <br/>
                        <br/>
                        <span className="top-navbar__create-class__terms_conditions">
                            1. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                        </span>
                        <br/>
                        <br/>
                        <span className="top-navbar__create-class__terms_conditions">
                            2. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                        </span>
                        <br/>
                        <br/>
                        <span className="top-navbar__create-class__terms_conditions">
                            3. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                        </span>
                        <br/>
                        <br/>
                        <span className="top-navbar__create-class__terms_conditions">
                            4. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                        </span>
                        <br/>
                        <br/>
                        <div className="underline"></div>
                        <br/>
                        <div className="top-navbar__create-class__terms_conditions__input-div">
                            
                            <label style = {{display : 'flex', alignItems :'center'}}><input ref = {checkBoxRef} style={{
                                width : '1rem',
                                height : '1rem',
                            }} type = 'checkbox' name = 'checkBox'/>Accept Terms & Conditions</label>
                        </div>
                        <div className="create-class__info-button__div">
                            <Buttons
                                onClick={() => {nextButtonOnClickHandler(1)}}
                                type = 'button'
                                text = 'Create'
                                icon = {<SiNike style = {{transform : 'translateY(2px)'}} />}
                                style={{
                                    backgroundColor : 'rgb(66, 133, 244, 0.5)',
                                    height : '2.5rem',
                                    width : '7.5rem',
                                    borderColor : 'rgb(66, 133, 244, 0.5)',
                                }}
                            />
                        </div>
                    </div>
                    <div id = 'create-class__carousel-item__div2' className="create-class__carousel-item__div create-class__info-div">
                        <span className="top-navbar__create-class__terms_conditions__header">Class Information :</span>
                        <br/>
                        <CustomInput
                            ref = {classNameRef}
                            placeholder = 'Class Name'
                            type = 'text'
                        />
                        <br/>
                        <CustomInput
                            ref = {classCodeRef}
                            placeholder = 'Class Code'
                            type = 'text'
                        />
                        <br/>
                        <CustomInput
                            ref = {departmentRef}
                            placeholder = 'Department Name'
                            type = 'text'
                        />
                        <br/>
                        <CustomInput
                            ref = {sectionRef}
                            placeholder = 'Section'
                            type = 'text'
                        />
                        <br/>
                        <div className="create-class__info-button__div">
                            <Buttons
                                type = 'button'
                                text = 'back'
                                icon = {<IoIosArrowRoundBack style = {{transform : 'translateY(2px)'}} />}
                                style={{
                                    backgroundColor : 'rgb(234,236,239)',
                                    height : '2.5rem',
                                    width : '7.5rem',
                                    borderColor : 'rgb(234,236,239)',
                                    boxShadow : 'none',
                                    color : '#4a4a4a'
                                }}
                                onClick={() => {
                                    backButtonOnClickHandler(2)
                                }}
                            />
                            <Buttons
                                type = 'button'
                                text = 'next'
                                icon = {<SiNike style = {{transform : 'translateY(2px)'}} />}
                                style={{
                                    backgroundColor : 'rgb(66, 133, 244, 0.5)',
                                    height : '2.5rem',
                                    width : '7.5rem',
                                    borderColor : 'rgb(66, 133, 244, 0.5)',
                                }}
                                onClick={() => {
                                    nextButtonOnClickHandler(2)
                                }}
                            />
                        </div>
                    </div>
                    <div id = 'create-class__carousel-item__div3' className="create-class__carousel-item__div">
                        <span className="top-navbar__create-class__terms_conditions__header">Class Cover</span>
                        <br/>
                        <div onClick={() => {pickFileRef && pickFileRef.current && pickFileRef.current.click()}} className="create-class__cover-pic__preview-div">
                            {preview && <img alt = 'cover' src = {preview} ref = {imagePreviewRef} className="create-class__cover-preview" />}
                        </div>
                        <input onChange={(e) => {setFile(e.target.files[0])}} style = {{display : 'none'}} ref = {pickFileRef} type = 'file' />
                        <div className="create-class__info-button__div">
                            <Buttons
                                type = 'button'
                                text = 'back'
                                icon = {<IoIosArrowRoundBack style = {{transform : 'translateY(2px)'}} />}
                                style={{
                                    backgroundColor : 'rgb(234,236,239)',
                                    height : '2.5rem',
                                    width : '7.5rem',
                                    borderColor : 'rgb(234,236,239)',
                                    boxShadow : 'none',
                                    color : '#4a4a4a'
                                }}
                                onClick={() => {
                                    backButtonOnClickHandler(3)
                                }}
                            />
                            <Buttons
                                type = 'submit'
                                text = 'Create'
                                icon = {<SiNike style = {{transform : 'translateY(2px)'}} />}
                                style={{
                                    backgroundColor : 'rgb(66, 133, 244, 0.5)',
                                    height : '2.5rem',
                                    width : '7.5rem',
                                    borderColor : 'rgb(66, 133, 244, 0.5)',
                                }}
                            />
                        </div>
                    </div>
                    <div id = 'create-class__carousel-item__div4' className="create-class__carousel-item__div">
                        <span className="top-navbar__create-class__terms_conditions__header">Class Cover</span>
                        <br/>
                    </div>
                </form>
            </div>
    )
}

export default memo(forwardRef(CreateClassForm))
