import React, { useState } from 'react';
import './App.css'

const App = () => {
    const [value, setValue] = useState(0)

    const onIncrement = () => {
        setValue(value + 1)
    }
    const onDecrement = () => {
        if(value > 0){
            setValue(value - 1)
        } else {
            alert(`Reached 0`)
            setValue(0);
            
        }
    }
  return (
    <div className='main'>
        <br />
        <h1> {value} </h1>
        <div>
            <button onClick={onIncrement}> + </button>
            <button onClick={onDecrement}> - </button>
        </div>
        
    </div>
  )
}

export default App;
