import React, { useState } from 'react';
import './App.css'

const MultiInput = () => {
  const [fullName, setFullName] = useState({
    fname : '',
    lname : '',
    email : ''
  })  
  
  const onInputChange = (oEvent) => {
    const inpName = oEvent.target.name,
    inpValue = oEvent.target.value;

    setFullName((preValue) => {
        //console.log(preValue)
        if(inpName === "fname"){
            return {
                fname : inpValue,
                lname : preValue.lname,
                email : preValue.email
            }
        } else if(inpName === "lname"){
            return {
                fname : preValue.fname,
                lname : inpValue,
                email : preValue.email
            }
        } else {
            return {
                fname : preValue.fname,
                lname : preValue.lname,
                email : inpValue
            }
        }
    })
  }

  const onFormSubmit = (oEvent) => {
    oEvent.preventDefault();
  }

  return (
    <div>
        <form onSubmit={ onFormSubmit }>
            <h1>Hello {fullName.fname} {fullName.lname} </h1>
            <h3>{fullName.email}</h3>
            <input autoComplete='off' placeholder='Enter first name' name="fname" onChange={ onInputChange } value={fullName.fname}/>  
            <br />
            <input autoComplete='off' placeholder='Enter last name' name="lname" onChange={ onInputChange }  value={fullName.lname}/>  
            <input autoComplete='off' placeholder='Enter email' name="email" onChange={ onInputChange }  value={fullName.email}/>  
        </form>
    </div>
  )
}

export default MultiInput;