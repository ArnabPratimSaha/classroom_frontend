import './DropDownDiv.css'
import { forwardRef, memo } from 'react';

const DropDownDiv = ({ itemArray } , ref) => {
    return (
        <div ref = {ref && ref} className="drop-down__div">
            {itemArray &&
                itemArray.map((eachItem) => {

                    return (
                    <div onClick = {() => {eachItem.onClick && eachItem.onClick()}} className="drop-down__div-items">
                        {eachItem}
                    </div>
                    );
                })}
        </div>
    );
};

export default memo(forwardRef(DropDownDiv))
