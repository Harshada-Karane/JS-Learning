import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [fName, setFname] = useState("");  
  const [lName, setLname] = useState("");  
  const [firstName, setFirstName] = useState();
  const [lastname, setLastname] = useState();
   
  const onInputChange = (oEvent) => {
    setFname(oEvent.target.value)
  }
  const onLastNameChange = (oEvent) => {
    setLname(oEvent.target.value);
  }
  const onBtnClick = (oEvent) => {
    oEvent.preventDefault();    //By default 'form's' submit method refreshes the page. To prevent this behaviour use 'preventDefault()'
    setFirstName(fName);
    setLastname(lName);
  } 
  return (
    // ---------------- without form tag ---------------------------------
    /* <div>
        <h1>Hello { sFullName }</h1>
        <input placeholder='Enter Name' onChange={ onInputChange } value={sName}/>
        <button onClick={ onBtnClick }> Click Me</button>
    </div> */
    // ---------------- with form tag ---------------------------------
    <div>
      <form onSubmit={onBtnClick}>
        <h1>Hello { firstName } {lastname}</h1>
        <input placeholder='Enter First Name' onChange={ onInputChange } value={fName}/>
        <br />
        <input placeholder='Enter Last Name' onChange={ onLastNameChange } value={lName}/>
        <button type='submit'> Click Me</button>
      </form>
    </div>
  )
}

export default App;