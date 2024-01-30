import React from 'react'

const Input = ({type,placeholder,onchange,value}) => {
  return (
    <input className='input' type={type} 
    onChange={
        (e)=>{
            onchange(e.target.value);
        }
    }
    value={value} 
    placeholder={placeholder}/>
  )
}

export default Input
