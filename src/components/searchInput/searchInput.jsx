import React,{memo} from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './searchInput.css';
const SearchInput=({className,placeholder,onChange,icon})=> {
    const [input,setInput]=useState("");
    const [focus,setFocus]=useState(false);
    useEffect(()=>{
        onChange && onChange(input)
    },[input])

  return (
    <div className={`searchinput-topdiv ${className}`}>
      {icon && icon}
      <input type="text" name={placeholder} placeholder={placeholder} value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  )
}

export default memo(SearchInput)