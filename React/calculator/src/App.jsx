import React from 'react';
import add, {subtract} from './Calculate';

function App(){
    return (
        <>
            <h4>Addition is {add(1, 4)}</h4>
            <h4>Subtraction is {subtract(5, 4)}</h4>
        </>
    );
}

export default App;