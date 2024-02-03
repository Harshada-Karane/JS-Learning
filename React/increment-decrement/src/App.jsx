import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import './App.css'
import { Tooltip } from '@mui/material';

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
            {/* <button onClick={onIncrement}> 
                <AddIcon />
            </button> */}
            <Tooltip title="Increment">
                <Button variant="contained" startIcon={<AddIcon />} onClick={onIncrement}> 
                    Increment
                </Button>
            </Tooltip>

            <Tooltip title="Decrement">
                <Button variant="outlined" endIcon={<RemoveIcon />} onClick={onDecrement}>
                    Decrement
                </Button>
            </Tooltip>
        </div>
        
    </div>
  )
}

export default App;
