import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [sName, setName] = useState("");  
  const [sFullName, setFullName] = useState();
   
  const onInputChange = (oEvent) => {
    setName(oEvent.target.value)
  }
  const onBtnClick = () => {
    setFullName(sName);
  } 
  return (
    <div>
        <h1>Hello { sFullName }</h1>
        <input placeholder='Enter Name' onChange={ onInputChange } value={sName}/>
        <button onClick={ onBtnClick }> Click Me</button>
    </div>
  )
}

export default App;