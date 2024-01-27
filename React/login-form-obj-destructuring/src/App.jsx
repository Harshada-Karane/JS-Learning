import React, { useState } from 'react';
import "./App.css"

const App = () => {
  const [fullName, setFullName] = useState({
      fname : '',
      lname : ''  
  })
  const onFormSubmit = (oEvent) => {
    oEvent.preventDefault();
  }

  const onInpChange = (oEvent) => {
    const {name, value} = oEvent.target;
    setFullName(prevValue => {

        let x = {
            ...prevValue,
            [name] : value
        }
        return x;
    })
  }
  return (
    <div>
        <form onSubmit={onFormSubmit}>
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <input name="fname" onChange={onInpChange} value={fullName.fname}/>
            <br />
            <input name='lname' onChange={onInpChange}  value={fullName.lname}/>
        </form>
    </div>
  )
}

export default App;