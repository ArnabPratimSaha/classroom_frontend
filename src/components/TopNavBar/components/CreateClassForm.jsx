import { forwardRef, memo, useEffect, useRef, useState } from "react"
import CustomInput from "../../CustomInput/CustomInput";
import './CreateClassForm.css'
import Buttons from '../../Buttons/Buttons'
import { SiNike } from 'react-icons/si'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { AiOutlineCheck,AiOutlineCloseCircle } from 'react-icons/ai';
import { VscDiffAdded } from 'react-icons/vsc';
import { BsArrowUpCircle } from 'react-icons/bs';
import useRequest from "../../../Hooks/useRequest";
import axios from "axios";

const CreateClassForm = ({  id, accesstoken, refreshtoken ,updateToken  }, ref) => {
    const [makeRequst, loading] = useRequest(updateToken);
    const imagePreviewRef = useRef();
    const pickFileRef = useRef();
    const checkBoxRef = useRef();
    const classNameRef = useRef();
    const classDescriptionRef = useRef();

    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const [checked, setChecked] = useState(false);
    const [inputStatus, setInputStatus] = useState(false)

    const [fieldInputValue,setFiledInputValue]=useState('');
    const [fieldAttributes,setFieldAttributes]=useState([]);
    useEffect(() => {

        if (file) {

            const fileReader = new FileReader();
            fileReader.onload = () => {
                setPreview(fileReader.result)
            }

            fileReader.readAsDataURL(file)

        }

    }, [file])

    const nextButtonOnClickHandler = (buttonNo) => {
        switch (buttonNo) {
            case 1: {
                if (checkBoxRef.current && checkBoxRef.current.checked) {
                    const nextElement = document.getElementById('create-class__carousel-item__div2');
                    if (nextElement) {
                        nextElement.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }
                }
                break;
            }
            case 2: {
                if(!inputStatus)return;
                const nextElement = document.getElementById('create-class__carousel-item__div3');
                if (nextElement) {
                    nextElement.scrollIntoView({
                        behavior: 'smooth'
                    })
                }
                break;
            }
            default: {
                return;
            }
        }
    }
    const backButtonOnClickHandler = (buttonNo) => {
        if (buttonNo <= 1) return;
        const prevElement = document.getElementById(`create-class__carousel-item__div${buttonNo - 1}`)
        if (prevElement) {
            prevElement.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }

    const formOnSubmitHandler = async () => {
        const className = classNameRef.current.value;
        const classDescription = classDescriptionRef.current.value;

        if (!checked)return;
        if (!className || className.length === 0 ) {
            // error occurred
            return;
        }

        var length=fieldAttributes.length;
        const formData = new FormData();
        formData.append('files', file);
        formData.append('name', className);
        formData.append('description', classDescription);
        formData.append('fields', JSON.stringify(fieldAttributes.map((f)=>[f,length--])));
        // axios request to backend
        const headers={
            id,accesstoken,refreshtoken,"Content-Type": "multipart/form-data" 
        }
        try {
            const res=await makeRequst(`${process.env.REACT_APP_API}/class/create`,{
                headers,
                method:'post',
                body:formData
            })
            console.log(res.data);
        } catch (error) {}
    }
    const handleFormAttributeButtonClicked=()=>{
        if(fieldInputValue.length===0)return;
        setFieldAttributes(s=>[...s,fieldInputValue])
        setFiledInputValue('');
    }
    return (
        <div ref={ref} className="top-navbar__create-class__div" onFocus={(e)=>e.preventDefault()}>
            <div className="top-navbar__create-class__inner-div">
                <div id='create-class__carousel-item__div1' className="create-class__carousel-item__div top-navbar__create-class__terms_conditions__div">
                    <span className="top-navbar__create-class__terms_conditions__header">Terms & Conditions :</span>
                    <br />
                    <br />
                    <span className="top-navbar__create-class__terms_conditions">
                        1. Contrary to popular belief, Lorem Ipsum is not simply random text
                    </span>
                    <br />
                    <br />
                    <span className="top-navbar__create-class__terms_conditions">
                        2. Contrary to popular belief, Lorem Ipsum is not simply
                    </span>
                    <br />
                    <br />
                    <span className="top-navbar__create-class__terms_conditions">
                        3. Contrary to popular belief, Lorem Ipsum is not simply random text. Iawawd awd awd awd awd awdaw awdawdawd awd awd awd
                    </span>
                    <br />
                    <br />
                    <span className="top-navbar__create-class__terms_conditions">
                        4. Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                    </span>
                    <br />
                    <br />
                    <div className="underline"></div>
                    <br />
                    <div className="top-navbar__create-class__terms_conditions__input-div">
                        <label style={{ display: 'flex', alignItems: 'center' }}><input
                            ref={checkBoxRef}
                            onChange={(e) => setChecked(e.target.checked)}
                            style={{
                                width: '1rem',
                                height: '1rem',
                            }} type='checkbox' name='checkBox' />Accept Terms & Conditions</label>
                    </div>
                    <div className="create-class__info-button__div">
                        <Buttons
                            onClick={() => { nextButtonOnClickHandler(1) }}
                            type='button'
                            text='Create'
                            icon={<SiNike style={{ transform: 'translateY(2px)' }} />}
                            style={{
                                backgroundColor: checked ? '#3d87ff' : '#4285f480',
                                height: '2.5rem',
                                width: '7.5rem',
                                borderColor: '#4285f480',
                            }}
                        />
                    </div>
                </div>
                <div id='create-class__carousel-item__div2' className="create-class__carousel-item__div create-class__info-div">
                    <span className="top-navbar__create-class__terms_conditions__header">Class Information :</span>
                    <br />
                    <CustomInput
                        ref={classNameRef}
                        placeholder='Class Name'
                        type='text'
                        icon={inputStatus&&<AiOutlineCheck style={{color:'green',fontSize:'1.2rem'}}/>}
                        onChange={(v) => {
                            setInputStatus(s=>{
                                if(v.length>=5)return true;
                                return false;
                            })
                        }}
                    />
                    <CustomInput
                        placeholder='Description [Optional]'
                        type='text'
                        ref={classDescriptionRef}
                        onChange={(v) => {
                            setInputStatus(s=>{
                                if(v.length>=5)return true;
                                return false;
                            })
                        }}
                    />
                    <br />
                    <div className="create-class__info-div_attributes">
                        <div className="info-div-top">
                            add some specific criteria for the students<span>[optional]</span>. such as <span>Roll</span>,<span>Registration No.</span><br/>
                            This will help in better management of class.<br/>
                            <span>Added fields must be filled out by student before joining the class.</span>
                        </div>
                        <div className="info-div_attributes-field-form">
                            <input type={'text'} placeholder='enter field name' name="field" value={fieldInputValue} onChange={(e) => setFiledInputValue(e.target.value.trim())} />
                            <button
                                type='button'
                                text='ADD'
                                className='info-div_attributes-field-form__button'
                                onClick={handleFormAttributeButtonClicked}
                            >
                                <VscDiffAdded style={{ transform: 'translateY(2px)' }} />
                                ADD
                            </button>
                        </div>
                        <div className="info-div_attributes-field-result">
                            {fieldAttributes.map((attr,index)=><div key={index} className="field-result-attributes" style={{background:index%2===0?'#e4e4e4':'#cccccc'}}>
                                {attr}
                                <div className="field-result-attributes-buttons">
                                    {index!==0 &&<button type="button"><BsArrowUpCircle className="field-result-attributes-icons attributes-icons-arrow-up" 
                                        onClick={()=>{
                                            setFieldAttributes(s => {
                                                if (index - 1 < 0) return s;
                                                var arr = [...s];
                                                const temp = arr[index];
                                                arr[index] = arr[index - 1];
                                                arr[index - 1] = temp;
                                                return arr;
                                            })  
                                        }}    
                                    /></button>}
                                    <button type="button" ><AiOutlineCloseCircle className="field-result-attributes-icons attributes-icons-close" onClick={()=>{
                                        setFieldAttributes(s=>s.filter((v,i)=>i!==index))
                                    }}/></button>
                                </div>
                            </div>)}
                        </div>
                    </div>
                    <div className="create-class__info-button__div">
                        <Buttons
                            type='button'
                            text='back'
                            icon={<IoIosArrowRoundBack style={{ transform: 'translateY(2px)' }} />}
                            style={{
                                backgroundColor: 'rgb(234,236,239)',
                                height: '2.5rem',
                                width: '7.5rem',
                                borderColor: 'rgb(234,236,239)',
                                boxShadow: 'none',
                                color: '#4a4a4a'
                            }}
                            onClick={() => {
                                backButtonOnClickHandler(2)
                            }}
                        />
                        <Buttons
                            type='button'
                            text='next'
                            icon={<SiNike style={{ transform: 'translateY(2px)' }} />}
                            style={{
                                backgroundColor: inputStatus?'#3d87ff' : '#4285f480',
                                height: '2.5rem',
                                width: '7.5rem',
                                borderColor: '#4285f480',
                            }}
                            onClick={() => {
                                nextButtonOnClickHandler(2)
                            }}
                        />
                    </div>
                </div>
                <div id='create-class__carousel-item__div3' className="create-class__carousel-item__div">
                    <span className="top-navbar__create-class__terms_conditions__header">Class Cover</span>
                    <br />
                    <div onClick={() => { pickFileRef && pickFileRef.current && pickFileRef.current.click() }} className="create-class__cover-pic__preview-div">
                        {preview && <img alt='cover' src={preview} ref={imagePreviewRef} className="create-class__cover-preview" />}
                    </div>
                    <input onChange={(e) => { setFile(e.target.files[0]) }} style={{ display: 'none' }} ref={pickFileRef} type='file' accept="image/png, image/jpg, image/jpeg" />
                    <div className="create-class__info-button__div">
                        <Buttons
                            type='button'
                            text='back'
                            icon={<IoIosArrowRoundBack style={{ transform: 'translateY(2px)' }} />}
                            style={{
                                backgroundColor: '#fff',
                                height: '2.5rem',
                                width: '7.5rem',
                                borderColor: '#fff',
                                boxShadow: 'none',
                                color: '#4a4a4a'
                            }}
                            onClick={() => {
                                backButtonOnClickHandler(3)
                            }}
                        />
                        <Buttons
                            type='button'
                            text='Create'
                            icon={<SiNike style={{ transform: 'translateY(2px)' }} />}
                            style={{
                                backgroundColor: '#4285f480',
                                height: '2.5rem',
                                width: '7.5rem',
                                borderColor: '#4285f480',
                            }}
                            onClick={formOnSubmitHandler}
                        />
                    </div>
                </div>
                <div id='create-class__carousel-item__div4' className="create-class__carousel-item__div">
                    <span className="top-navbar__create-class__terms_conditions__header">Class Cover</span>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default memo(forwardRef(CreateClassForm))
