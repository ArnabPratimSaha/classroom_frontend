import { memo, useRef } from "react";
import TopNavbarNavlinks from "./components/TopNavbarNavlinks";
import "./TopNavBar.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdRssFeed } from "react-icons/md";
import { BsPen, BsPeople } from "react-icons/bs";
import Avatar from "../Avatar/Avatar";
import DropDownDiv from "./components/DropDownDiv";
import CustomInput from "../CustomInput/CustomInput";


const TopNavBar = () => {
    const dropDownRef = useRef();

    const addOrJoinClassButtonClickHandler = () => {
        if (dropDownRef && dropDownRef.current) {
            dropDownRef.current.classList.toggle("open-drop-down__div");
        }
    };

    return (
        <>
        <div className="top-navbar__full-div">
            <div className="top-navbar__logo-div">
                O-Class
            </div>

            <div className="top-navbar__navlinks-div">
                <TopNavbarNavlinks
                    text="Class Feed"
                    to="/home"
                    icon={<MdRssFeed />}
                />
                <TopNavbarNavlinks
                    text="To-Do"
                    to="/todo"
                    icon={<BsPen />}
                />
                <TopNavbarNavlinks
                    text="People"
                    to="/people"
                    icon={<BsPeople />}
                />
            </div>

            <div className="top-navbar__right-div">
                <div className="top-navbar__join-create-class__div">
                    <IoAddCircleOutline
                        className="top-navbar__join-create-class__icon"
                        onClick={addOrJoinClassButtonClickHandler}
                    />
                    {/* <div
                        ref={dropDownRef}
                        className="top-navbar__join-create-class__drop-down__div"
                    >
                        <div className="top-navbar__join-create-class__drop-down__items">
                            Join Class
                        </div>
                        <div className="top-navbar__join-create-class__drop-down__items">
                            Create Class
                        </div>
                    </div> */}
                    <DropDownDiv
                        ref={dropDownRef}
                        itemArray={[<span key={1}>Join Class</span>, <span key={2}>Create Class</span>]}
                    />
                </div>
                <Avatar height="3.5rem" width="3.5rem" />
            </div>
        </div>
        <div className="top-navbar__modal"></div>
        <div className="top-navbar__create-class__div">
            <div className="top-navbar__create-class__inner-div">
                <div className="create-class__carousel-item__div top-navbar__create-class__terms_conditions__div">
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
                    <button className="top-navbar__create-class__next-button" >next</button>
                </div>
                <div className="create-class__carousel-item__div create-class__info-div">
                    <CustomInput/>
                </div>
                <div className="create-class__carousel-item__div"></div>
                <div className="create-class__carousel-item__div"></div>
            </div>
        </div>
        </>
    );
};

export default memo(TopNavBar);
