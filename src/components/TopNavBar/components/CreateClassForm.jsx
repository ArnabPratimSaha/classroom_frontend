import { forwardRef, memo } from "react"
import ClassCard from "../../ClassCard/ClassCard";
import CustomInput from "../../CustomInput/CustomInput";
import './CreateClassForm.css'

const CreateClassForm = ({},ref) => {
    return (
        <div ref = {ref} className="top-navbar__create-class__div">
                <div className="top-navbar__create-class__inner-div">
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
                            <input type = 'checkbox'/>
                            <label>Accept Terms & Conditions</label>
                        </div>
                        <button onClick={() => {
                            const nextItem = document.getElementById('create-class__carousel-item__div2');
                            nextItem.scrollIntoView({behavior : 'smooth'})
                        }} className="top-navbar__create-class__next-button" >next</button>
                    </div>
                    <div id = 'create-class__carousel-item__div2' className="create-class__carousel-item__div create-class__info-div">
                        <span className="top-navbar__create-class__terms_conditions__header">Class Information :</span>
                        <br/>
                        <CustomInput
                            placeholder = 'Class Name'
                            type = 'text'
                        />
                        <br/>
                        <CustomInput
                            placeholder = 'Class Code'
                            type = 'text'
                        />
                        <br/>
                        <CustomInput
                            placeholder = 'Department Name'
                            type = 'text'
                        />
                        <br/>
                        <CustomInput
                            placeholder = 'Section'
                            type = 'text'
                        />
                        <br/>
                        <div className="create-class__info-button__div">
                            <button>back</button>
                            <button onClick={() => {
                            const nextItem = document.getElementById('create-class__carousel-item__div3');
                            nextItem.scrollIntoView({behavior : 'smooth'})
                        }} >next</button>
                        </div>
                    </div>
                    <div id = 'create-class__carousel-item__div3' className="create-class__carousel-item__div">
                        <ClassCard
                            adminName = 'Sushanta Saren'
                            department = 'CSE'
                            className = 'OOP'
                        />
                    </div>
                    <div id = 'create-class__carousel-item__div4' className="create-class__carousel-item__div"></div>
                </div>
            </div>
    )
}

export default memo(forwardRef(CreateClassForm))
