import './DropDownDiv.css'
import { forwardRef, memo, useImperativeHandle, useRef ,useState} from 'react';

const DropDownDiv = ({ itemArray } , ref) => {

    const reference = useRef();
    const [isOpen,setIsOpen]=useState(false);
    useImperativeHandle(ref, () => ({
        isOpen: isOpen,
        open: () => {
            if (reference && reference.current && !reference.current.classList.contains('open-drop-down__div')) {
                reference.current.classList.add('open-drop-down__div')
                setIsOpen(true);
            }
        },
        close: () => {
            if (reference && reference.current && reference.current.classList.contains('open-drop-down__div')) {
                reference.current.classList.remove('open-drop-down__div');
                setIsOpen(false);
            }
        }
    }))

    return (
        <div ref = {reference}  className="drop-down__div">
            {itemArray &&
                itemArray.map((eachItem,index) => {
                    return (
                    <div key={index}>
                        <div  onClick = {() => {
                            if(reference && reference.current && reference.current.classList.contains('open-drop-down__div')){
                                reference.current.classList.remove('open-drop-down__div')
                            }
                            eachItem.props.onClick && eachItem.props.onClick()
                            }} className="drop-down__div-items">
                            {eachItem}
                        </div>
                        {index < (itemArray.length - 1) && <div className='underline' style = {{margin : '2px auto'}} ></div>}
                    </div>
                    );
                })}
        </div>
    );
};

export default memo(forwardRef(DropDownDiv))
