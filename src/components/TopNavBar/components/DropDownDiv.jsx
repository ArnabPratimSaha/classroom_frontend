import './DropDownDiv.css'
import { forwardRef, memo, useImperativeHandle, useRef } from 'react';

const DropDownDiv = ({ itemArray } , ref) => {

    const reference = useRef();

    useImperativeHandle(ref , () => ({
        open : () => {
            if(reference && reference.current && !reference.current.classList.contains('open-drop-down__div')){
                reference.current.classList.add('open-drop-down__div')
            }
        },
        close : () => {
            if(reference && reference.current && reference.current.classList.contains('open-drop-down__div')){
                reference.current.classList.remove('open-drop-down__div')
            }
        }
    }))

    return (
        <div ref = {reference}  className="drop-down__div">
            {itemArray &&
                itemArray.map((eachItem,index) => {

                    return (
                    <>
                        <div onClick = {() => {
                            if(reference && reference.current && reference.current.classList.contains('open-drop-down__div')){
                                reference.current.classList.remove('open-drop-down__div')
                            }
                            eachItem.props.onClick && eachItem.props.onClick()
                            }} className="drop-down__div-items">
                            {eachItem}
                        </div>
                        {index < (itemArray.length - 1) && <div className='underline' style = {{margin : '2px auto'}} ></div>}
                    </>
                    );
                })}
        </div>
    );
};

export default memo(forwardRef(DropDownDiv))
