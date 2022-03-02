import React,{memo} from 'react'
import { useState } from 'react';
import './searchInput.css';
const SearchInput=({className,placeholder,onChange,icon,value})=> {
    const [focus,setFocus]=useState(false);
  return (
    <div className={`searchinput-topdiv ${className} ${focus && 'searchinput-topdiv__focus'}`}>
      {icon && icon}
      <input type="text" name={placeholder} placeholder={placeholder} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} value={value} onChange={(e) => {onChange && onChange(e.target.value)}} />
    </div>
  )
}

export default memo(SearchInput)